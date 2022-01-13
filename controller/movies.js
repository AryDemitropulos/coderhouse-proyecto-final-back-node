import { MovieService } from "../services/movies.js";

export class MoviesController {
  constructor() {
    this.movieService = new MovieService();
    this.get = this.get.bind(this);
    this.getById = this.getById.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.delete = this.delete.bind(this);
  }

  //get = async (req,res) => {
  async get(req, res) {
    let { id } = req.params;

    let movie = await this.movieService.get(id);
    //console.log('obtener', id, productoLeido)
    console.log("obtener");

    res.json(movie);
  }
  async getById(req, res) {
    let { id } = req.params;

    let movie = await this.movieService.getById(id);
    //console.log('obtener', id, productoLeido)
    console.log("obtener por id hardcodeado");

    res.json(movie);
  }

  async post(req, res) {
    let movie = req.body;
    let newMovie = await this.movieService.post(movie);

    //console.log('agregar', producto, productoAgregado)
    console.log("agregar");

    res.json(newMovie);
  }

  async put(req, res) {
    let { id } = req.params;
    let movie = req.body;
    let newMovie = await this.movieService.put(movie, id);
    //console.log('actualizar', producto, producto._id ,id, productoActualizado)
    console.log("actualizar");

    res.json(newMovie);
  }

  async delete(req, res) {
    let { id } = req.params;

    let newMovie = await this.movieService.delete(id);
    console.log("borrar"); //, id, productoBorrado)

    res.json(newMovie);
  }
}
