/*
  Route that creates ONE cita
*/

const express = require("express");

const router = express.Router();

const Cazador = require("../../models/Cazador");
const Talento = require("../../models/Talento");
const CitaTrabajo = require("../../models/Cita_trabajo");

router.post("/api/createcita", async (req, res) => {
  try {
    let { empresa, talento, tipoReunion, ubicacion, horario } = req.body;

    let cazador = await Cazador.findOne({ nombreEmpresa: empresa });
    let talentoObj = await Talento.findOne({ nombre: talento });

    let cita = new CitaTrabajo({
      empresaHost: cazador.id,
      talentoInvitado: talentoObj.id,
      tipoReunion,
      ubicacion,
      horario,
    });

    await cita.save();
    res.json({ created: "true" });
  } catch (err) {
    throw err;
  }
});

module.exports = router;
