const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    title: { type: String, required: true },
    language: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('card', cardSchema);
