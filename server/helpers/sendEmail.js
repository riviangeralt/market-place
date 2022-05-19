const nodemailer = require("nodemailer");

exports.sendEmail = async (email, token, name) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });
    let info = await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: "Welcome to the community, " + name + "!",
      html: `
              <h2>Hi ${name},</h2>
              <p>Please click on the following link to activate your account:</p>
              <a href="${process.env.CLIENT_URL}/auth/activate/${token}">Activate Account</a>
            `,
    });
    return info;
  } catch (error) {
    res.status(500).json({
      data: null,
      error: error.message,
      status: 0,
    });
  }
};
