import mongoose from "mongoose";

// -------------------------------------------------------------
//                         SCHEMA
// -------------------------------------------------------------
const movieSchema = mongoose.Schema({
  _id: String,
  id: String,
  name: String,
  price: Number,
  img: String,
  detail: Object,
  stock: Number,
  foto: String,
});

export const movies = (collectionName) =>
  mongoose.model(collectionName, movieSchema);
