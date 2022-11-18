const mongoose = require("mongoose");
// Made to prevent autocasting from string to number
// @ts-ignore
mongoose.Number.cast(false);

const cazadorSchema = new mongoose.Schema(
  {
    nombreEmpresa: String,
    cuotaDePago: {
      type: String,
      enum: ["free", "basic", "pro"],
    },
    email: String,
    noTel: String,
    paginaWeb: String,
    ubicacion: String,
    giroProyectos: String,
    listaProyectos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Proyecto",
      },
    ],
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

const Cazador = mongoose.model("Cazador", cazadorSchema);

module.exports = Cazador;
