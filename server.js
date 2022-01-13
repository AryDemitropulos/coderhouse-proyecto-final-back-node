import express from "express";
import cors from "cors";

import routerProd from "./routes/productos.js";
import routerCarr from "./routes/carrito.js";
import routerUsuarios from "./routes/usuarios.js";
import movieRouter from "./routes/movies.js";
import { Config } from "./config.js";
import { MongoDB } from "./databases/mongo/db.js";

/* Servidor instancia */
const app = express();

/* Servidor cors */
app.use(cors());

/* -------------- ROUTER MOVIES ------------- */
app.use("/movies", movieRouter);
/* -------------- ROUTER PRODUCTOS ------------- */
app.use("/peliculas", routerProd);
/* -------------- ROUTER CARRITO ------------- */
app.use("/carritos", routerCarr);
/* -------------- ROUTER USUARIO ------------- */
app.use("/usuarios", routerUsuarios);

app.get("*", (req, res) => res.redirect("/"));

let fyhReset = new Date().toLocaleString();
app.get("/version", (req, res) => {
  res.send({
    version: Config.VERSION,
    timestamp: Date.now(),
    fyhReset,
  });
});

const PERSISTENCIA = Config.get(Config.TIPO_PERSISTENCIA).persistencia;
if (PERSISTENCIA.tipo == "mongo") {
  MongoDB.conectar(PERSISTENCIA.URL);
}

/* Servidor listen */
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
  console.log("PERSISTENCIA: ", PERSISTENCIA);
});
server.on("error", (error) => console.log(`Error en servidor: ${error}`));
