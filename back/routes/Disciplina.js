const express = require('express')
const router = express.Router()
const {criar}=require('../controllers/Disciplina')

router.post('/criar',criar)

module.exports = router