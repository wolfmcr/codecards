const User = require('../models/User');
const Card = require('../models/Card').model;
const Deck = require('../models/Deck').model;
module.exports = {
  makeCard: async (req, res) => {
    let user = await User.findOne({ _id: req.user.id });

    let newCard = Card(req.body.data);

    user.cards = [...user.cards, newCard];

    let response = await user.save();

    res.status(200).json(response.cards);
  },
  addDeck: async (req, res) => {
    let user = await User.findOne({ _id: req.user.id });

    let newDeck = Deck(req.body);

    user.decks = [...user.decks, newDeck];

    let response = await user.save();

    res.status(200).json(response.decks);
  },
  deleteDeck: async (req, res) => {
    let user = await User.findOne({ _id: req.user.id });
    //remove deck from array
    user.decks = user.decks.filter(
      (deck) => deck._id.toString() !== req.params.id
    );
    //remove all cards associated with that deck from the array
    user.cards = user.cards.filter(
      (card) => card.deck.toString() !== req.params.id
    );

    await user.save();
    //send back the modified cards + decks
    res.status(200).json({ cards: user.cards, decks: user.decks });
  }
};
