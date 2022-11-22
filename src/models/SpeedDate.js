const mongoose = require("mongoose");
// Made to prevent autocasting from string to number
// @ts-ignore
mongoose.Number.cast(false);

const speedDateSchema = new mongoose.Schema(
  {
    proyectosInvitados: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Proyecto",
      },
    ],
    talentosInvitados: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Talento",
      },
    ],
    duracionSesion: {
      type: String,
      enum: ["5min", "10min", "15min"],
    },
    ubicacion: String,
    horario: String,
    tipoReunion: {
      type: String,
      enum: ["En linea", "Presencial"],
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
