export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const { fullName, mobile, email, service, message, website } = req.body || {};

  if (website) {
    return res.status(400).json({ message: 'Invalid request.' });
  }

  if (!fullName || !fullName.trim()) {
    return res.status(400).json({ message: 'Full name is required.' });
  }

  if (!mobile || !mobile.trim()) {
    return res.status(400).json({ message: 'Mobile number is required.' });
  }

  if (!/^(\+91|91)?[6-9]\d{9}$/.test(String(mobile).replace(/\s+/g, ''))) {
    return res.status(400).json({ message: 'Please provide a valid Indian mobile number.' });
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  const serviceValue = service || 'General Enquiry';
  const mailTo = process.env.EMAIL_TO || 'licanand1@gmail.com';
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPassword) {
    return res.status(503).json({
      message: 'The email service is not configured yet. Set SMTP_HOST, SMTP_USER, SMTP_PASS and EMAIL_TO to enable live enquiry delivery.',
    });
  }

  try {
    const nodemailer = (await import('nodemailer')).default;
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: Number(smtpPort) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || smtpUser,
      to: mailTo,
      replyTo: email || mobile,
      subject: `New website enquiry: ${serviceValue}`,
      text: [
        `Name: ${fullName.trim()}`,
        `Mobile: ${mobile.trim()}`,
        `Email: ${email ? email.trim() : 'Not provided'}`,
        `Service: ${serviceValue}`,
        `Message: ${message ? message.trim() : 'No message provided'}`,
      ].join('\n'),
    });

    return res.status(200).json({ message: 'Enquiry submitted successfully.' });
  } catch (error) {
    return res.status(500).json({
      message: 'Unable to send your enquiry at the moment. Please try again later.',
    });
  }
}
