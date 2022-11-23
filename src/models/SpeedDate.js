const mongoose = require("mongoose");

const speedDateSchema = new mongoose.Schema(
  {
    proyectosInvitados: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Proyecto",
        required: true,
      },
    ],
    talentosInvitados: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Talento",
        required: true,
      },
    ],
    duracionSesion: {
      type: String,
      enum: ["5min", "10min", "15min"],
      required: true,
    },
    ubicacion: { type: String, required: true },
    horario: { type: String, required: true },
    tipoReunion: {
      type: String,
      enum: ["En linea", "Presencial"],
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
    timestamps: true,
  }
);

const SpeedDate = mongoose.model("SpeedDate", speedDateSchema);

module.exports = SpeedDate;
