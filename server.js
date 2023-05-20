const express = require('express')
const routes_posts = require('./routes/posts')
const app = express()

app.set('view engine', 'ejs')

app.use('/posts/', routes_posts)

app.get('/', (req, res) => {
    res.render('default')
})

app.listen(5000)
