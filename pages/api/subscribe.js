export default async function handler(req, res) {
  const { email } = req.body;

  // 1. Get the email from the payload and

  if (!email) {
    return res.status(400).json({ error: 'Please enter your email.' });
  }

  // 2. Use the Sendgrid API Key and create a subscriber

  try {
    const API_KEY = process.env.SENDGRID_API_KEY;

    const API_URL = 'https://api.sendgrid.com/v3/marketing/contacts';

    const API_OPTIONS = {
      method: 'PUT',
      body: JSON.stringify({
        contacts: [{ email: email }],
        list_ids: [process.env.SENDGRID_MAILING_ID],
      }),
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'content-type': 'application/json',
        'User-Agent': '*',
      },
    };

    const response = await fetch(API_URL, API_OPTIONS);

    console.log(JSON.stringify(response, null, 2));

    if (response.status >= 400) {
      const message = await response.json();
      return res.status(400).json({ error: message.error.email[0] });
    }
    res.status(201).json({
      message: `Welcome ${email}. Thanks for subscribing!`,
      error: '',
    });
  } catch (err) {
    // 4. If the control goes inside the catch block
    // let us consider it as a server error(500)
    return res.status(500).json({ error: err.message || error.toString() });
  }
}
