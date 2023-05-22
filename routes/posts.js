const express = require('express')
const Post = require('./../models/post')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('posts/new', { post: new Post() })
})
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (post == null) res.redirect('/')

    res.render('posts/view', { post: post })
})

router.post('/', async (req, res, next) => {
    req.post = new Post()
    next()
}, saveFrom('new'))

router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

router.get('/edit/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.render('posts/edit', { post: post })
})

router.put('/:id', async (req, res, next) => {
    req.post = await Post.findById(req.params.id)
    next()
}, saveFrom('edit'))

function saveFrom(action) { // action = (new|edit)
    return async (req, res) => {
        let post = req.post
        post.title = req.body.title
        post.content = req.body.content

        try {
            post = await post.save()
            res.redirect(`/posts/${post.id}`)

        } catch (e) {
            action = (action == 'new' || action == 'edit')
                ? action
                : 'new'

            res.render(`posts/${action}`, { post: post })
        }
    }
}

module.exports = router
