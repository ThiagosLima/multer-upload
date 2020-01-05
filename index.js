const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({ dest: "images" });

app.post("/upload", upload.array("upload"), (req, res) => {
  res.send();
});

const PORT = 3000;
app.listen(process.env.PORT || PORT, console.log(`Listening on port ${PORT}`));
