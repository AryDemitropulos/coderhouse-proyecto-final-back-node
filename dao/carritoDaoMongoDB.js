import { MongoDB } from '../databases/mongo/db.js'
import * as model from '../databases/mongo/models/carrito.js'

export default class CarritoDaoDB {
    constructor(coleccion) {
        this.coleccion = coleccion
    }

    async get(id) {
        if(!MongoDB.conectada) return
        console.log('leer', id)
        try {
            let carritos = await model.carritos(this.coleccion).find(id?{_id:id}:{})
            return carritos
        }
        catch(err) {
            console.log(`MongoDB: Error en leer ${err}`)
        }        
    }

    async add(carrito) {
        if(!MongoDB.conectada) return
        try {
            console.log(carrito)
            const modelo = model.carritos(this.coleccion)
            const carritoModel = new modelo(carrito);
            let carr = await carritoModel.save()
            return carr
        }
        catch(err) {
            console.log(`MongoDB: Error en guardar ${err}`)
        } 
    }

    async update(carrito, id) {
        if(!MongoDB.conectada) return
        try {
            let carr = await model.carritos(this.coleccion).updateOne( {_id: id }, { $set: carrito })
            return carr
        }
        catch(err) {
            console.log(`MongoDB: Error en actualizar ${err}`)
        }
    }
    
    async delete(id){
        if(!MongoDB.conectada) return
        try {
            await model.carritos(this.coleccion).deleteOne( {_id: id })
        }
        catch(err) {
            console.log(`MongoDB: Error en borrar ${err}`)
        }
    }
}
