const express = require("express");

const productoData = require("./producto_pug");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home", {
    docTitle: "Home",
    path: "/",
    prods: productoData.productos,
  });
});

module.exports = router;
