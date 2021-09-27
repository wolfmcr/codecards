const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  language: { type: String, required: true },
  deck: mongoose.ObjectId,
  front: [],
  back: [],
  createdAt: { type: Date, default: Date.now() }
});

module.exports = {
  model: mongoose.model('card', cardSchema),
  schema: cardSchema
};
