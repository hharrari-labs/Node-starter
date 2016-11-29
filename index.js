var express = require("express"),
	cookieParser = require("cookie-parser"),
	bodyParser = require("body-parser");

var app = express();

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(express.static(__dirname));
	app.listen(8080);

app.post("/",function(req,res){
	res.sendFile(__dirname + '/index.html');
	
})

app.get('/user/:username', function(req, res){
	console.log(req);

	res.json(req.params);
})


