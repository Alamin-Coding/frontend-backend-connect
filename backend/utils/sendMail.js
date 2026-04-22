const nodemailer = require("nodemailer");

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendMail = async (email, username, id) => {
  try {
    const info = await transporter.sendMail({
      from: '"Example Team" <team@example.com>', // sender address
      to: email, // list of recipients
      subject: "Email Verification", // subject line
      html: `<body style=margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,sans-serif><table cellpadding=0 cellspacing=0 role=presentation style="background-color:#f4f4f4;padding:40px 0"width=100%><tr><td align=center><table cellpadding=0 cellspacing=0 role=presentation style="max-width:600px;background-color:#fff;border-radius:8px;overflow:hidden;box-shadow:0 4px 15px rgba(0,0,0,.05)"width=100%><tr><td style="background-color:#1a73e8;padding:30px 40px;text-align:center"><h1 style=color:#fff;margin:0;font-size:28px;font-weight:600>Your Brand Name</h1><tr><td style="padding:40px 40px 30px 40px"><h2 style="color:#1f2937;margin:0 0 20px 0;font-size:24px;font-weight:600">Hello ${username},</h2><p style="color:#4b5563;font-size:16px;line-height:1.6;margin:0 0 25px 0"><p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                                Thank you for signing up with <strong>TechFlow</strong>. We're excited to have you on board!
                            </p><table cellpadding=0 cellspacing=0 role=presentation style="margin:30px 0"><tr><td style=background-color:#1a73e8;border-radius:6px align=center><a href="http://localhost:5000/api/v1/auth/verify/${id}" style="display:inline-block;padding:14px 32px;color:#fff;text-decoration:none;font-size:16px;font-weight:600;border-radius:6px">Varify Email</a></table><p style="color:#6b7280;font-size:15px;line-height:1.6;margin:30px 0 0 0">If you have any questions, feel free to reply to this email.<tr><td style="background-color:#f9fafb;padding:30px 40px;text-align:center;border-top:1px solid #e5e7eb"><p style="color:#6b7280;font-size:13px;margin:0 0 8px 0">© 2026 Your Brand Name. All rights reserved.<p style=color:#9ca3af;font-size:12px;margin:0>Dhaka, Bangladesh</table><p style="color:#9ca3af;font-size:12px;margin:20px 0 0 0;text-align:center">This email was sent to ${email}.<br>If you no longer wish to receive these emails, you can <a href=# style=color:#6b7280>unsubscribe</a>.</table>`, // HTML body
    });

    console.log("Message sent: %s", info.messageId);
    // Preview URL is only available when using an Ethereal test account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Error while sending mail:", err);
  }
}

module.exports = sendMail;