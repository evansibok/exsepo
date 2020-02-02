const router = require('express').Router();

router.get('/', (req, res) => {
  res.json(`API is live!`);
})

module.exports = router;