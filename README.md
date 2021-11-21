# Assignment 4.2 - ExpressJS
## Learning Objectives
The goal of this assignment is to learn the basics of ExpressJS. Express is a 
NodeJS backend framework that is easy to learn and a good use for simple web applications.

Your goal is to get familiar with the concepts of:
1. Request and Response
2. Templates & Twig
3. Processing of form inputs

**Note: You might need to rerun your `app.js` whenever you do a change to a non-static file`**

## Tasks
### Task 0 - Install the project
Run `npm install` and then run the `app.js` as your entry point. Click on the given link to 
access the page in your browser. You should now see a `Cannot GET /`-Message. Which routes are available to access? 

Open the single available route in your browser.

### Task 1 - Investigating the repository
What looks familiar? What is new to you? Have a look at the two template files in `views/` and
try to understand what they are doing. What happens if you write something inside the `footer` block?

Add a new block to `base_template.twig` to dynamically adjust the page's title on every request.

### Task 2 - Extending the template data
So far, you can only render `{{ name }}` in your template. Add a new data field `title`, so you can change the title in
every route. Add another route `/search` and render the title as `Search`.

Add a separate template (i.e. twig file) that renders an HTML form with a text input field (method post, route `/search`
and name the text input `name`).

### Task 3 - Handling POST data
Add another route that handles a POST request for the route `/search`. Render `name` with the attribute given by the 
POST request.

### Task 4 - Putting it all together
Now pick your `Search` service from our previous assignment and add it to this repository. Integrate it in such a way 
that it filters your pre-defined results by either URL or title (adjust the search form for this) and render the result
as a new data table to the frontend. (Check out the Twig syntax for a `{% for ... %}` loop!)

