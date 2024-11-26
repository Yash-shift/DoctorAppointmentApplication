import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    speciality: {
      type: String,
      required: true,
    },
    about: { type: String, required: true },
    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      
    },
    degree: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: false,
    },
    address: {
      type: Object,
      
    },
    fees: {
      type: Number,
      required: true,
    },
    date: {
      type: Number,
    },
    slots_booked: {
      type: Object,
      default: {},
    },
  },
  { minimize: false }
);

const doctorModel =
  mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

export default doctorModel;
