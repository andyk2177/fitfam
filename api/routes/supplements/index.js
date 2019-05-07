require("now-env");
const express = require("express");
const helmet = require("helmet");
const app = express();
const json = require("body-parser").json;
const Supplement = require("../../models/Supplement");

// add some security-related headers to the response
app.use(helmet());
app.use(json());

app.get("*", async (req, res) => {
  try {
    const supplements = await Supplement.query();
    res.send(supplements);
  } catch (err) {
    res.json(err);
  }
});

module.exports = app;
