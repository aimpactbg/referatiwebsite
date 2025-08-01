// pages/api/contact.ts - FALLBACK: Direct mailto redirect
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message } = req.body;

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

    // Create email body for orders@referati.website
    const emailBody = `
НОВА ЗАЯВКА ОТ САЙТА

Клиент: ${name}
Имейл: ${email}
Телефон: ${phone || 'Не е посочен'}
Услуга: ${service}

Описание:
${message}

---
Изпратено от: ${new Date().toLocaleString('bg-BG')}
    `.trim();

    // For now, just return success
    res.status(200).json({
      success: true,
      message: 'Заявката беше получена успешно!',
      emailBody: emailBody // For manual copying
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Възникна грешка при обработката'
    });
  }
}