require("now-env");
const express = require("express");
const helmet = require("helmet");
const app = express();
const json = require("body-parser").json;
const User = require("../../models/User");

// add some security-related headers to the response
app.use(helmet());
app.use(json());

app.get("*", async (req, res) => {
  try {
    const user = await User.query()
      .where("username", req.query.username)
      .first();
    res.send(user);
  } catch (err) {
    res.json(err);
  }
});

module.exports = app;
