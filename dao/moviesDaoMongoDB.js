import { MongoDB } from "../databases/mongo/db.js";
import * as model from "../databases/mongo/models/movie.js";

export default class moviesDaoMongoDB {
  constructor(collection) {
    this.collection = collection;
  }

  async get(id) {
    if (!MongoDB.conectada) return;
    console.log("leer", id);
    try {
      let movies = await model
        .movies(this.collection)
        .find(id ? { _id: id } : {});
      return movies;
    } catch (err) {
      console.log(`MongoDB: Error en leer ${err}`);
    }
  }

  async getById(id) {
    if (!MongoDB.conectada) return;
    console.log("leer", id);
    try {
      let movies = await model
        .movies(this.collection)
        .find(id ? { id: id } : {});
      return movies;
    } catch (err) {
      console.log(`MongoDB: Error en leer ${err}`);
    }
  }

  async add(producto) {
    if (!MongoDB.conectada) return;
    try {
      const modelo = model.movies(this.collection);
      const productoModel = new modelo(producto);
      let prod = await productoModel.save();
      return prod;
    } catch (err) {
      console.log(`MongoDB: Error en guardar ${err}`);
    }
  }

  async update(producto, id) {
    if (!MongoDB.conectada) return;
    try {
      let prod = await model
        .movies(this.collection)
        .updateOne({ _id: id }, { $set: producto });
      return prod;
    } catch (err) {
      console.log(`MongoDB: Error en actualizar ${err}`);
    }
  }

  async delete(id) {
    if (!MongoDB.conectada) return;
    try {
      await model.movies(this.collection).deleteOne({ _id: id });
    } catch (err) {
      console.log(`MongoDB: Error en borrar ${err}`);
    }
  }
}
