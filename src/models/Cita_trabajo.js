const mongoose = require("mongoose");
// Made to prevent autocasting from string to number
// @ts-ignore
mongoose.Number.cast(false);

const citaTrabajoSchema = new mongoose.Schema(
  {
    empresaHost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cazador",
    },
    talentoInvitado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Talento",
    },
    tipoReunion: {
      type: String,
      enum: ["En linea", "Presencial"],
    },
    ubicacion: String,
    horario: Number,
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

export { CitaTrabajo };
