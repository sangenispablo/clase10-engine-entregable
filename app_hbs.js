const express = require("express");
const { engine } = require("express-handlebars");

const homeRoutes = require("./routes/home_hbs");
const productoRoutes = require("./routes/producto_hbs");

const app = express();

// seteamos express-handlebars usamos defaultLayout en false para evitar la
// configuración por defecto
app.engine(
  "hbs",
  engine({ defaultLayout: false, layoutsDir: "views/layouts/" })
);
app.set("view engine", "hbs");
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
