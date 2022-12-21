const router = require('express').Router()
const postLogin = require('./auth.sevices')

router.post('/login', postLogin)

module.exports = router