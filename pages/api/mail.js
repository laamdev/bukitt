const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    category,
    product,
    group,
    startDate,
    endDate,
    message,
  } = req.body;

  if (!firstName) {
    return res.status(400).json({ error: 'A first name is required!' });
  }

  if (!lastName) {
    return res.status(400).json({ error: 'A last name is required!' });
  }

  if (!email) {
    return res.status(400).json({ error: 'An email is required!' });
  }

  if (!phone) {
    return res.status(400).json({ error: 'An phone is required!' });
  }

  if (!category) {
    return res.status(400).json({ error: 'A category is required!' });
  }

  if (!product) {
    return res.status(400).json({ error: 'A product is required!' });
  }

  if (!group) {
    return res.status(400).json({ error: 'A group size is required!' });
  }

  if (!startDate) {
    return res.status(400).json({ error: 'A travel start date is required!' });
  }

  if (!endDate) {
    return res.status(400).json({ error: 'A travel end date is required!' });
  }

  if (!message) {
    return res.status(400).json({ error: 'A message is required!' });
  }

  const formattedMessage = `
    Name: ${firstName} ${lastName}\r\n
    Email: ${email}\r\n
    Phone: ${phone}\r\n
    Category: ${category}\r\n
    Product: ${product}\r\n
    Group Size: ${group}\r\n
    Travel Start Date: ${startDate}\r\n
    Travel End Date: ${endDate}\r\n
    Message: ${message}
  `;

  await mail.send({
    to: 'hello@bukitt.com',
    from: 'hello@bukitt.com',
    subject: `New inquiry from ${firstName} ${lastName}: ${category} - ${product}`,
    text: formattedMessage,
    html: formattedMessage.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({ status: 'Ok' });
};
