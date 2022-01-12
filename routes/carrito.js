import express from 'express'
import { ControllerCarrito } from '../controller/carrito.js'

//creo un router
const routerCarr = express.Router()
routerCarr.use(express.urlencoded({extended: true}))
routerCarr.use(express.json())

//Le configuro las rutas
const controllerCarr = new ControllerCarrito()
routerCarr.get('/:id?', controllerCarr.get)
routerCarr.post('/', controllerCarr.post)
routerCarr.put('/:id', controllerCarr.put)
routerCarr.delete('/:id', controllerCarr.delete)

//Lo exporto
export default routerCarr

