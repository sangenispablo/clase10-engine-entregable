const path = require("path");
const express = require("express");

// aca guardamos los productos
const productos = [];

const router = express.Router();

router.get("/add", (req, res, next) => {
  res.sendFile(path.join(require.main.path, "views", "agregar-producto.html"));
});

router.post("/add-product", (req, res, next) => {
  productos.push({ title: req.body.title });
  res.redirect("/");
});

// module.exports = router;
exports.routes = router;
exports.productos = productos;
