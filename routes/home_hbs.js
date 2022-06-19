const express = require("express");

const productoData = require("./producto_hbs");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(productoData.productos);
  res.render("home", {
    docTitle: "Home",
    path: "/",
    prods: productoData.productos,
    tieneProductos: productoData.productos.length > 0,
  });
});

module.exports = router;
