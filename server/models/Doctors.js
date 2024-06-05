import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    required: true
  },
  speciality: {
    type: String,
    required: true
  },
  hospital:{
    type:String,
    required:true
  },
  experience: {
    type: Number,
    required: true
  },
  qualification:{
    type:String,
    required:true
  },
  Gender: {
    type: String,
    required: true
  }
});
  
const DoctorsModel = mongoose.model("Doctors", DoctorSchema);
export default DoctorsModel;
  