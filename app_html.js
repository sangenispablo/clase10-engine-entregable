const path = require("path");
const express = require("express");

const homeRoutes = require("./routes/home_html");
const productoRoutes = require("./routes/producto_html");

const app = express();

// middleware varios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static, sirve archivos estaticos
app.use(express.static("public"));

// cargamos las rutas
app.use("/", homeRoutes);
app.use("/producto", productoRoutes.routes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(require.main.path, 'views', '404.html'));
});

module.exports = app;
