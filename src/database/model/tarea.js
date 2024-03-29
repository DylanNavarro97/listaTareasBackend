import mongoose, { Schema, mongo } from "mongoose";

const tareaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 30,
  },
});

const Tarea = mongoose.model("tarea", tareaSchema);
export default Tarea;