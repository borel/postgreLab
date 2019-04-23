const Router = require("express-promise-router");
const db = require("../db");
const faker = require("faker");
faker.locale = "fr";

const router = new Router();
module.exports = router;

router.get(":id", async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  res.send(rows[0]);
});

router.get("add", async (req, res) => {
  const newUser = {
    name: faker.name.findName(),
    email: faker.internet.email()
  };
  // create a new user
  await client.query("INSERT INTO users(data) VALUES($1)", [newUser]);
  const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  res.send(rows[0]);
});
