module.exports = function(sequelize, DataTypes) {
  var Topic = sequelize.define("Topic", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Topic.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Topic.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Topic;
};
