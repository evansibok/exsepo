
const models = require('../database/models');


function makeToken(user) {
  
}

function loginUser(req, res) {
  const { username, password } = req.body;

  models.User.find({ username })
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        const token = makeToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
        })
      } else {
        res.status(404).json({
          message: "User not found! Please make sure your login details are correct."
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: `Login unsuccessful!`,
        stack: err.stack
      })
    })
}

module.exports = loginUser;