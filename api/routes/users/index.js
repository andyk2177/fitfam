require("now-env");
const express = require("express");
const helmet = require("helmet");
const app = express();
const json = require("body-parser").json;

const mongo = require("mongo");

// add some security-related headers to the response
app.use(helmet());
app.use(json());

app.get("*", async (req, res) => {
  const t = Date.now();
  const db = await mongo();
  res.end("Connection took " + (Date.now() - t) + "ms");
});

module.exports = app;
