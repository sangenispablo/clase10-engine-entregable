const param = process.argv[2];

let app;

if (param === "html") {
  app = require("./app_html");
}

const port = 8080;

const server = app.listen(port, () => {
  console.log("Escuchando puerto:", port);
});

server.on("error", (err) => {
  console.log(err.message);
});
