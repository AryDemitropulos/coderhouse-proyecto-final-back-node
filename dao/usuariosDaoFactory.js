import { UsuariosDaoDB } from './UsuariosDaoMongoDB.js'
import { Config } from '../config.js'

export default class UsuariosDaoFactory {
    static instancia = null
    static get() {
        if(!UsuariosDaoFactory.instancia) {
            let persistencia = Config.get(Config.TIPO_PERSISTENCIA).persistencia
            //console.log('PERSISTENCIA UsuarioS: ', persistencia)

            switch(persistencia.tipo) {
                case 'mongo':
                    UsuariosDaoFactory.instancia = new UsuariosDaoDB('Usuarios'); break
                default : throw 'MECANISMO DE PERSISTENCIA UsuarioS DESCONOCIDO'
            }
        }
        return UsuariosDaoFactory.instancia
    }
}