/*
  Route that retrieves all cazador
*/

const express = require("express");
const CitaTrabajo = require("../../models/Cita_trabajo");

const router = express.Router();

router.get("/api/citas", async (req, res) => {
  try {
    const citas = await CitaTrabajo.find({}).populate("empresaHost talentoInvitado");

    res.status(200).json(citas);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
