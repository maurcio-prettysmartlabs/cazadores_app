/*
  Route that retrieves all cazador
*/

const express = require("express");
const Proyecto = require("../../models/Proyecto");

const router = express.Router();

router.get("/api/proyectos", async (req, res) => {
  try {
    const proyectos = await Proyecto.find({}).populate("empresa");

    res.status(200).json(proyectos);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
