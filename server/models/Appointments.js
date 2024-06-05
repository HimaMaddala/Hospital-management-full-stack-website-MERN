import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  doctor_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  slot: {
    type: String,
    required: true
  },
  status:{
    type: String,
    required: true
  }
});
  
const DoctorsModel = mongoose.model("appointments", DoctorSchema);
export default DoctorsModel;
  