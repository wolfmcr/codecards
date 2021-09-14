const Card = require('../models/Card');

module.exports = {
  getCards: async (req, res) => {
    let cards = await Card.find().lean();
    res.json(cards);
  },
  makeCard: async (req, res) => {
    const newCard = req.body;
    try {
      await new Card(newCard).save();
      console.log('saved, baby!');
    } catch (err) {
      console.error(err);
    }

    res.status(200).send('success');
  }
};
