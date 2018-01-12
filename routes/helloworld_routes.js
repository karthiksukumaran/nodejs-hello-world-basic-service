'use strict';


var express = require('express');
var helloWorldRouter = require('../controllers/helloworld_controller.js');

var router = module.exports = express.Router();

router.post("/hello", helloWorldRouter.helloworld);
router.get("/hello", helloWorldRouter.helloworld);