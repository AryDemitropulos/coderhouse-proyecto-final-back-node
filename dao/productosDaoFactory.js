import ProductosDaoDB from './productosDaoMongoDB.js'
import { Config } from '../config.js'

export default class ProductosDaoFactory {
    static instancia = null
    static get() {
        if(!ProductosDaoFactory.instancia) {
            let persistencia = Config.get(Config.TIPO_PERSISTENCIA).persistencia
            //console.log('PERSISTENCIA PRODUCTOS: ', persistencia)

            switch(persistencia.tipo) {
                case 'mongo':
                    ProductosDaoFactory.instancia = new ProductosDaoDB('productos'); break
                default : throw 'MECANISMO DE PERSISTENCIA PRODUCTOS DESCONOCIDO'
            }
        }
        return ProductosDaoFactory.instancia
    }
}