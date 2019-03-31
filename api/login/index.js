require("now-env");
const express = require("express");
const helmet = require("helmet");
const app = express();
const Instagram = require("node-instagram").default;
const json = require("body-parser").json;

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

    const data = await instagram.authorizeUser(
      code,
      "http://localhost:3000/login"
    );

    res.send(data);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = app;
