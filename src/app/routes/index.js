const Router = require("express-promise-router");
const db = require("../db");
const faker = require("faker");
faker.locale = "fr";

module.exports = app => {
  app.get("/", function(req, res) {
    res.send("Hello World!");
  });

  app.get("/users", async (req, res) => {
    const { rows } = await db.query("SELECT * FROM users");
    res.send(rows);
  });

  app.get("/users/add", async (req, res) => {
    const newUser = {
      name: faker.name.findName(),
      email: faker.internet.email()
    };
    console.log("newUser", newUser);

    // create a new user
    await db.query("INSERT INTO users(data) VALUES($1)", [newUser]);

    const { rows } = await db.query("SELECT * FROM users");
    res.send(rows);
  });
};
