const mongoose = require("mongoose");

const contratoSchema = new mongoose.Schema(
  {
    empresa: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cazador",
      required: true,
    },
    empleado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Talento",
      required: true,
    },
    proyecto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Proyecto",
      required: true,
    },
    fechaInicio: { type: String, required: true },
    duracion: { type: String, required: true },
    pagoTotal: { type: Number, required: true },
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

const Contrato = mongoose.model("Contrato", contratoSchema);

module.exports = Contrato;
