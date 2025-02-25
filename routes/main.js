const express = require("express");
const router = express.Router();
const path = require("path");
//const makePage = require("../javascript/makeContent.js");

// router.get('/', (req, res, next) => {
  
//   const htmltext = makePage("page1");
  
//   res.send(htmltext);
  //res.sendFile(path.join(__dirname, '../views/index.html'));
//});

router.get('/page2', (req, res, next) => {
  
  res.sendFile(path.join(__dirname, '../public', 'page2.html'));
  //res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;