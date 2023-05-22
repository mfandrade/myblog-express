const express = require('express')
const mongoose = require('mongoose')
const routes_posts = require('./routes/posts')
const override = require('method-override')
const Post = require('./models/post')
const app = express()

mongoose.connect('mongodb://127.0.0.1/myblog');

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(override('_method'))

const PPP = 5 // posts per page
app.get('/', async (req, res) => {

    let cur = parseInt(req.query.page)
    if (isNaN(cur)) cur = 0

    let all = await Post.count().exec()
    const posts = await Post.find()
        .limit(PPP)
        .skip(PPP * cur)
        .sort({ created: 'desc' })
    res.render('posts/index', { posts: posts, cur: cur, all: all, ppp: PPP })
})
app.use('/posts/', routes_posts)


app.listen(5000)
