const express = require("express");
const app = express();
const PORT = 3000;
const mountRoutes = require("./src/app/routes");
const db = require("./src/app/db");

db.createBd();
mountRoutes(app);
app.listen(PORT, () => {
  console.log(`Welcome on port ${PORT}!`);
});
