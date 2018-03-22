// let http = require("http");

let express = require('express');
let app = express();
let ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true ,limit:'50mb'}));

app.get("/",function(req,res){
    res.render('home');
    return;
})

app.listen(3000);