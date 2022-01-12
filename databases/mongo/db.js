import mongoose from 'mongoose'

export class MongoDB {
    static conectada = null
    static conectar(URL) {
        if(MongoDB.conectada == null) {
            ;( async () => {
                try {
                    await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
                    console.log(`Base de datos MongoDB conectada`)

                    MongoDB.conectada = true

                    process.on('SIGINT', () => {
                        console.log('Cerrando conexión a la base de datos')
                        mongoose.connection.close()
                        process.exit(0)
                    })

                    process.on('exit', () => {
                        console.log('Saliendo...')
                    })
                }
                catch(err) {
                    console.log(`MongoDB: Error en conectar ${err}`)
                }       
            })()
        }
    }
}