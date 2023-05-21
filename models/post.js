const mongoose = require('mongoose')

const schema_post = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    content: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', schema_post)
