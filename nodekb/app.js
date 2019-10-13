const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/nodekb');

let db = mongoose.connection;

//Check connection
db.once('open',function(){
    console.log('Connected to MongoDB')
})
//Check for DB errors
db.on('error',function(err){
    console.log(err);
})

//Init App
const app = express();

//Bring in Models
let Article = require('./models/article');

//Load view Enging
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Home Route
app.get('/', function(req,res){
    Article.find({}, function(err, article){
        if(err){
            console.log(err);
        }
        else {
            console.log(article)
            res.render('index', {
                title:'Delicipe',
                articles: article
            });
        }
    });
});

//Add Route
app.get('/article/add',function(req,res){
    res.render('add',{
        title:'Add Article'
    });
});

//Add Submit POST Route
app.post('/article/add',function(req,res){
    let article = new Article();
    article.title = req.body.title;
    article.author = req.body.author;
    article.body = req.body.body;
    // console.log(article.body)
    article.save(function(err){
        if(err){
            console.log(err);
            return;
        }
        else {
            res.redirect('/');
        }
    });
});

//Start Server
app.listen(8000,function(){
    console.log('Server started on port 8000...')
});