const express = require('express')
const routes_posts = require('./routes/posts')
const app = express()

app.set('view engine', 'ejs')

app.use('/posts/', routes_posts)

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
    res.render('default', {posts: all})
})

app.listen(5000)
