const mongoose = require('mongoose');


const productSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    businessId: {
        type: mongoose.Types.ObjectId,
        ref: 'Business'
    },
    URL: String,
    description: String,
    discount: String,
    price: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema);