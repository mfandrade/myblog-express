const express = require('express')
const Post = require('./../models/post')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('posts/new')
})
router.post('/', (req, res) => {
    res.send('Got a post request')
})

module.exports = router
