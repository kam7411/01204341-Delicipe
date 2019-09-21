const express = require('express');
const path = require('path');

//Init App
const app = express();

//Load view Enging
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

//Home Route
app.get('/', function(req,res){
    res.render('main', {
        title:'Delicipe'
    });
});

app.get('/', function(req,res){

})
//Start Server
app.listen(8000,function(){
    console.log('Server started on port 8000...')
});