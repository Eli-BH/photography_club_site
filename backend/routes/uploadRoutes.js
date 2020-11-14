const exporess = require("express");
const multer = require("multer");
const router = exporess.Router();
const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    //this is where the file uploads to,
    //its possile that this is where we can upload to s3 buckets
    // see s3 documentation for more info
    //possible to upload withou multer and only use s3
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    //extname function essentiall targets and bings in the extention name from the upload
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

//filter for photos only
function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  //check if the file type is in the filetypes
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

//middleware for the route
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

//upload withoug sin
router.post("/", upload.single("image"), (req, res) => {
  //send the pathname
  res.send(`/${req.file.path}`);
});

router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

module.exports = router;
