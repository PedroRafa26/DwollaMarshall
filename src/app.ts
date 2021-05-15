import app from "./server"
const dotenv = require('dotenv').config()

const port: number = Number(process.env.port);

app.listen(port, function () {
  console.log(`Server digievoluciona en puerto ${port}`);
});