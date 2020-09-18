const { Image } = require("../connection").models;
const CRUD = require("./CRUD");
const router = require("express").Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });
const path = require("path");
const { checkToken } = require("./Middleware");
const uploadArray = upload.array("images", 10);

CRUD(router, Image, {
  all: [checkToken],
  get: [],
  post: [],
  put: [],
  delete: [],
});

router.post("/upload", (req, res) => {
  uploadArray(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    const newImage = {
      name: req.files[0].filename,
      path: req.files[0].path,
      gallery: -1,
    };
    await Image.create(newImage).then(() => {
      return res.status(200).send(newImage.name);
    });
  });
});

router.get("/file/:name", (req, res) => {
  const { name } = req.params;
  return res.sendFile(path.join(__dirname, `../../uploads/${name}`));
});

module.exports = router;
