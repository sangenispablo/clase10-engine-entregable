const express = require("express");

const productoData = require("./producto_hbs");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home", {
    docTitle: "Home",
    prods: productoData.productos,
    tieneProductos: productoData.productos.length > 0,
    activeTodos: true,
  });
});

module.exports = router;
