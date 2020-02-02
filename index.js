require('dotenv').config();

const app = require('./server/server.js');

const PORT = process.env.PORT || 7002;

app.listen(PORT, () => {
  console.log(` *** Server listening on port: ${PORT} ***`);
});