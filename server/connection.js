const { Sequelize, DataTypes } = require("sequelize");
const { user, password, host, database } = require("./credidentials");
const Category = require("./models/Category");
const Image = require("./models/Image");
const ImageGallery = require("./models/ImageGallery");
const Product = require("./models/Product");
const User = require("./models/User");

const connection = new Sequelize(database, user, password, {
  host,
  dialect: "mysql",
});

Category(connection, DataTypes);
Image(connection, DataTypes);
ImageGallery(connection, DataTypes);
Product(connection, DataTypes);
User(connection, DataTypes);

//connection.sync({ force: true });
module.exports = connection;
