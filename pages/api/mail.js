import { format } from 'date-fns';
import { google } from 'googleapis';

const mail = require('@sendgrid/mail');
const API_KEY = process.env.SENDGRID_API_KEY;

mail.setApiKey(API_KEY);

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

  const formattedStartDate = format(new Date(startDate), 'MM-dd-yyyy');
  const formattedEndDate = format(new Date(endDate), 'MM-dd-yyyy');

  const today = new Date();
  const todayDate = `${today.getHours()}hr ${today.getMinutes()}min, ${today.getMonth()}-${today.getDate()}-${today.getFullYear()}`;

  const formattedMessage = `
    Date of Inquiry: ${todayDate}\r\n
    Name: ${firstName} ${lastName}\r\n
    Email: ${email}\r\n
    Phone: ${phone}\r\n
    Category: ${category}\r\n
    Product: ${product}\r\n
    Group Size: ${group}\r\n
    Travel Start Date: ${formattedStartDate}\r\n
    Travel End Date: ${formattedEndDate}\r\n
    Message: ${message}
  `;

  try {
    // send email
    await mail.send({
      to: 'hello@bukitt.com',
      from: 'hello@bukitt.com',
      subject: `New inquiry from ${firstName} ${lastName}: ${category} - ${product}`,
      text: formattedMessage,
      html: formattedMessage.replace(/\r\n/g, '<br>'),
    });
    // prepare auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:K1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            firstName,
            lastName,
            email,
            phone,
            category,
            product,
            group,
            formattedStartDate,
            formattedEndDate,
            message,
            todayDate,
          ],
        ],
      },
    });

    return res.status(200).json({
      data: response.data,
      status: 'ok',
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: error.message ?? 'Something went wrong' });
  }
};
