const express = require('express')
const routes_posts = require('./routes/posts')
const app = express()

app.set('view engine', 'ejs')

app.use('/posts/', routes_posts)

app.get('/', (req, res) => {
    const posts = [
        {
            title: 'My first post',
            content: 'Lorem ipsun sit dolor amet...',
            created: Date.now()
        }
    ]
    res.render('default', {all: posts})
})

app.listen(5000)
