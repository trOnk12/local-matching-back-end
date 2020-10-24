var router = require('express').Router();

router.use('/users',require('./user'));

router.use('/locations',require('./location'));

module.exports = router;