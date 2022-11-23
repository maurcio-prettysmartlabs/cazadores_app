/*
  Route that retrieves all cazador
*/

const express = require("express");
const Talento = require("../../models/Talento");

const router = express.Router();

router.delete("/api/talentos", async (req, res) => {
  try {
    const { identifier } = req.query;
    await Talento.findOneAndDelete({ email: identifier });

    res.status(200).json({ deleted: true });
  } catch (err) {
    throw err;
  }
});

module.exports = router;
