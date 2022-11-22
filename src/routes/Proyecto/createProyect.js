/*
  Route that creates ONE cazador
*/

const express = require("express");
const Cazador = require("../../models/Cazador");
const Proyecto = require("../../models/Proyecto");

const router = express.Router();

router.post("/api/createproyecto", async (req, res) => {
  try {
    let { empresa, nombreProyecto, requisitos, duracion, puestosDisponibles } = req.body;

    let cazador = await Cazador.findOne({ nombreEmpresa: empresa });
    const proyecto = new Proyecto({
      nombreProyecto,
      requisitos,
      duracion,
      puestosDisponibles,
      empresa: cazador.id,
    });

    await proyecto.save();
    res.json({ created: "true" });
  } catch (err) {
    throw err;
  }
});

module.exports = router;
