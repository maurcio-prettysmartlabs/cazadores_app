/*
  Route that creates ONE contract
*/

const express = require("express");

const router = express.Router();

const Cazador = require("../../models/Cazador");
const Talento = require("../../models/Talento");
const Proyecto = require("../../models/Proyecto");
const Contrato = require("../../models/Contrato");

router.post("/api/createcontrato", async (req, res) => {
  try {
    let { empresa, talento, proyecto, fechaInicio, duracion, pagoTotal } = req.body;

    let indexToCutString = String(proyecto).indexOf("by");
    let proyectoName = String(proyecto).slice(0, indexToCutString - 1);

    let cazador = await Cazador.findOne({ nombreEmpresa: empresa });
    let talentoObj = await Talento.findOne({ nombre: talento });
    let proyectoObj = await Proyecto.findOne({ nombreProyecto: proyectoName });

    let contrato = new Contrato({
      empresa: cazador.id,
      empleado: talentoObj.id,
      proyecto: proyectoObj.id,
      fechaInicio: fechaInicio,
      duracion: duracion,
      pagoTotal: Number(pagoTotal),
    });

    await contrato.save();
    res.json({ created: "true" });
  } catch (err) {
    throw err;
  }
});

module.exports = router;
