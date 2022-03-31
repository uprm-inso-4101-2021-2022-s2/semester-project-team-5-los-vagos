// Load node modules
const express = require('express');
const  ejs = require("ejs"); // This is the view engine
//Initializing:
var app = express();
// Settings:
app.set('view engine', 'ejs');
app.use(express.static('public')); // Render static files 
                                   // (static files belong in the public dir)
app.use('/images',express.static('public/images'))
app.use('/css',express.static('public/css'))

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