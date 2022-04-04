// Load node modules
const express = require('express');
const  ejs = require("ejs"); // This is the view engine
const session = require('express-session'); // Auth
//Initializing:
var app = express();
// Database:
const pool = require("./db")
// Settings:
app.set('view engine', 'ejs'); // setting view engine to ejs
app.use(session({
    secret: "key that will sign the cookie",
    resave: false, // create new user for evey request
    saveUninitialized: false // If no modification done, thn do not save
})); // Session
app.use(express.static('public')); // Render static files 
                                   // (static files belong in the public dir)
app.use('/images',express.static('public/images'))
app.use('/css',express.static('public/css'))
app.use(express.json()) // accesing req.body

// Port to listen to
app.listen(8080, ()=>{
    console.log("Listening on port: 8080");
});
// Routes:

// Index
app.get('/',(req,res) =>{
    
    res.render('pages/index')
});
// Sign up
app.get('/signup',(req,res) =>{
    res.render('pages/signup')
});
app.get('/signup',(req,res) =>{
    res.render('pages/signup')
});
// Sign in / Log in
app.get('/info',(req,res) =>{
    res.render('pages/info')
});

/*
app.post('route', async (req, res)=>{
    try{
        const {json_field_you_want} = req.body
        const postQuery = await pool.query("INSERT INTO tablename (column 1, column 2) VALUES($1,$2) Returning *",val1,val2) // i thinks vals belong to an array
        res.json(postQuery.rows[0]);
    } catch (err) {
        console.log(err.message)
    }
});

route/:id
const {id}req.params;
*/