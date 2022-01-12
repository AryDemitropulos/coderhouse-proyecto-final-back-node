import CarritoDaoDB from './carritoDaoMongoDB.js'
import { Config } from '../config.js'


export default class CarritoDaoFactory {
    static instancia = null
    static get() {
        if(!CarritoDaoFactory.instancia) {
            let persistencia = Config.get(Config.TIPO_PERSISTENCIA).persistencia
            //console.log('PERSISTENCIA CARRITO: ', persistencia)

            switch(persistencia.tipo) {
                case 'mongo':
                    CarritoDaoFactory.instancia = new CarritoDaoDB('carrito'); break
                default : throw 'MECANISMO DE PERSISTENCIA CARRITO DESCONOCIDO'
            }
        }
        return CarritoDaoFactory.instancia
    }
}
