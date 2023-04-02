const exp = require("constants");
const multer = require("multer")
const path = require("path")


exports.uploads = multer({
  storage: multer.diskStorage({
    //폴더위치 지정
    destination: (req, file, done) => {
      done(null, "uploads");
    },
    filename: (req, file, done) => {
      const ext = path.extname(file.originalname);
      const fileName = path.basename(file.originalname, ext);
      done(null, fileName);
    },
  }),
  fileFilter : null,
  limits: { fileSize: 30 * 1024 * 1024 },
});


