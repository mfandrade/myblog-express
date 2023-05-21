const express = require('express')
const mongoose = require('mongoose')
const routes_posts = require('./routes/posts')
const Post = require('./models/post')
const app = express()

mongoose.connect('mongodb://127.0.0.1/myblog');


app.set('view engine', 'ejs')

//const bodyparser = require('body-parser')
//app.use(express.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    const all = await Post.find().sort({ created: 'desc' })
    res.render('posts/index', { posts: all })
})
app.use('/posts/', routes_posts)


app.listen(5000)
