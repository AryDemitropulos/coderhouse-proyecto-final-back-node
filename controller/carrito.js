import { ServiceCarrito } from '../services/carrito.js'

export class ControllerCarrito {
    
    constructor() {
        this.carrito = new ServiceCarrito()
        this.get = this.get.bind(this)
        this.post = this.post.bind(this)
        this.put = this.put.bind(this)
        this.delete = this.delete.bind(this)
    }

    async get(req,res) {
        let { id } = req.params
    
        let carritoLeido = await this.carrito.obtener(id)
        //console.log('obtener', id, productoLeido)
        console.log('obtener')
    
        res.json(carritoLeido)
    }

    async post(req,res) {
        let carrito = req.body
        console.log(carrito)
        let carritoAgregado = await this.carrito.agregar(carrito)
    
        console.log('agregar')
    
        res.json(carritoAgregado)
    }

    async put(req,res) {
        let { id } = req.params
        let carrito = req.body
        let carritoActualizado = await this.carrito.actualizar(carrito,id)
        //console.log('actualizar', carrito, carrito._id ,id, carritoActualizado)
        console.log('actualizar')

        res.json(carritoActualizado)
    }
 
    async delete(req,res) {
        let { id } = req.params
    
        let carritoBorrado = await this.carrito.borrar(id)
        console.log('borrar')//, id, carritoBorrado)
    
        res.json(carritoBorrado)
    }
}

