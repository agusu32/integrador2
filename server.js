// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bycrypt = require('bcrypt');
const path = require('path');

//declare static path
let staticPath = path.join(__dirname, "public");

//intializing express.js
const app = express();

//middlewares
app.use(express.static(staticPath));
app.use(express.json());

//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"))
})

//signup route
app.get('/signup', (req,res) => {
    res.sendFile(path.join(staticPath, "signup.html"))
})

app.post('/signup', (req, res) => {
    // console.log(req.body);
    let { name, email, password, number, tac, notification} = req.body;

    //form validations
    if(name.leng < 3){
        return res.json({'alert': 'name must be 3 letters long'});
    } else if (!email.length){
        return res.json({'alert':'Enter your email'});
    } else if(!password.length){
        return res.json({'alert':'Password should be 8 letters long'});
    } else if(!number.length){
        return res.json({'alert':'Enter your phone number'});
    } else if(!Number(number) || number.length < 8 && number.value.length > 13){
        return res.json({'alert':'Invalid number, please enter valid one'});
    } else if(!tac.checked){
        return res.json({'alert':'You must agree with our terms and conditions'});
    } else{
        //store user in db
    }

    res.json('data recieved')
})

//404 route
app.use((req, res) => {
    res.sendFile(path.join(staticPath, "404.html"))
})

app.use((req, res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log('Listening on port 3000.......');
})

app.get('/cart', (req, res) => {
    res.sendFile(path.join(staticPath, "cart.html"));
})