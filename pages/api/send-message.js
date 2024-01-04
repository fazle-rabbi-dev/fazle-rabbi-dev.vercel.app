import sendMail from "../../lib/send-mail";

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message:
        "Failed to send email. Ensure that the request body includes fields for name, email, and message."
    });
  }

  // Send email
  try {
    await sendMail(name, email, message);

    res.status(200).json({
      success: true,
      message: "Email sent successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Oops! There was a server side error."
    });
  }
}
