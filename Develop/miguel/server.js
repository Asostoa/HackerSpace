const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const uploadImage = require("./helpers/helpers");
const ejs =require("ejs");
const upload = multer({ dest: "uploads/" });
const app = express();

app.set("view engine","ejs")
const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    // no larger than 5mb.
    fileSize: 5 * 1024 * 1024,
  },
});

app.disable("x-powered-by");
app.use(multerMid.single("file"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post("/uploads",upload.single("avatar"), async (req, res, next) => {
  try {
    const myFile = req.file;
    console.log(myFile)
    const imageUrl = await uploadImage(myFile);
    res.status(200).json({
      message: "Upload was successful",
      data: imageUrl,
    });
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err,
    message: err,
  });
  next();
});

app.listen(9001, () => {
  console.log("app now listening for requests!!! ");
});
