const express = require('express');
const app = express();
const Twig = require("twig");
const Search = require('./Search');

const port = 3000;
app.use(express.static('public'));
app.set('view engine', 'twig');
app.use("/search", require("./routes/search_routes"));

app.get('/test', (req, res) => {
  res.render('test.twig', {name: "Jane Doe 0010", title: "Jane's Blog"});
});

app.all('*', (req, res) => {
  res.status(400).send("<h1>404 Page Not Found</h1>");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/search`)
});

module.exports = app;
