const express = require("express");
const profileModel = require("../models/profile");
const app = express();

app.get("/profile", async (request, response) => {
  const profiles = await profileModel.find({});

  try {
    response.send(profiles);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/profile", async (request, response) => {
  const profile = new profileModel(request.body);

  try {
    await profile.save();
    response.send(profile);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
