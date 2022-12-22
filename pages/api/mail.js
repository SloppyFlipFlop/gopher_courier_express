import { SMTPClient } from "emailjs";

export default function handler(req, res) {
  const data = req.body.formData;

  const client = new SMTPClient({
    user: process.env.GOOGLE_AUTH_EMAIL,
    password: process.env.GOOGLE_AUTH_EMAIL_PASSWORD,
    host: "smtp.gmail.com",
    ssl: true,
  });

  try {
    client.send({
      text: data.message,
      from: `${data.name} <${data.email}>`,
      to: process.env.EMAIL, // your email, which is:
      subject: data.subject,
    });
  } catch (e) {
    res.status(400).end(JSON.stringify({ message: "Error" }));
    return;
  }

  res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}
