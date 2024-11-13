import mongoose, { Schema } from "mongoose";

const organizationSchema = new Schema({
    name: { type: String, required: true },
    regions: [{ type: String }],
    missiles: [{ type: Schema.Types.ObjectId, ref: 'Missile' }]
  });


  export default mongoose.model('Org', organizationSchema); 