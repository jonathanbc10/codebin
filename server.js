require('dotenv').config()
const port = process.env.SERVER_PORT || 3000
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/codebin'

const mongoose = require('mongoose')
const express = require('express')
const Document = require('./models/Document')

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

mongoose.set('strictQuery', false)
mongoose.connect(dbUrl, { useNewUrlParser: true })
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


app.get('/', (req, res) => {
    const code = `Welcome to CodeBin!

Use the commands in the top right corner
to create a new file to share with others.`
    res.render('code-display', {
        code: code,
        language: 'plaintext'
    })
})

app.get('/new', (req, res) => {
    res.render('new')
})


app.post('/save', async (req, res) => {
    const value = req.body.value

    try {
        const document = await Document.create({ value: value })
        res.redirect(`/${document.id}`)
    } catch (e) {
        console.error(e)
        res.render('new', { value })
    }
})

app.get('/:id/duplicate', async (req, res) => {
    const id = req.params.id

    try {
        const document = await Document.findById(id)
        res.render('new', { value: document.value })
    } catch (e) {
        console.error(e)
        res.render(`/${id}`)
    }
})

app.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const document = await Document.findById(id)
        res.render('code-display', { code: document.value, id })
    } catch (e) {
        console.error(e)
        res.redirect('/')
    }
})


app.listen(port, () => {
    console.log(`Welcome to the app server. You're on port ${port}. Have a nice visit :)`)
})