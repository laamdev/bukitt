export default async function handler(req, res) {
  const { firstName, lastName, email } = req.body;

  if (!firstName) {
    return res.status(400).json({ error: 'A first name is required!' });
  }

  if (!lastName) {
    return res.status(400).json({ error: 'A last name is required!' });
  }

  if (!email) {
    return res.status(400).json({ error: 'An email is required!' });
  }

  try {
    const API_KEY = process.env.SENDGRID_API_KEY;

    const API_URL = 'https://api.sendgrid.com/v3/marketing/contacts';

    const API_LIST = process.env.SENDGRID_MAILING_ID;

    const API_OPTIONS = {
      method: 'PUT',
      body: JSON.stringify({
        contacts: [
          {
            email: email,
            first_name: firstName,
            last_name: lastName,
          },
        ],
        list_ids: [API_LIST],
      }),
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'content-type': 'application/json',
        'User-Agent': '*',
      },
    };

    const response = await fetch(API_URL, API_OPTIONS);

    if (response.status >= 400) {
      const message = await response.json();
      return res.status(400).json({ error: message.error.email[0] });
    }
    res.status(201).json({
      message: `Welcome to Bukitt ${firstName} ${lastName}! Thanks for subscribing.`,
      error: '',
    });
  } catch (err) {
    return res.status(500).json({ error: err.message || error.toString() });
  }
}
