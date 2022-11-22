/*
  Route that retrieves all cazador
*/

const express = require("express");
const SpeedDate = require("../../models/SpeedDate");

const router = express.Router();

router.get("/api/speeddates", async (req, res) => {
  try {
    const speedDates = await SpeedDate.find({}).populate("proyectosInvitados talentosInvitados");

    res.status(200).json(speedDates);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
