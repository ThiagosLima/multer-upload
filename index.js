const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const Comic = require("./models/comic");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost/comics-shop", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const upload = multer();

app.post("/comic", upload.array("upload"), async (req, res) => {
  const { name } = req.body;
  const pages = req.files;

  const comic = new Comic({ name, pages });
  await comic.save();
  res.send();
});

app.get("/comic/:id", async (req, res) => {
  const comic = await Comic.findById(req.params.id);

  res.send(comic);
});

const PORT = 3000;
app.listen(process.env.PORT || PORT, console.log(`Listening on port ${PORT}`));
