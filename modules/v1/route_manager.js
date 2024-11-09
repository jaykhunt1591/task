const express = require('express');
const router = express.Router();

const routes = require('./routes/route')
router.use('/institute/', routes);

module.exports = router;