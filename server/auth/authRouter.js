const router = require('express').Router();

const validateUser = require('../middlewares/validateUser');
const registerUser = require('./registerUser');

router.post('/register', validateUser, registerUser);

module.exports = router;