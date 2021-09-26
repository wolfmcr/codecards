const User = require('../models/User');
const Deck = require('../models/Deck');
const Card = require('../models/Card');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const defaultCards = require('../userData/defaultCards');
module.exports = {
  registerUser: async (req, res) => {
    const { name, email, password } = req.body;
    //check all fields
    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Please Enter All Fields' });
    }
    //check if user exists
    User.findOne({ email }).then((user) => {
      if (user) {
        return res.status(400).json({ msg: 'User Already Exists' });
      }
      //if no User -
      const newUser = new User({
        name,
        email,
        password
      });
      newUser.decks = [Deck({ deckName: 'Javascript Basics' })];
      newUser.cards = defaultCards.map((card) =>
        Card({ ...card, deck: newUser.decks[0]._id })
      );

      //create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then((user) => {
            jwt.sign(
              { id: user.id },
              process.env.JWT_SECRET,
              {
                expiresIn: 3600
              },
              (err, token) => {
                if (err) {
                  throw err;
                }
                res.json({
                  token,
                  user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    decks: user.decks,
                    cards: user.cards
                  }
                });
              }
            );
          });
        });
      });
    });
  },
  login: async (req, res) => {
    const { name, email, password } = req.body;
    //check all fields
    if (!email || !password) {
      return res.status(400).json({ msg: 'Enter All Fields' });
    }
    //check if user exists
    User.findOne({ email }).then((user) => {
      if (!user) {
        return res.status(400).json({ msg: 'User Does Not Exist' });
      }

      //VAlidate Password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch) {
          return res.status(400).json({ msg: 'Invalid Credentials' });
        }
        jwt.sign(
          { id: user.id },
          process.env.JWT_SECRET,
          {
            expiresIn: 3600
          },
          (err, token) => {
            if (err) {
              throw err;
            }
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
                decks: user.decks,
                cards: user.cards
              }
            });
          }
        );
      });
    });
  },
  getUserData: async (req, res) => {
    User.findById(req.user.id)
      .select('-password')
      .then((user) => {
        res.json(user);
      });
  },
  logout: async (req, res) => {}
};
