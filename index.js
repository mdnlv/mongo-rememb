const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index.js");

const app = express();
mongoose.set('strictQuery', false);
app.use(express.json());

mongoose.connect(
  "mongodb+srv://md:fwDtWFk22LXxbjlk@cluster0.1ttrtw8.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(router);

app.listen(3000, () => {
  console.log("Server is running...");
});
