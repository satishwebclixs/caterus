import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, eventType, guests, eventDate } = req.body

  if (!name || !phone || !eventType) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await resend.emails.send({
      from: 'CaterUs Inquiry <onboarding@resend.dev>',
      to: ['satish.webclixs@gmail.com'],
      subject: `New Catering Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0d9488; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #fff; margin: 0;">New Catering Inquiry</h2>
            <p style="color: #ccfbf1; margin: 4px 0 0;">via CaterUs Website</p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; width: 140px; font-size: 14px;">Name</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 600; font-size: 14px;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Phone</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 600; font-size: 14px;">
                  <a href="tel:${phone}" style="color: #0d9488;">${phone}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Event Type</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 600; font-size: 14px;">${eventType}</td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Guest Count</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 600; font-size: 14px;">${guests || 'Not specified'}</td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Event Date</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 600; font-size: 14px;">${eventDate || 'Not specified'}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background: #fff; border-radius: 6px; border: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #374151; font-size: 13px;">
                📞 Call back on: <a href="tel:${phone}" style="color: #0d9488; font-weight: 600;">${phone}</a>
              </p>
            </div>
          </div>
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 16px;">
            CaterUs — caterus.honeyanddough.in
          </p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
