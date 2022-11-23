/*
  Route that retrieves all cazador
*/

const express = require("express");
const Contrato = require("../../models/Cazador");
const Proyecto = require("../../models/Proyecto");

const router = express.Router();

router.delete("/api/proyectos", async (req, res) => {
  try {
    const { identifier } = req.query;
    const proyecto = await Proyecto.findOneAndDelete({ nombreProyecto: identifier });
    // await Contrato.deleteMany({ listaProyectos: proyecto.id });

    res.status(200).json({ deleted: true });
  } catch (err) {
    throw err;
  }
});

module.exports = router;
