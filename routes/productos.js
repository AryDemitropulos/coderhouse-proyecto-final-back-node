import express from 'express'
import { ControllerProductos } from '../controller/productos.js'

//creo un router
const routerProd = express.Router()
routerProd.use(express.urlencoded({extended: true}))
routerProd.use(express.json())

//Le configuro las rutas
const controllerProd = new ControllerProductos()
routerProd.get('/:id?', controllerProd.get)
routerProd.post('/', controllerProd.post)
routerProd.put('/:id', controllerProd.put)
routerProd.delete('/:id', controllerProd.delete)

//Lo exporto
export default routerProd

