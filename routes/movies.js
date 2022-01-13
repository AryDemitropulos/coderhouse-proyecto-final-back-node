import express from "express";
import { MoviesController } from "../controller/movies.js";

//creo un router
const moviesRouter = express.Router();
moviesRouter.use(express.urlencoded({ extended: true }));
moviesRouter.use(express.json());

//Le configuro las rutas
const movieController = new MoviesController();
moviesRouter.get("/:id?", movieController.getById);
moviesRouter.post("/", movieController.post);
moviesRouter.put("/:id", movieController.put);
moviesRouter.delete("/:id", movieController.delete);

//Lo exporto
export default moviesRouter;
