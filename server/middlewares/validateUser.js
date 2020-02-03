function validateUser(req, res, next) {
  const user = req.body;

  if (Object.keys(user).length === 0) {
    res.status(400).json({ message: 'Invalid Credentials!' })
  } else if (user.username === "" || user.password === "" || user.email === "") {
    res.status(400).json({ message: 'Please provide fill all fields!' })
  } else {
    next();
  }
}

module.exports = validateUser;