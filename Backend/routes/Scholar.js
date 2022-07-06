const router = require('express').Router();
const ScholarController = require('../Controllers/ScholarController')

router.route('/').get(ScholarController.scholar)

module.exports = router