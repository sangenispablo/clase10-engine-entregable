const express = require("express");

const homeRoutes = require("./routes/home_ejs");
const productoRoutes = require("./routes/producto_ejs");

const app = express();

app.set("view engine", "ejs");
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
