// pages/api/contact.ts - Contact Form API Route
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const { name, email, phone, service, message }: ContactFormData = req.body;

    // Basic validation
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'Моля попълнете всички задължителни полета'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Невалиден имейл адрес'
      });
    }

    // Create nodemailer transporter for Referati.website domain email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // mail.referati.website
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true for port 465 (SSL/TLS)
      auth: {
        user: process.env.SMTP_USER, // orders@referati.website
        pass: process.env.SMTP_PASS, // email password
      },
      // Additional SSL options for custom domains
      tls: {
        rejectUnauthorized: false // Allow self-signed certificates if needed
      }
    });

    // HTML template for client confirmation email
    const clientEmailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Благодарим за запитването!</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb, #1e40af); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
        .highlight { background: #eff6ff; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0; }
        .button { display: inline-block; background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; }
        .footer { text-align: center; margin-top: 30px; color: #64748b; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Благодарим за запитването!</h1>
          <p>Получихме вашата заявка и ще се свържем с вас скоро</p>
        </div>

        <div class="content">
          <p>Здравейте <strong>${name}</strong>,</p>

          <p>Благодарим ви за доверието! Получихме вашата заявка за <strong>${service}</strong> и вече работим по нея.</p>

          <div class="highlight">
            <h3>📋 Детайли на заявката:</h3>
            <p><strong>Услуга:</strong> ${service}</p>
            <p><strong>Описание:</strong> ${message}</p>
            ${phone ? `<p><strong>Телефон:</strong> ${phone}</p>` : ''}
          </div>

          <h3>⏰ Какво следва?</h3>
          <ul>
            <li><strong>До 30 минути:</strong> Ще получите персонализирана оферта</li>
            <li><strong>До 2 часа:</strong> Ще се свържем с вас за уточняване на детайлите</li>
            <li><strong>След потвърждение:</strong> Започваме работа по проекта</li>
          </ul>

          <p style="text-align: center; margin: 30px 0;">
            <a href="https://www.referati.website" class="button">Разгледайте нашите услуги</a>
          </p>

          <div class="highlight">
            <h4>📞 За спешни случаи:</h4>
            <p><strong>Телефон:</strong> +359 000 000 000</p>
            <p><strong>Viber/WhatsApp:</strong> +359 000 000 000</p>
            <p><strong>Имейл:</strong> orders@referati.website</p>
          </div>
        </div>

        <div class="footer">
          <p>Referati.website | Професионални академични услуги</p>
          <p>Този имейл беше изпратен автоматично. Моля не отговаряйте.</p>
        </div>
      </div>
    </body>
    </html>
    `;

    // HTML template for admin notification email
    const adminEmailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Нова заявка от сайта</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #dc2626; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #2563eb; }
        .urgent { background: #fef2f2; border-left-color: #dc2626; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚨 НОВА ЗАЯВКА ОТ САЙТА</h1>
          <p>Получена на ${new Date().toLocaleString('bg-BG')}</p>
        </div>

        <div class="content">
          <div class="field urgent">
            <strong>КЛИЕНТ:</strong> ${name}
          </div>

          <div class="field">
            <strong>ИМЕЙЛ:</strong> ${email}
          </div>

          ${phone ? `<div class="field"><strong>ТЕЛЕФОН:</strong> ${phone}</div>` : ''}

          <div class="field">
            <strong>УСЛУГА:</strong> ${service}
          </div>

          <div class="field">
            <strong>ОПИСАНИЕ:</strong><br>
            ${message}
          </div>

          <div class="field urgent">
            <strong>ДЕЙСТВИЕ:</strong> Свържете се с клиента до 30 минути!
          </div>
        </div>
      </div>
    </body>
    </html>
    `;

    // Send confirmation email to client
    await transporter.sendMail({
      from: `"Referati.website" <orders@referati.website>`,
      to: email,
      subject: '🎉 Благодарим за запитването! Ще се свържем скоро',
      html: clientEmailHTML,
      text: `Здравейте ${name},\n\nБлагодарим за запитването! Получихме вашата заявка за ${service} и ще се свържем с вас до 30 минути.\n\nРeferati.website`
    });

    // Send notification email to admin
    await transporter.sendMail({
      from: `"Referati.website Contact Form" <orders@referati.website>`,
      to: 'orders@referati.website',
      subject: `🚨 НОВА ЗАЯВКА: ${service} - ${name}`,
      html: adminEmailHTML,
      text: `НОВА ЗАЯВКА ОТ САЙТА\n\nКлиент: ${name}\nИмейл: ${email}\nТелефон: ${phone || 'Не е посочен'}\nУслуга: ${service}\nОписание: ${message}`
    });

    // Success response
    res.status(200).json({
      success: true,
      message: 'Заявката беше изпратена успешно!'
    });

  } catch (error) {
    console.error('Contact form error:', error);

    res.status(500).json({
      success: false,
      message: 'Възникна грешка при изпращането',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}