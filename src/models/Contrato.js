const mongoose = require("mongoose");
// Made to prevent autocasting from string to number
// @ts-ignore
mongoose.Number.cast(false);

const contratoSchema = new mongoose.Schema(
  {
    empresa: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cazador",
    },
    empleado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Talento",
    },
    proyecto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Proyecto",
    },
    fechaInicio: Number,
    duración: String,
    pagoTotal: Number,
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

export { Contrato };
