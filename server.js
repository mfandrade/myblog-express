const express = require('express')
const mongoose = require('mongoose')
const routes_posts = require('./routes/posts')
const app = express()

//mongoose.connect('mongodb://localhost/myblog');


app.set('view engine', 'ejs')

app.use('/posts/', routes_posts)
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    const all = [
        {
            title: 'My first post',
            content: 'Lorem ipsun sit dolor amet...',
            created: new Date()
        },
        {
            title: 'Hello, cruel world!',
            content: 'Blablablablablablablablabla...',
            created: new Date()
        }
    ]
    res.render('posts/index', {posts: all})
})

app.listen(5000)
