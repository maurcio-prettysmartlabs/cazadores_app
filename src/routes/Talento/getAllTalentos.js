/*
  Route that retrieves all talentos
*/

const express = require("express");
const Talento = require("../../models/Talento");

const router = express.Router();

router.get("/api/talentos", async (req, res) => {
  try {
    const talentos = await Talento.find({});

    res.status(200).json(talentos);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
