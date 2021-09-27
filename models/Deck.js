const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeckSchema = new Schema({
  deckName: { type: String }
});

module.exports = {
  model: mongoose.model('deck', DeckSchema),
  schema: DeckSchema
};
