var express = require("express"),
	cookieParser = require("cookie-parser"),
	bodyParser = require("body-parser");
	mongoose = require('mongoose');
 

var app = express();

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(express.static(__dirname));
	app.listen(8080);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  // we're connected!
});


app.post("/",function(req,res){
	res.sendFile(__dirname + '/index.html');
	
})

app.get('/user/:username', function(req, res){
	console.log(req);

	res.json(req.params);
})


