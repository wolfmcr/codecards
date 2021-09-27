const mongoose = require('mongoose');
const Deck = require('./Deck').schema;
const Card = require('./Card').schema;
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    decks: { type: [Deck] },
    cards: { type: [Card] }
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', userSchema);
