import mongoose, { Schema } from "mongoose";

const missileSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  speed: { type: Number, required: true },
  intercepts: [{ type: String }],
  price: { type: Number, required: true }
});


  export default   mongoose.model('Missile', missileSchema);
  