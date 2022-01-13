import MoviesDaoDB from "./moviesDaoMongoDB.js";
import { Config } from "../config.js";

export default class MoviesDaoFactory {
  static instance = null;
  static get() {
    if (!MoviesDaoFactory.instance) {
      let persistencia = Config.get(Config.TIPO_PERSISTENCIA).persistencia;
      //console.log('PERSISTENCIA PRODUCTOS: ', persistencia)
      switch (persistencia.tipo) {
        case "mongo":
          MoviesDaoFactory.instance = new MoviesDaoDB("movies");
          break;
        default:
          throw "MECANISMO DE PERSISTENCIA PRODUCTOS DESCONOCIDO";
      }
    }
    return MoviesDaoFactory.instance;
  }
}
