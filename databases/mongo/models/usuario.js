import mongoose from 'mongoose';

const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

export const userSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  isAdmin:{
    type: Boolean,
    required: true,
  },
  direccion:{
    type: String
  },
  telefono:{
    type: String
  },
  foto:{
    type: String
  }
}, {
    timestamps: true
});


