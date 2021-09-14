const router = require('express').Router();
const apiController = require('../controllers/apiController');
const auth = require('../middleware/auth');
//@desc GET all user cards ( test route )
//@route /api/
router.get('/', auth, apiController.getCards);

//@desc POST make a new card
//@route /api/
router.post('/make-card', auth, apiController.makeCard);
//@desc
//@route /api/

//@desc
//@route /api/

//@desc
//@route /api/

module.exports = router;
