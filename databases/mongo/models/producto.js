import mongoose from 'mongoose';

// -------------------------------------------------------------
//                         SCHEMA
// -------------------------------------------------------------
const productoSchema = mongoose.Schema({
    id_item: String,
    titulo: String,
    genero: String,
    year: Number,
    precio: Number,
    stock: Number,
    foto: String
});

export const productos = nombreCollection => mongoose.model(nombreCollection, productoSchema);

