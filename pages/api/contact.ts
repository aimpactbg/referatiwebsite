// pages/api/contact.ts - SIMPLIFIED DEBUG VERSION
import type { NextApiRequest, NextApiResponse } from 'next';

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
  debug?: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  console.log('=== CONTACT API DEBUG START ===');
  console.log('Method:', req.method);
  console.log('Body:', req.body);

  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('ERROR: Method not allowed');
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const { name, email, phone, service, message }: ContactFormData = req.body;

    console.log('Form data received:', { name, email, service, message });

    // Basic validation
    if (!name || !email || !service || !message) {
      console.log('ERROR: Missing required fields');
      return res.status(400).json({
        success: false,
        message: 'Моля попълнете всички задължителни полета'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('ERROR: Invalid email');
      return res.status(400).json({
        success: false,
        message: 'Невалиден имейл адрес'
      });
    }

    // Check environment variables
    console.log('Environment check:', {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS: process.env.SMTP_PASS ? 'SET' : 'NOT SET'
    });

    // For now, just return success without sending emails
    console.log('SUCCESS: Form validation passed');

    // Simulate email sending success
    res.status(200).json({
      success: true,
      message: 'Заявката беше получена! (Debug mode - email не е изпратен)',
      debug: {
        formData: { name, email, phone, service, message },
        envVars: {
          SMTP_HOST: process.env.SMTP_HOST,
          SMTP_PORT: process.env.SMTP_PORT,
          SMTP_USER: process.env.SMTP_USER,
          SMTP_PASS_SET: !!process.env.SMTP_PASS
        }
      }
    });

  } catch (error) {
    console.error('CONTACT API ERROR:', error);

    res.status(500).json({
      success: false,
      message: 'Възникна грешка при обработката',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      debug: {
        errorMessage: error.message,
        errorStack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }
    });
  }
}