import nodemailer from "nodemailer";

const { ADMIN_EMAIL, ADMIN_EMAIL_PASS, TARGET_EMAIL } = process.env;

const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: ADMIN_EMAIL,
      pass: ADMIN_EMAIL_PASS
    }
  });
};

const sendEmail = async (name, email, message) => {
  console.log({
    ADMIN_EMAIL,
    ADMIN_EMAIL_PASS,
    name,
    email,
    message
  });

  const transporter = createTransporter();

  const mailOptions = {
    from: ADMIN_EMAIL,
    to: TARGET_EMAIL,
    subject: "Portfolio - Contact Form",
    html: `
      <p>
        ${message}
      </p>
      <br />
      <code>My Name: ${name}</code>
      <p>My Email: ${email}</p>
    `
  };

  try {
    const response = await transporter.sendMail(mailOptions);
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email. Please try again later.");
  }
};

export default sendEmail;
