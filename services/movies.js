import MoviesDaoFactory from "../dao/moviesDaoFactory.js";
import ProductosDaoFactory from "../dao/productosDaoFactory.js";

export class MovieService {
  constructor() {
    this.movieDao = MoviesDaoFactory.get();
  }

  async get(id) {
    return await this.movieDao.get(id);
  }

  async getById(id) {
    return await this.movieDao.getById(id);
  }

  async post(movie) {
    return await this.movieDao.add(movie);
  }

  async put(movie, id) {
    return await this.movieDao.update(movie, id);
  }

  async delete(id) {
    return await this.movieDao.delete(id);
  }
}
