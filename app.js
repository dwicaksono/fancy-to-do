const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/index')
const erroHandler = require('./middleware/errorHandler')


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', routes)

app.use(erroHandler)

app.listen(port, () => console.log(`server running ${port}`))