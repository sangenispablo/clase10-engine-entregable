const express = require("express");

const productoData = require("./producto_ejs");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home", {
    docTitle: "Home",
    prods: productoData.productos,
    path: "/",
  });
});

module.exports = router;
