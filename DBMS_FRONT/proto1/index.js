//To run the file type nodemon index.js or node index.js and then open your default browser and type localhost:5500 to see the output



const exp = require('constants');
const express=require('express');
const path=require('path')
const app=express();
const passport=require('passport')
const session=require('express-session')
const mysql=require('mysql')
require('./auth')
app.use(express.json());
//app.use(express.static(path.join(__dirname,'client')))
// Assuming your CSS files are in a directory named 'public'
app.use(express.static(path.join(__dirname, '')));
function isLoggedIn(req,res,next){
    req.user ? next() : res.sendStatus(401);
 }
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./home.html'))
})

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(passport.initialize());
app.use(passport.session());
app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));

app.get('/auth/google/failure',isLoggedIn,(req,res)=>{
    res.send('Something wrong')
});
let Name=""
let mail=""
let roll_no=""
app.get('/auth/google/success',isLoggedIn,(req,res)=>{
    
    Name=req.user.name.familyName;
    //console.log(name)
    mail=req.user.email
    roll_no=req.user.given_name
    queryUser(Name,mail,roll_no)
    res.redirect('/profile.html');
});
async function queryUser(Name,mail,roll_no){
    const con=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'password',
        database:'Sports'
    })
    
    con.connect((err)=>{
        if(err){
            console.log("error connect")
            return;
        }
        console.log("Connected")
        con.query(`select S.timing from slots S join plays P on P.slotid=S.slotid where id='${roll_no}';`,(err,res)=>{
            if(err){
                console.log(err)
            }
            let timing=res[0].timing
            return timing 
        })
    })
}




app.listen(5500,()=>{
    console.log('Listening on port 5500')
});
