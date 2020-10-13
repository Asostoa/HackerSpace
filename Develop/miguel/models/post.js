
// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
const Post = sequelize.define("Post", {
  title: Sequelize.STRING,
  code: Sequelize.STRING(1234),
  descritpioin:Sequelize.STRING(1234),
  created_at: Sequelize.DATE
});

// Syncs with DB
Post.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Post;

