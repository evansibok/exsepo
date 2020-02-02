
const models = require('../database/models');

function createUser(req, res) {
  const user = req.body;

  models.User.create(user)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      res.status(500).json({
        message: err.message,
        stack: err.stack
      })
    })
}

module.exports = createUser;