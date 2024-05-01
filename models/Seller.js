const mongoose = require("mongoose")

const sellerschema = new mongoose.Schema({
    ownername: {
      type: String,
      required: true,
    },
    restaurantname: {
      type: String,
      required:true,
    },
     
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      default:"klef1234"
     },
    contact: {
        type: String,
        required: true,
        unique:true
      },
address: {
      type: String,
      required: true 
    },

  });

const seller = mongoose.model('seller', sellerschema);

module.exports = seller;