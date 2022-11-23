const mongoose = require("mongoose");

const citaTrabajoSchema = new mongoose.Schema(
  {
    empresaHost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cazador",
      required: true,
    },
    talentoInvitado: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Talento",
    },
    tipoReunion: {
      type: String,
      required: true,
      enum: ["En linea", "Presencial"],
    },
    ubicacion: {
      type: String,
      required: true,
    },
    horario: {
      type: String,
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

const CitaTrabajo = mongoose.model("CitaTrabajo", citaTrabajoSchema);

module.exports = CitaTrabajo;
