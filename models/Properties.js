const mongoose = require("mongoose");

const PropertiesSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name:
  {
    type:String,
    required:true
  },
  property_type: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  dimensions: {
    type: String,
  },
  image: {
    type: String,
  },
  contact_info: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("properties", PropertiesSchema);
