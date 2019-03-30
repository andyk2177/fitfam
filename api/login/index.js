const express = require("express");
const helmet = require("helmet");
const app = express();
const instagram = require("node-instagram").default;
const json = require("body-parser").json;

// add some security-related headers to the response
app.use(helmet());
app.use(json());

app.get("*", async (req, res) => {
  try {
    const code = req.query.code;
    const data = await instagram.authorizeUser(code);

    console.log("yeet");
    console.log(data);
  } catch (err) {
    res.json(err);
  }
});

module.exports = app;
