const users = require("./users");
module.exports = app => {
  app.get("/", function(req, res) {
    res.send("Hello World!");
  });

  app.use("/users", users);
};
