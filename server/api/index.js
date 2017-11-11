const router = require('express').Router()

router.use('/auth', require('./oauth'))
router.use('/goals', require('./goals'))
router.use('/tasks', require('./tasks'))

module.exports = router
