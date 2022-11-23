const mongoose = require("mongoose");

const proyectoSchema = new mongoose.Schema(
  {
    empresa: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cazador",
      required: true,
    },
    nombreProyecto: { type: String, required: true },
    requisitos: { type: String, required: true },
    duracion: { type: String, required: true },
    puestosDisponibles: { type: String, required: true },
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

const Proyecto = mongoose.model("Proyecto", proyectoSchema);

module.exports = Proyecto;
