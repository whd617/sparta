const mongoose = require('mongoose');
const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  auther: {
    type: String,
  },
  password: {
    type: Number,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('product', productsSchema);
