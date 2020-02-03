const router = require('express').Router();

const getAllUsers = require('./getAllUsers');
const validateUser = require('../middlewares/validateUser');

router.get('/', getAllUsers);

module.exports = router;