const express = require("express");
const router = express.Router();
const path = require("path");
const htmltext = require("../javascript/makeContent.js");

router.get('/', (req, res, next) => {
  //res.send(htmltext);
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;