const express = require('express')
const app = express()
const Twig = require("twig")

const port = 3000
app.use(express.static('public'))
app.set('view engine', 'twig')


app.get('/test', (req, res) => {
  res.render('test.twig', {name: "Jane Doe"})
})

// @TODO add new route for GET /search

// @TODO add new route for POST /search

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
