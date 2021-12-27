const express = require('express');
const router = express.Router();
const toughtsController = require('../controllers/toughtsController');

//helper
const checkAuth = require('../helpers/auth').checkAuth;

router.get('/add', checkAuth, toughtsController.createTought);
router.post('/add', checkAuth, toughtsController.createToughtSave);
router.get('/dashboard', checkAuth, toughtsController.dashboard);
router.get('/', toughtsController.showToughts);

module.exports = router;