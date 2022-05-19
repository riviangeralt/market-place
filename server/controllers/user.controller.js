const User = require("../models/user.model");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../helpers/sendEmail");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        data: null,
        error: {
          message: "User not found",
        },
        status: 0,
      });
      //we will implement code for jwt token later

      return res.status(200).json({
        data: user,
        error: null,
        status: 1,
      });
    }
  } catch (error) {
    res.status(500).json({
      data: null,
      error: error.message,
      status: 0,
    });
  }
};

exports.register = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        data: null,
        error: {
          message: "User already exists",
        },
        status: 0,
      });
    }
    const token = jwt.sign(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      },
      process.env.JWT_ACCOUNT_ACTIVATION,
      { expiresIn: "10m" }
    );

    const response = await sendEmail(req.body.email, token, req.body.name);

    console.log("Message sent: %s", response.messageId);
    // const user = await User.create({
    //   name,
    //   email,
    //   password,
    //   avatar,
    //   interests,
    // });
    //we will implement code for jwt token later
    res.status(200).json({
      data: `Email has been sent to ${req.body.email}.\n Follow the instructions to complete your registration.`,
      error: null,
      status: 1,
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      error: error.message,
      status: 0,
    });
  }
};
