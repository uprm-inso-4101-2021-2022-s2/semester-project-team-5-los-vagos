// Enviroment variables
//const PORT = process.env.PORT || 8080

// Load node modules
const express = require('express');
const  ejs = require("ejs"); // This is the view engine
const session = require('express-session'); // Express session
const flash = require("express-flash");
// const pgSession = require('connect-pg-simple')(session); // Auth interactions?
//Initializing:
var app = express();
// Database:
const pool = require("./db")
// Settings:
app.set('view engine', 'ejs'); // setting view engine to ejs
app.use(express.urlencoded({extended:false})); // Allows to send details from front-end to server
app.use(session({
    secret: "key that will sign the cookie",// can be any string, guess this is like a seed for encryption
    resave: false, // create new user for evey request
    saveUninitialized: false // If no modification done, then do not save
})); 
app.use(flash());// That's it?! huh...
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
    let{email, password} = req.body; // This worked after adding name and id attributes to their respective input tags
    //res.send(`signup usr name: ${email} and psswd : ${password}`);
    let errors = [];
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // allows for unsafe operations, like using a db apparently...
    pool.pool.query("SELECT * FROM users WHERE  usr_name=$1",[email],
     (err, results)=>{
        if(err){
            throw err;
        }
        console.log(results.rows)
        if(results.rows.length>0){
            errors.push({ message: "Email already registered!"});
            res.render("pages/index",{errors});
        } else {
            // If email not registered already
            pool.pool.query("INSERT INTO users (usr_name, usr_password) VALUES($1, $2) RETURNING usr_id, usr_password",[email,password], 
            (err, results) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                console.log(results.rows);
                req.flash('success_msg',"You have registered succesfully! Please log in.");
                res.redirect("/");
    // The code bellow probably cannot coexist with res.send();
    // res.json(results.rows);
    //console.log(req.body);
            }
            );
        }
    });
    
    // TODO check email being unique, and check password not empty, maybe add a confirm password option.
    // If email or password bad then re-render the page with erros
    // if errors.length > 0
    // res.render("/", errors);
    // If email good, password good then redirect to main
});

app.post('/signin',(req,res) =>{
    let{email, password} = req.body; // THis worked after adding name and id attributes to their respective input tags
    let password_db;
    // res.send(`signup usr name: ${email} and psswd : ${password}`);
    let errors = [];
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // allows for unsafe operations, like using a db apparently...
    pool.pool.query("SELECT * FROM users WHERE  usr_name=$1",[email],
    (err,results)=>{
        if(err){
            throw err;
        }
        console.log(results.rows[0]);
        // Verify password:
        password_db = results.rows[0]["usr_password"];
        console.log(password_db);
        if(password_db==password){ // Create session?
            res.send("passwords match!");
        } else{ 
            // TODO Push error message
            res.send("passwords do not match!");
            // TODO Re-render page:
        }
        
    });
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

make the params optional by toute/param1?/:param2
*/