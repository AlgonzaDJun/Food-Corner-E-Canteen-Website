const mongoose = require("mongoose");

const foodSchema = mongoose.Schema(
  {
    name: { type: String, require },
    price: { type: String, require },
  },
  {
    timestamps: true,
  }
);

const foodModel = mongoose.model("foods", foodSchema);

module.exports = foodModel;