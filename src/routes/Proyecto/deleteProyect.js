/*
  Route that retrieves all cazador
*/

const express = require("express");
const Cazador = require("../../models/Cazador");
const Proyecto = require("../../models/Proyecto");

const router = express.Router();

router.delete("/api/proyectos", async (req, res) => {
  try {
    const { identifier } = req.query;
    const proyecto = await Proyecto.findOneAndDelete({ nombreProyecto: identifier });
    // await Proyecto.deleteMany({ empresa: cazador.id });

    res.status(200).json({ deleted: true });
  } catch (err) {
    throw err;
  }
});

module.exports = router;
