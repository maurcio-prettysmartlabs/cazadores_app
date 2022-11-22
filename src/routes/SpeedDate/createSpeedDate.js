/*
  Route that creates ONE speed date
*/

const express = require("express");

const router = express.Router();

const Cazador = require("../../models/Cazador");
const Talento = require("../../models/Talento");
const Proyecto = require("../../models/Proyecto");
const Contrato = require("../../models/Contrato");
const SpeedDate = require("../../models/SpeedDate");

router.post("/api/createspeeddate", async (req, res) => {
  try {
    let { proyectos, talentos, duracionSesion, tipoReunion, horario, ubicacion } = req.body;

    const speedDate = new SpeedDate({
      duracionSesion,
      tipoReunion,
      horario,
      ubicacion,
    });

    proyectos.forEach((proyecto) => {
      speedDate.proyectosInvitados.push(proyecto.id);
    });

    talentos.forEach((talento) => {
      speedDate.talentosInvitados.push(talento.id);
    });

    await speedDate.save();
    res.json({ created: "true" });
  } catch (err) {
    throw err;
  }
});

module.exports = router;
