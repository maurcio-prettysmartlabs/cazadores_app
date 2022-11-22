const express = require("express");
const mongoose = require("mongoose");
const { json } = require("body-parser");
const cors = require("cors");

const app = express();

app.use(json());
app.use(cors());

// Cazador routes imports
const createCazadorRouter = require("./routes/Cazador/createCazador");
const getAllCazadoresRouter = require("./routes/Cazador/getAllCazadores");

// Talentos routes imports
const createTalentoRouter = require("./routes/Talento/createTalento");
const getAllTalentosRouter = require("./routes/Talento/getAllTalentos");

// Proyectos routes imports
const createProjectRouter = require("./routes/Proyecto/createProyect");
const getAllProjectsRouter = require("./routes/Proyecto/getAllProyectos");

// Contrato routes imports
const createContratoRouter = require("./routes/Contrato/createContract");
const getAllContratosRouter = require("./routes/Contrato/getAllContracts");

// Citas routes imports
const createCitaRouter = require("./routes/Cita_trabajo/createCita");
const getAllCitasRouter = require("./routes/Cita_trabajo/getAllCitas");

// Speed date routes imports
const createSpeedDateRouter = require("./routes/SpeedDate/createSpeedDate");
const getAllSpeedDatesRouter = require("./routes/SpeedDate/getAllSpeedDates");

// Talentos routes use
app.use(createTalentoRouter);
app.use(getAllTalentosRouter);

// Cazador routes use
app.use(createCazadorRouter);
app.use(getAllCazadoresRouter);

// Proyectos routes use
app.use(createProjectRouter);
app.use(getAllProjectsRouter);

// Contrato routes use
app.use(createContratoRouter);
app.use(getAllContratosRouter);

// Cita routes use
app.use(createCitaRouter);
app.use(getAllCitasRouter);

// Speed Date routes use
app.use(createSpeedDateRouter);
app.use(getAllSpeedDatesRouter);

const start = async () => {
  await mongoose.connect("mongodb+srv://MonMR00:Pan.tostado4@cluster0.cbeq5ju.mongodb.net/?retryWrites=true&w=majority");

  console.log("Cazadores service DB connected succesfully");
  app.listen(process.env.PORT || 3000, () => {
    console.log("Service cazadores api started succesfully on port 3000!");
  });
};

start();
