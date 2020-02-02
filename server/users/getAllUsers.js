const models = require('../database/models');

function getAllUsers(req, res) {
  models.User.findAll()
  .then(users => {
    res.status(200).json(users)
  })
  .catch(err => {
    res.status(404).json({
      message: err.message,
      stack: err.stack
    })
  })
}

module.exports = getAllUsers;