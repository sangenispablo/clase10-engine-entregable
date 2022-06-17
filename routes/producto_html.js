const path = require("path");
const express = require("express");

// aca guardamos los productos
const productos = [];

const router = express.Router();

router.get("/add", (req, res, next) => {
  console.log(productos);
  res.sendFile(path.join(require.main.path, "views", "agregar-producto.html"));
});

router.post("/add", (req, res, next) => {
  productos.push({
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  });
  res.redirect("/");
});

// module.exports = router;
exports.routes = router;
exports.productos = productos;
