const mongoose = require("mongoose");
// Made to prevent autocasting from string to number
// @ts-ignore
mongoose.Number.cast(false);

const proyectoSchema = new mongoose.Schema(
  {
    empresa: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cazador",
    },
    nombreProyecto: String,
    requisitos: [String],
    duracion: String,
    puestosDisponibles: [String],
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

export { Proyecto };
