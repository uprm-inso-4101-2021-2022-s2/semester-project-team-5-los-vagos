// Enviroment variables
//const PORT = process.env.PORT || 8080

// Load node modules
const express = require('express');
const  ejs = require("ejs"); // This is the view engine
const session = require('express-session'); // Express session
const pgSession = require('connect-pg-simple')(session); // Auth interactions?
//Initializing:
var app = express();
// Database:
const pool = require("./db")
// Settings:
app.set('view engine', 'ejs'); // setting view engine to ejs
app.use(express.urlencoded({extended:false})); // Allows to send details from front-end to server
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


app.post('/signup',async (req,res) =>{
    let{email, password} = req.body; // THis worked after adding name and id attributes to their respective input tags
    res.send(`signup usr name: ${email} and psswd : ${password}`);
    let errors = [];
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    pool.pool.query("INSERT INTO users (usr_name, usr_password) VALUES($1, $2)",[email,password], (err, results) => {
        if (err) {
            console.log(err);
            throw err;
        }
        // The code bellow probably cannot coexist with res.send();
    // res.json(results.rows);
    });
    // TODO check email being unique, and check password not empty, maybe add a confirm password option.
    // If email or password bad then re-render the page with erros
    // if errors.length > 0
    // res.render("/", errors);
    // If email good, password good then redirect to main
});

app.post('/signin',(req,res) =>{
    let{email, password} = req.body; // THis worked after adding name and id attributes to their respective input tags
    res.send(`signup usr name: ${email} and psswd : ${password}`);
    let errors = [];
    // TODO check email being unique, and check password not empty, maybe add a confirm password option.
    // If email or password bad then re-render the page with erros
    // if errors.length > 0
    // res.render("/", errors);
    // If email good, password good then redirect to main
});
// Main
// TODO View recipes
// TODO Post Recipe
// TODO Modify Recipe
// TODO Delete Recipe

// Info route
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