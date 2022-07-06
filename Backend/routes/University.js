const router = require('express').Router();
const UniController = require('../Controllers/Unicontroller')

router.route('/').get(UniController.university)

module.exports = router