const param = process.argv[2];

let app;

if (param === "html") {
  app = require("./app_html");
}

if (param === "pug") {
  app = require("./app_pug");
}

if (param === "hbs") {
  app = require("./app_hbs");
}

const port = 8080;

const server = app.listen(port, () => {
  console.log("Escuchando puerto:", port);
});

server.on("error", (err) => {
  console.log(err.message);
});
