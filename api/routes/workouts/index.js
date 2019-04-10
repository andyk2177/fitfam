require("now-env");
const express = require("express");
const helmet = require("helmet");
const app = express();
const json = require("body-parser").json;
const Workout = require("../../models/Workout");

// add some security-related headers to the response
app.use(helmet());
app.use(json());

app.get("*", async (req, res) => {
  try {
    const workouts = await Workout.query();
    res.send(users);
  } catch (err) {
    res.json(err);
  }
});

module.exports = app;
