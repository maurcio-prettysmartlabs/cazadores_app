const mongoose = require("mongoose");
// Made to prevent autocasting from string to number
// @ts-ignore
mongoose.Number.cast(false);

const talentoSchema = new mongoose.Schema(
  {
    nombre: String,
    apellidos: String,
    email: String,
    noTel: String,
    lugarDeResidencia: String,
    proyectosTerminados: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Proyecto",
      },
    ],
    capacidades: String,
    disponibilidad: String,
    costoHora: Number,
    reputacion: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
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

const Talento = mongoose.model("Talento", talentoSchema);

module.exports = Talento;
