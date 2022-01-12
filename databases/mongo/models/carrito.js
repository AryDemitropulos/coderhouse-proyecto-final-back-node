import mongoose from 'mongoose';

// -------------------------------------------------------------
//                         SCHEMA
// -------------------------------------------------------------
const carritoSchema = mongoose.Schema({
    id_item: String,
    usuario: Object,
    carrito: Array
});

export const carritos = nombreCollection => mongoose.model(nombreCollection, carritoSchema);

