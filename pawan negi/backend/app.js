const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require('./Book.model');
const cors = require("cors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//
const db = 'mongodb://localhost:27017/example';
mongoose.connect(db);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var privateKey = "pawan";
//
const saltRounds = 10;

app.post('/book', async (req, res) => {
    console.log("reqt:", req.body)
    console.log("req--:", req.body.password)
  await bcrypt.hash(req.body.password , saltRounds).then(function(hash) {
        // Store hash in your password DB.
            console.log("hash===",hash)
        // if (err) {
        //     console.log("err in hasing ", err);
        // }
        // else {
            const newBook = new Book();
            newBook.name = req.body.name;
            console.log(newBook.name)
            newBook.email = req.body.email;
            console.log(newBook.email)
            newBook.password = hash;
            console.log(newBook.password)
            newBook.save(function (err, book) {
                if (err) {
                    res.send('error in saving');
                }
                else {
                    console.log(book);
                    res.send(book)
                    console.log("saving sucessfully")
                }
            });
        // }


    })
})
//
app.post('/login', function (req, res) {
    
    // var name = req.body.data.name;
    // var password = req.body.data.password;
    Book.findOne({ name: req.body.name }, function (err, user) {
        // console.log("inside of db", user)
        if (err) {
            console.log("err is", err);
            
        }
        else if (user !== null) {
            bcrypt.compare(req.body.password, user.password, function(err, res) {
                // res == true
                console.log("result==",res)
                console.log("result==",user.password,req.body.password)
            });
            
               

        } else {
            // console.log( user.password , password);
            // bcrypt.compare(password,user.password, function (err, result) {
            //     console.log("password==",password)
            //     console.log("user.password==",user.password)
            //     console.log("result==",result)
                // if (err) {
                //     console.log("err", err);
                    
                // } else {
                //     console.log("result is", result)
                //     if (result) {
                //         console.log("result is", result)
                //         var headre = {
                //             name: user.name
                //         }
                //         jwt.sign(headre, 'secretkey', (err, token) => {
                //             res.json({
                //                 token
                //             })
                //             console.log(token)
                //         })
                //         console.log("login sucessfull ")

                //     }



                // }
            // });
        }

    })
});
//
app.get('/books', function (req, res) {
    console.log('getting books');

    Book.find({}).exec(function (err, books) {
        if (err) {
            res.send('error has occure')
        }
        else {
            //console.log(books);
            res.json(books);
        }
    })
});


app.get('/books/:id', function (req, res) {
    console.log('books geting');
    Book.findOne({
        _id: req.params.id
    }).exec(function (err, books) {
        if (err) {
            res.send('error');
        }
        else {
            console.log(books)
            res.json(books);
        }
    })
});

const hash = '$2b$10$3a6rcojdsfdn6mwyb.swdeou4ebsoemk1ivww2zhzrd3rhgachawo';

app.get('/hum', async (req,res) => {
  await  bcrypt.compare(req.body.password,  hash).then(function(res) {
    // res == true
    console.log(res, "=======");
});
});


app.listen(4000)