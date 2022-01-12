import CarritoDaoFactory from '../dao/carritoDaoFactory.js'

export class ServiceCarrito {
    constructor() {
        this.carritoDao = CarritoDaoFactory.get()
    }

    async obtener(id) {
        return await this.carritoDao.get(id)
    }

    async agregar(carrito) {
        return await this.carritoDao.add(carrito)
    }

    async actualizar(carrito, id) {
        return await this.carritoDao.update(carrito, id)
    }
    
    async borrar(id){
        return await this.carritoDao.delete(id)
    }
}
