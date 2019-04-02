require("now-env");
const express = require("express");
const helmet = require("helmet");
const app = express();
const Instagram = require("node-instagram").default;
const json = require("body-parser").json;
const User = require("../../models/User");

// add some security-related headers to the response
app.use(helmet());
app.use(json());

app.get("*", async (req, res) => {
  try {
    const code = req.query.code;

    const instagram = new Instagram({
      clientId: process.env.INSTAGRAM_CLIENT_KEY,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
    });

    const ig_auth = await instagram.authorizeUser(
      code,
      process.env.NODE_ENV === "production"
        ? process.env.INSTAGRAM_REDIRECT_URL
        : "http://localhost:3000/login"
    );

    instagram.config.accessToken = ig_auth.access_token;

    const ig_user_res = await instagram.get("users/self");
    const ig_user = ig_user_res.data;

    const user = await User.query().insert({
      name: ig_user.full_name,
      username: ig_user.username,
      photo: ig_user.profile_picture,
      bio: ig_user.bio,
      createdAt: new Date()
    });

    res.send(user);
  } catch (err) {
    res.json(err);
  }
});

module.exports = app;
