const express = require('express')
const Post = require('./../models/post')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('posts/new', { post: new Post() })
})
router.get('/:id', (req, res) => {
})

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })
    try {
        post = await post.save()
        //res.redirect(`/posts/${post.id}`)
        res.redirect('/')
    } catch (e) {
        res.render('posts/new', { post: post })
    }
})

module.exports = router
