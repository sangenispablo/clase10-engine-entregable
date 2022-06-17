const path = require("path");
const express = require("express");

const homeRoutes = require("./routes/home_pug");
const productoRoutes = require("./routes/producto_pug");

const app = express();

console.log('pasando por aca...');

// seteamos pug
app.set("view engine", "pug");
app.set("views", "views");

// middleware varios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static, sirve archivos estaticos
app.use(express.static("public"));

// cargamos las rutas
app.use("/", homeRoutes);
app.use("/producto", productoRoutes.routes);

app.use((req, res, next) => {
  res.status(404).render("404", { docTitle: "404 | Page not found" });
});

module.exports = app;
