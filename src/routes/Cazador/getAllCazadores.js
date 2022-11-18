/*
  Route that retrieves all cazador
*/

const express = require("express");
const Cazador = require("../../models/Cazador");

const router = express.Router();

router.get("/api/cazadores", async (req, res) => {
  try {
    const cazadores = await Cazador.find({});

    res.status(200).json(cazadores);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
