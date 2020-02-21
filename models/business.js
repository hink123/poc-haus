const mongoose = require("mongoose");


const businessSchema = new mongoose.Schema(
  {
    businessId: String,
    name: String,
    adminId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    description: String,
    website: String,
    hasStorefront: Boolean,
    imageUrl: String

  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Business', businessSchema);