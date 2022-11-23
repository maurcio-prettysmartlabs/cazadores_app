const mongoose = require("mongoose");

const cazadorSchema = new mongoose.Schema(
  {
    nombreEmpresa: {
      type: String,
      required: true,
    },
    cuotaDePago: {
      type: String,
      enum: ["free", "basic", "pro"],
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    noTel: {
      type: String,
      required: true,
    },
    paginaWeb: {
      type: String,
      required: true,
    },
    ubicacion: {
      type: String,
      required: true,
    },
    giroProyectos: {
      type: String,
      required: true,
    },
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
