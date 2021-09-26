const router = require('express').Router();
const apiController = require('../controllers/apiController');
const auth = require('../middleware/auth');

//@desc POST make a new card
//@route /api/make-card
router.post('/make-card', auth, apiController.makeCard);

//@desc add a new deck
//@route /api/add-deck
router.post('/add-deck', auth, apiController.addDeck);

//@desc DELETE delete a deck and all the associated cards with it
//@route /api/delete-deck/:id
router.delete('/delete-deck/:id', auth, apiController.deleteDeck);

//@desc
//@route /api/

module.exports = router;
