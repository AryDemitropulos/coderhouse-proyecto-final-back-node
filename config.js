const MONGO_LOCAL = 'MONGO_LOCAL'
const MONGO_DBaaS = 'MONGO_DBaaS'

export class Config {
    static VERSION = 'v1.0.0'
    static SECRET_KEY = 'secretkey123456';

    static TIPO_PERSISTENCIA = MONGO_LOCAL
    
    static get(tipo) {
        switch(tipo) {
            case 'MONGO_LOCAL' :
                return { persistencia : {tipo: 'mongo', descripcion: 'base mongo local', URL : 'mongodb://localhost:27017/videoclub'} }
            case 'MONGO_DBaaS' :
                return { 
                    persistencia : {
                        tipo: 'mongo',
                        descripcion: 'base mongo atlas', 
                        URL : 'mongodb+srv://daniel:daniel123@misdatos-fs00f.mongodb.net/videoclub?retryWrites=true&w=majority'
                    }
                }

            default :
                throw new Error(`no hay persistencia seleccionada`)
        }
    }
}
