/*
  Route that gets ONE horse
*/

const express = require("express");
const Talento = require("../../models/Talento");

const router = express.Router();

router.post("/api/createtalento", async (req, res) => {
  try {
    let { nombre, apellidos, email, noTel, lugarDeResidencia, capacidades, costoHora, disponibilidad } = req.body;
    let costo = Number(costoHora);
    const talento = new Talento({
      nombre,
      apellidos,
      email,
      noTel,
      lugarDeResidencia,
      capacidades,
      costoHora: costo,
      disponibilidad,
    });
    await talento.save();
    console.log(talento);
    res.json({ created: "true" });
  } catch (err) {
    throw err;
  }
});

module.exports = router;
