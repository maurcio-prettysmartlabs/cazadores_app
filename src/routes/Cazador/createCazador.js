/*
  Route that creates ONE cazador
*/

const express = require("express");
const Cazador = require("../../models/Cazador");

const router = express.Router();

router.post("/api/createcazador", async (req, res) => {
  try {
    let { nombreEmpresa, cuotaDePago, email, noTel, paginaWeb, ubicacion, giroProyectos } = req.body;
    const cazador = new Cazador({
      nombreEmpresa,
      cuotaDePago,
      email,
      noTel,
      paginaWeb,
      ubicacion,
      giroProyectos,
    });
    await cazador.save();
    res.json({ created: "true" });
  } catch (err) {
    throw err;
  }
});

module.exports = router;
