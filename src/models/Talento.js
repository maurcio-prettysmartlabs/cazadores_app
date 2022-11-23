const mongoose = require("mongoose");

const talentoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    email: { type: String, required: true },
    noTel: { type: String, required: true },
    lugarDeResidencia: { type: String, required: true },
    proyectosTerminados: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Proyecto",
      },
    ],
    capacidades: { type: String, required: true },
    disponibilidad: { type: String, required: true },
    costoHora: { type: Number, required: true },
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
