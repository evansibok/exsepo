const router = require('express').Router();

const usersRouter = require('./users/usersRouter');
const authRouter = require('./auth/authRouter');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json(`API is live!`);
})

module.exports = router;