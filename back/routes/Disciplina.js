const express = require('express')
const router = express.Router()
const {sayHi}=require('../controllers/Disciplina')

router.get('/',sayHi)

module.exports = router