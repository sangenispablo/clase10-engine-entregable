const app = require("./app");

const port = 8080;

const server = app.listen(port, () => {
  console.log("Escuchando puerto:", port);
});

server.on("error", (err) => {
  console.log(err.message);
});
