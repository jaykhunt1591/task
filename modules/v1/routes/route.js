const express = require('express');
const router = express.Router();
var institute_controller = require('../controller/institute_controller');

router.post("/add_institute", institute_controller.add_institute);


module.exports = router;