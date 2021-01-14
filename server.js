require('dotenv').config();
const app = require('./app');

const PORT = process.env.server_port || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
