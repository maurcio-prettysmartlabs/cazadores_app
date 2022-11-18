const express = require("express");
const mongoose = require("mongoose");
const { json } = require("body-parser");
const cors = require("cors");

const app = express();

app.use(json({ limit: "100mb", type: "application/json" }));
app.use(cors());
app.set("trust proxy", true);

// Routes imports
const createCazadorRouter = require("./routes/Cazador/createCazador");
const getAllCazadoresRouter = require("./routes/Cazador/getAllCazadores");

const createTalentoRouter = require("./routes/Talento/createTalento");
const getAllTalentosRouter = require("./routes/Talento/getAllTalentos");

app.use(createTalentoRouter);
app.use(getAllTalentosRouter);

app.use(createCazadorRouter);
app.use(getAllCazadoresRouter);

const start = async () => {
  await mongoose.connect("mongodb+srv://MonMR00:Pan.tostado4@cluster0.cbeq5ju.mongodb.net/?retryWrites=true&w=majority");

  console.log("Cazadores service DB connected succesfully");
  app.listen(3000, () => {
    console.log("Service cazadores api started succesfully on port 3000!");
  });
};

start();
