require("dotenv").config({ path: `${__dirname}/.env` });
const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./connection");
const CategoryController = require("./controllers/CategoryController");
const UserController = require("./controllers/UserController");
const ProductController = require("./controllers/ProductController");
const ImageController = require("./controllers/ImageController");
const ImageGalleryController = require("./controllers/ImageGalleryController");
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/category", CategoryController);
app.use("/user", UserController);
app.use("/product", ProductController);
app.use("/image", ImageController);
app.use("/imagegallery", ImageGalleryController);

app.listen(port, () => {
  console.log(`Listening ${port}....`);
  try {
    connection.authenticate();
  } catch (error) {
    console.log(error);
  }
});
