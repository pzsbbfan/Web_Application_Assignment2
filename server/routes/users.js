/* 
File name: user.js
Student name: Zhikun Fan
StudentID: 301250119
Date 09/30/2022
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
