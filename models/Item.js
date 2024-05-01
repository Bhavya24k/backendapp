const mongoose = require("mongoose")

const itemschema = new mongoose.Schema({

    itemname: {
      type: String,
      required: true,
    },

    type: {
        type: String,
        required:true,
        enum: ['veg','nonveg','desert']
      },

      description: {
        type: String,
        required: true
      },

      itemprice:{
      type: String,
      required:true,
      },

      imageUrl: String

});

const item = mongoose.model('item',itemschema);
module.exports = item;