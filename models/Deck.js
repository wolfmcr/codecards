const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeckSchema = new Schema({
  deckName: { type: String }
});

module.exports = mongoose.model('deck', DeckSchema);
