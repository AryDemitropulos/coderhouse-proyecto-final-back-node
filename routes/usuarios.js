import express from 'express'
import jwt from 'jsonwebtoken';
import { Config } from '../config.js';

import { ControllerUsuarios } from '../controller/usuarios.js'

const rutasProtegidas = (req, res, next) => {
    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, Config.SECRET_KEY, (err, decoded) => {
            if (err) {
                console.log('Token no válida')
                //res.redirect('/')
                res.send({ mensaje: 'Token no válida' })

            } else {
                req.decoded = decoded;
                console.log(decoded)
                console.log('Token OK.')
                next();
            }
        });
    } else {
        console.log('Token no provista')
        //res.redirect('/')
        res.send({ mensaje: 'Token no provista' })
    }
}


//creo un router
const routerUsuarios = express.Router()
routerUsuarios.use(express.urlencoded({ extended: true }))
routerUsuarios.use(express.json())

//Le configuro las rutas
const controllerUsuarios = new ControllerUsuarios()

routerUsuarios.post('/register', controllerUsuarios.createUser);
routerUsuarios.post('/login', controllerUsuarios.loginUser);
routerUsuarios.get('/datos', rutasProtegidas, controllerUsuarios.datosUser);
routerUsuarios.get('/logout', controllerUsuarios.logoutUser);

//Lo exporto
export default routerUsuarios

