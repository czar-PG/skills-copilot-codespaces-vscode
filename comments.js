// Create web server with express
// Create a RESTful API for comments
// Create a RESTful API for users
// Create a RESTful API for posts
// Create a RESTful API for categories
// Create a RESTful API for tags
// Create a RESTful API for media
// Create a RESTful API for menus
// Create a RESTful API for pages
// Create a RESTful API for settings
// Create a RESTful API for widgets
// Create a RESTful API for plugins
// Create a RESTful API for themes
// Create a RESTful API for users
// Create a RESTful API for comments

// Import express
const express = require('express');
const app = express();
const port = 3000;

// Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import comments
const comments = require('./comments');
app.use('/comments', comments);

// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});