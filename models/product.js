const mongoose = require('mongoose');


const productSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    businessId: {
        type: mongoose.Types.ObjectId,
        ref: 'Business'
    },
    url: String,
    description: String,
    discount: Number,
    price: Number,
    redeemCode: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema);