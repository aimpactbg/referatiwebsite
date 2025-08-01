// pages/api/contact.ts - WITH FILE UPLOAD SUPPORT
import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { IncomingForm, File as FormidableFile } from 'formidable';
import fs from 'fs';
import path from 'path';

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Disable body parser for multipart forms
export const config = {
  api: {
    bodyParser: false,
  },
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
}

interface ProcessedFile {
  originalName: string;
  size: number;
  type: string;
  isBase64: boolean;
  base64Data?: string;
  tempPath?: string;
  downloadUrl?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  console.log('=== API CALLED ===');
  console.log('Method:', req.method);
  console.log('Content-Type:', req.headers['content-type']);
  console.log('Body type:', typeof req.body);
  console.log('==================');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Parse multipart form
    const { fields, files } = await parseForm(req);

    // Extract form data
    const formData: ContactFormData = {
      name: Array.isArray(fields.name) ? fields.name[0] : fields.name || '',
      email: Array.isArray(fields.email) ? fields.email[0] : fields.email || '',
      phone: Array.isArray(fields.phone) ? fields.phone[0] : fields.phone || '',
      service: Array.isArray(fields.service) ? fields.service[0] : fields.service || '',
      subject: Array.isArray(fields.subject) ? fields.subject[0] : fields.subject || '',
      message: Array.isArray(fields.message) ? fields.message[0] : fields.message || '',
    };

    // Validate required fields
    const requiredFields = ['name', 'email', 'service', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({ 
        message: 'Missing required fields', 
        fields: missingFields 
      });
    }

    // Process uploaded files
    const processedFiles = await processFiles(files);

    // Generate expiration date (14 days from now)
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 14);
    const expirationDateStr = expirationDate.toLocaleDateString('bg-BG');

    // Email to client (confirmation)
    const clientEmail = {
      to: formData.email,
      from: {
        email: 'orders@referati.website',
        name: 'Referati.website'
      },
      subject: `Вашата заявка от Referati.website`,
      html: generateClientEmailTemplate(formData, processedFiles),
      attachments: generateEmailAttachments(processedFiles, 'client')
    };

    // Email to admin (notification)
    const adminEmail = {
      to: 'orders@referati.website',
      from: {
        email: 'orders@referati.website',
        name: `${formData.name} via Referati.website`
      },
      replyTo: formData.email,
      subject: `Нова заявка за ${formData.service}`,
      html: generateAdminEmailTemplate(formData, processedFiles, expirationDateStr),
      attachments: generateEmailAttachments(processedFiles, 'admin')
    };

    // Send both emails
    await Promise.all([
      sgMail.send(clientEmail),
      sgMail.send(adminEmail)
    ]);

    console.log('Emails sent successfully with files:', processedFiles.length);

    // Clean up temporary files after a delay
    setTimeout(() => cleanupTempFiles(processedFiles), 5000);

    res.status(200).json({ 
      message: 'Emails sent successfully',
      success: true,
      filesProcessed: processedFiles.length
    });

  } catch (error) {
    console.error('API Error:', error);

    if (error.response) {
      console.error('SendGrid Response:', error.response.body);
      return res.status(500).json({ 
        message: 'Failed to send email',
        error: error.response.body.errors?.[0]?.message || 'Unknown SendGrid error'
      });
    }

    res.status(500).json({ 
      message: 'Server error', 
      error: error.message 
    });
  }
}

// Parse multipart form data
function parseForm(req: NextApiRequest): Promise<{ fields: any; files: any }> {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm({
      maxFileSize: 5 * 1024 * 1024, // 5MB per file
      maxTotalFileSize: 20 * 1024 * 1024, // 20MB total
      allowEmptyFiles: false,
      multiples: true,
    });

    form.parse(req, (err, fields, files) => {

      console.log('=== FORMIDABLE DEBUG ===');
      console.log('Error:', err);
      console.log('Fields received:', fields);
      console.log('Files received:', files);
      console.log('File keys:', Object.keys(files));
      console.log('========================');
    
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

// Fixed processFiles function
async function processFiles(files: any): Promise<ProcessedFile[]> {
  console.log('=== PROCESS FILES DEBUG ===');
  console.log('Files object:', files);

  const processedFiles: ProcessedFile[] = [];

  // Handle formidable's file structure
  for (const [key, fileArray] of Object.entries(files)) {
    if (!key.startsWith('file_')) continue;

    // Formidable returns files as arrays
    const fileList = Array.isArray(fileArray) ? fileArray : [fileArray];

    for (const file of fileList) {
      if (!file) continue;

      const formFile = file as FormidableFile;
      const sizeInMB = formFile.size / (1024 * 1024);

      console.log(`Processing file: ${formFile.originalFilename}, size: ${sizeInMB.toFixed(2)}MB`);

      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
        'image/jpeg',
        'image/png', 
        'image/gif',
        'application/zip',
        'application/x-rar-compressed'
      ];

      if (!allowedTypes.includes(formFile.mimetype || '')) {
        console.warn(`Skipping unsupported file type: ${formFile.mimetype}`);
        continue;
      }

      const processedFile: ProcessedFile = {
        originalName: formFile.originalFilename || 'unknown',
        size: formFile.size,
        type: formFile.mimetype || 'unknown',
        isBase64: sizeInMB < 1, // Files < 1MB as base64
      };

      if (processedFile.isBase64) {
        // Convert small files to base64
        console.log(`Converting ${formFile.originalFilename} to base64`);
        const fileBuffer = fs.readFileSync(formFile.filepath);
        processedFile.base64Data = fileBuffer.toString('base64');
      } else {
        // Keep large files as temporary files with download URLs
        console.log(`Storing ${formFile.originalFilename} as temp file`);
        const tempDir = path.join(process.cwd(), 'tmp');
        if (!fs.existsSync(tempDir)) {
          fs.mkdirSync(tempDir, { recursive: true });
        }

        const tempFileName = `${Date.now()}_${formFile.originalFilename}`;
        const tempPath = path.join(tempDir, tempFileName);

        // Copy to temp location
        fs.copyFileSync(formFile.filepath, tempPath);

        processedFile.tempPath = tempPath;
        processedFile.downloadUrl = `/api/download/${tempFileName}`;

        console.log(`File saved to: ${tempPath}`);
      }

      processedFiles.push(processedFile);
    }
  }

  console.log(`Total processed files: ${processedFiles.length}`);
  console.log('============================');

  return processedFiles;
}

// Generate email attachments
function generateEmailAttachments(files: ProcessedFile[], type: 'client' | 'admin') {
  const attachments: any[] = [];

  files.forEach(file => {
    if (file.isBase64 && file.base64Data) {
      // Attach small files directly
      attachments.push({
        filename: file.originalName,
        content: file.base64Data,
        encoding: 'base64',
        type: file.type,
      });
    }
    // Large files will be included as download links in HTML
  });

  return attachments;
}

// Client confirmation email template with files
function generateClientEmailTemplate(data: ContactFormData, files: ProcessedFile[]): string {
  const attachedFiles = files.filter(f => f.isBase64);
  const downloadFiles = files.filter(f => !f.isBase64);

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Потвърждение за заявка</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9fafb; }
        .details { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; }
        .files { background: #e0f2fe; padding: 15px; margin: 10px 0; border-radius: 5px; }
        .file-item { padding: 5px 0; border-bottom: 1px solid #ccc; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
        .highlight { color: #1e40af; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Referati.website</h1>
          <p>Благодарим за вашата заявка!</p>
        </div>

        <div class="content">
          <p>Здравейте <strong>${data.name}</strong>,</p>

          <p>Получихме вашата заявка и ще се свържем с вас в рамките на <span class="highlight">2 часа</span>.</p>

          <div class="details">
            <h3>Детайли на заявката:</h3>
            <p><strong>Услуга:</strong> ${data.service}</p>
            <p><strong>Тема:</strong> ${data.subject}</p>
            <p><strong>Телефон:</strong> ${data.phone || 'Не е посочен'}</p>
          </div>

          ${files.length > 0 ? `
          <div class="files">
            <h3>📎 Прикачени файлове (${files.length}):</h3>
            ${attachedFiles.map(file => `
              <div class="file-item">
                <strong>${file.originalName}</strong> (${(file.size / 1024).toFixed(1)} KB) - прикачен към email-а
              </div>
            `).join('')}
            ${downloadFiles.map(file => `
              <div class="file-item">
                <strong>${file.originalName}</strong> (${(file.size / 1024 / 1024).toFixed(1)} MB) - ще бъде обработен от нашия екип
              </div>
            `).join('')}
          </div>
          ` : ''}

          <div class="details">
            <h3>Вашето съобщение:</h3>
            <p>${data.message}</p>
          </div>

          <p>Нашият екип ще прегледа заявката и ще ви изпрати персонализирана оферта.</p>

          <p><strong>За спешни въпроси:</strong><br>
          📞 Телефон: +359 000 000 000<br>
          📧 Email: orders@referati.website</p>
        </div>

        <div class="footer">
          <p>С уважение,<br>Екипът на Referati.website</p>
          <p><small>Този email е изпратен автоматично. Моля, не отговаряйте директно.</small></p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Admin notification email template with files
function generateAdminEmailTemplate(data: ContactFormData, files: ProcessedFile[], expirationDate: string): string {
  const attachedFiles = files.filter(f => f.isBase64);
  const downloadFiles = files.filter(f => !f.isBase64);

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Нова заявка</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #dc2626; color: white; padding: 20px; text-align: center; }
        .urgent { background: #fee2e2; border-left: 4px solid #dc2626; padding: 15px; margin: 10px 0; }
        .client-info { background: #f0f9ff; padding: 15px; margin: 10px 0; border-radius: 5px; }
        .files { background: #f0fdf4; padding: 15px; margin: 10px 0; border-radius: 5px; }
        .file-item { padding: 8px; margin: 5px 0; background: white; border-radius: 3px; }
        .warning { background: #fef3c7; border: 1px solid #f59e0b; padding: 10px; border-radius: 5px; margin: 10px 0; }
        .message-box { background: #f9fafb; padding: 15px; margin: 10px 0; border: 1px solid #e5e7eb; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚨 НОВА ЗАЯВКА</h1>
          <p>Referati.website Contact Form</p>
        </div>

        <div class="urgent">
          <h3>⏰ ДЕЙСТВИЕ НЕОБХОДИМО</h3>
          <p>Нов клиент е изпратил заявка${files.length > 0 ? ` с ${files.length} файла` : ''}. Отговорете в рамките на 2 часа!</p>
        </div>

        <div class="client-info">
          <h3>👤 Информация за клиента:</h3>
          <p><strong>Име:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Телефон:</strong> ${data.phone ? `<a href="tel:${data.phone}">${data.phone}</a>` : 'Не е посочен'}</p>
        </div>

        <div class="client-info">
          <h3>📋 Детайли на поръчката:</h3>
          <p><strong>Услуга:</strong> ${data.service}</p>
          <p><strong>Тема:</strong> ${data.subject}</p>
        </div>

        ${files.length > 0 ? `
        <div class="files">
          <h3>📎 Прикачени файлове (${files.length}):</h3>
          ${attachedFiles.map(file => `
            <div class="file-item">
              <strong>📄 ${file.originalName}</strong><br>
              <small>Размер: ${(file.size / 1024).toFixed(1)} KB | Тип: ${file.type} | Прикачен към email-а</small>
            </div>
          `).join('')}
          ${downloadFiles.map(file => `
            <div class="file-item">
              <strong>📁 ${file.originalName}</strong><br>
              <small>Размер: ${(file.size / 1024 / 1024).toFixed(1)} MB | Тип: ${file.type}</small><br>
              <a href="${file.downloadUrl}" style="color: #1e40af;">⬇️ Изтегли файла</a>
            </div>
          `).join('')}

          ${downloadFiles.length > 0 ? `
          <div class="warning">
            <strong>⚠️ ВАЖНО:</strong> Големите файлове ще бъдат изтрити автоматично на <strong>${expirationDate}</strong> (14 дни). 
            Моля запазете копия или обработете заявката преди тази дата.
          </div>
          ` : ''}
        </div>
        ` : ''}

        <div class="message-box">
          <h3>💬 Съобщение от клиента:</h3>
          <p>${data.message}</p>
        </div>

        <div class="urgent">
          <h3>📞 СЛЕДВАЩИ СТЪПКИ:</h3>
          <ol>
            <li>Прегледайте заявката и файловете внимателно</li>
            <li>Подгответе персонализирана оферта</li>
            <li>Свържете се с клиента в рамките на 2 часа</li>
            <li>Изпратете потвърждение и оферта</li>
            ${downloadFiles.length > 0 ? '<li><strong>Запазете копия на големите файлове преди ' + expirationDate + '</strong></li>' : ''}
          </ol>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Clean up temporary files
function cleanupTempFiles(files: ProcessedFile[]) {
  files.forEach(file => {
    if (file.tempPath && fs.existsSync(file.tempPath)) {
      try {
        fs.unlinkSync(file.tempPath);
        console.log(`Cleaned up temp file: ${file.tempPath}`);
      } catch (error) {
        console.error(`Failed to cleanup temp file: ${file.tempPath}`, error);
      }
    }
  });
}