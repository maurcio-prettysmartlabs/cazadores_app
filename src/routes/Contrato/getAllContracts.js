/*
  Route that retrieves all cazador
*/

const express = require("express");
const Contrato = require("../../models/Contrato");

const router = express.Router();

router.get("/api/contratos", async (req, res) => {
  try {
    const contratos = await Contrato.find({}).populate("empresa empleado proyecto");

    res.status(200).json(contratos);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
