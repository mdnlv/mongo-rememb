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

app.delete("/profile/:id", async (request, response) => {
  try {
    const profile = await profileModel.findByIdAndDelete(request.params.id);

    if (!profile) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});


app.patch("/profile/:id", async (request, response) => {
  try {
    await profileModel.findByIdAndUpdate(request.params.id, request.body);
    await profileModel.save();
    response.send(profile);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
