"use strict";
const jwt = require("jsonwebtoken");
const bycrypt = require("bcryptjs");

const HttpResponse = require("../models/http-response");
const User = require("../models/userModel");

const signup = async (req, res, next) => {
  console.log("signup api call", req.body);
  const {
    body: { email, userName, password },
  } = req;

  // checking if user already exists
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpResponse(
      "Signing up failed, Something went wrong while checking existing user",
      500
    );
    return res.send(error);
  }
  if (existingUser) {
    const error = new HttpResponse(
      "User exists already, please login instead.",
      422
    );
    return res.status(422).json({ response: error });
  }

  //creating a hashed password and saving the user into mongo.
  let hashedPassword;
  try {
    hashedPassword = await bycrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpResponse("Hashing Failed ..", 500);
    return res.status(500).json({ response: error });
  }
  var createdUser;

  createdUser = new User({
    email,
    userName,
    password: hashedPassword,
  });

  try {
    await createdUser.save();
  } catch (err) {
    console.log(err);
    const error = new HttpResponse(err, 500);
    return res.status(500).json({ response: error });
  }
  //generating JWT TOKEN
  let token;
  try {
    token = jwt.sign(
      {
        email: createdUser.email,
        userName: createdUser.userName,
      },
      "This is store-app Prive Key",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpResponse(
      "Token generation failed, Login not done",
      500
    );
    return res.status(500).json({ response: error });
  }

  res.status(201).json({
    email: createdUser.email,
    userName: createdUser.userName,
    token: token,
  });
  res.send({
    email: createdUser.email,
    userName: createdUser.userName,
    token: token,
  });
};

//===========================================================================

// LOGIN FUNCTION
const login = async (req, res) => {
  const { email, password } = req.body;

  //trying to find if user email exists.
  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpResponse(
      "Something went wrong while checking user email",
      500
    );
    return res.status(500).json({ response: error });
  }
  if (!existingUser) {
    const error = new HttpResponse("Invalid user", 401);
    return res.status(500).json({ response: error });
  }

  let isValidPassword;

  try {
    isValidPassword = await bycrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpResponse(
      "Something went wrong while comparing passwords",
      500
    );
    return res.status(500).json({ response: error });
  }

  if (!isValidPassword) {
    const error = new HttpResponse("Wrong password entered", 401);
    return res.status(401).json({ response: error });
  }

  //generating JWT TOKEN- DO NOT TOUCH
  let token;
  try {
    token = jwt.sign({ email: email }, "key", {
      expiresIn: "1h",
    });
  } catch (err) {
    const error = new HttpResponse(
      "Token generation failed, Login not done",
      500
    );
    return res.status(500).json({ response: error });
  }
  res.json({
    email: email,
    token: token,
  });
};

exports.login = login;
exports.signup = signup;
