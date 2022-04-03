// Load node modules
const express = require('express');
const  ejs = require("ejs"); // This is the view engine
//Initializing:
var app = express();
// Database:
const pool = require("./db")
// Settings:
app.set('view engine', 'ejs');
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

app.get('',(req,res) =>{
    res.render('pages/index')
})
app.get('/signup.ejs',(req,res) =>{
    res.render('pages/signup')
})
app.get('/info.ejs',(req,res) =>{
    res.render('pages/info')
})
app.get('/index.ejs',(req,res) =>{
    res.render('pages/index')
})

/*
app.post('route', async (req, res)=>{
    try{
        const {json_field_you_want} = req.body
        const postQuery = await pool.query("INSERT INTO tablename")
    } catch (err) {
        console.log(err.message)
    }
});
*/