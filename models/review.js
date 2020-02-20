const mongoose = require("mongoose");


const reviewSchema = new mongoose.Schema(
  {
    content: String,
    date: Date,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: User
    },
    businessId: {
        type: mongoose.Types.ObjectId,
        ref: Business
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Review", reviewSchema);