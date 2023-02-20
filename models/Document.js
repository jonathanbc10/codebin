const mongoose = require('mongoose')

const docSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Document', docSchema)