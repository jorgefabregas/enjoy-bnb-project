const express = require('express');
const path = require ('path');
const app = express();
const port = 3000
const bcrypt = require('bcrypt');

const users = [];

app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index.ejs', {name: 'Jorge'});
})

app.get('/login', (req, res) => {
    res.render('login.ejs');
})

app.post('/login', (req, res) => {
    
})

app.get('/register', async (req, res) => {
    res.render('register.ejs');
})

app.post('/register', (req, res) => {
    try {
        const harshedPassword = bcrypt.hash(req.body.password, 5);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: harshedPassword  
    })
        res.redirect('/login');
    } catch {
        res.redirect('/register');
    }
})

app.listen(3000);
