const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { name, email, message } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'A name is required!' });
  }

  if (!email) {
    return res.status(400).json({ error: 'An email is required!' });
  }

  if (!message) {
    return res.status(400).json({ error: 'A message is required!' });
  }

  const formattedMessage = `
    Name: ${name}\r\n
    Email: ${email}\r\n
    Message: ${message}
  `;

  await mail.send({
    to: 'hello@bukitt.com',
    from: 'hello@bukitt.com',
    subject: 'New Message!',
    text: formattedMessage,
    html: formattedMessage.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({ status: 'Ok' });
};
