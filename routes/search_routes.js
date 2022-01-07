const express = require('express');
const router = express.Router();
const Search = require('../Search');
// Saves array of objects from json file in variable
const searchData = require('../data/example.json');
// Creates a search from the Search class with an array of searchable objects from the searchData (json file)
const newSearch = new Search(searchData);

router.use(express.urlencoded({extended: false}));

// @TODO add new route for GET /search
router.get('/', (req, res) => {
    res.render('search.twig', {name: "Search"});
});

// @TODO add new route for POST /search

router.post('/', (req, res) => {
    // Saves the user text input
    const searchInput = req.body.search;
    // Saves the user radio btn choice
    const radioChoice = req.body.radioBtn;
    // Instantiates the result variable with Search class function on newSearch object as default
    let result = newSearch.getSearchableObjects();

    // Depending on the user radion btn choice, another Search class function is used on newSearch
    if (radioChoice === "filter-title") {
        result = newSearch.filterByTitle(searchInput);
    } else if (radioChoice === "filter-url") {
        result = newSearch.filterByUrl(searchInput);
    } else if (radioChoice === "filter-id") {
        result = newSearch.getById(searchInput);
    }

    // Result is giving to the twig template to render on the /search page with html
    res.render('search.twig', {outputs: result});
});

module.exports = router;