const LocalStrategy = require('passport-local').Strategy;
const { authenticate } = require('passport');
// If lost: checkout psql sessions at about 1hr mark
// LocalStrategy, odd name; odd require
const { pool } = require('./db'); // Remember pool.pool
/* These comments are starting to feel like elden ring msgs... */
function initialize(passport){
    const authenticateUser = (email, password, done)=>{
        pool.query(
            'SELECT * FROM users WHERE usr_name = $1', [email],(err,results)=>{
                if(err){
                    throw err;
                }
                console.log(results.rows);
                if(results.rows.length>0){ // If user in our database
                    const user = results.rows[0] // Pass the user object
                    console.log(user);
                    // Verifyy password:
                    if(password==user.usr_password){
                        return done(null, user);
                    } else {
                        return done(null, false, {message:"Incorrect password!"});
                    }
                } else {
                    return done(null, false, {message:"Email is not correct!"});
                }
            }
        );
    }
    passport.use(
        new LocalStrategy({
                usernameField: "email",
                passwordField: "password"
            }, 
            authenticateUser
        )
    );
    passport.serializeUser((user, done)=> done(null,user.usr_id));
    passport.deserializeUser((usr_id, done)=>{
        pool.query(
            'SELECT * FROM users WHERE usr_id = $1', [usr_id], (err, results)=>{
                if(err){
                    throw err;
                }
                return done(null, results.rows[0]); // IDK, something about storing user obj in session

            }
        );
    });
}

module.exports = initialize;