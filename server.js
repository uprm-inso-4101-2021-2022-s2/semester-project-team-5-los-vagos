// Load node modules
const express = require('express');
const  ejs = require("ejs"); // This is the view engine
//Initializing:
var app = express();
// Settings:
app.set('view engine', 'ejs');
app.use(express.static('public')); // Render static files 
                                   // (static files belong in the public dir)

// Port to listen to
app.listen(8080);
// Routes:

