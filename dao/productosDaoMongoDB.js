import { MongoDB } from '../databases/mongo/db.js'
import * as model from '../databases/mongo/models/producto.js'

export default class ProductosDaoDB {

    constructor(coleccion) {
        this.coleccion = coleccion
    }

    async get(id) {
        if(!MongoDB.conectada) return
        console.log('leer', id)
        try {
            let productos = await model.productos(this.coleccion).find(id?{_id:id}:{})
            return productos
        }
        catch(err) {
            console.log(`MongoDB: Error en leer ${err}`)
        }        
    }

    async add(producto) {
        if(!MongoDB.conectada) return
        try {
            const modelo = model.productos(this.coleccion)
            const productoModel = new modelo(producto);
            let prod = await productoModel.save()
            return prod
        }
        catch(err) {
            console.log(`MongoDB: Error en guardar ${err}`)
        } 
    }

    async update(producto, id) {
        if(!MongoDB.conectada) return
        try {
            let prod = await model.productos(this.coleccion).updateOne( {_id: id }, { $set: producto })
            return prod
        }
        catch(err) {
            console.log(`MongoDB: Error en actualizar ${err}`)
        }
    }
    
    async delete(id){
        if(!MongoDB.conectada) return
        try {
            await model.productos(this.coleccion).deleteOne( {_id: id })
        }
        catch(err) {
            console.log(`MongoDB: Error en borrar ${err}`)
        }
    }
}
