const router = require('express').Router();
const CourseController = require('../Controllers/CourseController')


router.route('/').get(CourseController.courses)

module.exports = router