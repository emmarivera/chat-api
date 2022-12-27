const router = require('express').Router()
const authServices = require('./auth.sevices')

router.post('/login', authServices.postLogin)
router.post('/recovery-password', authServices.postRecoveryToken)

module.exports = router