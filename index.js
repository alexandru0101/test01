var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send("Какашка");
});

app.listen(3030, console.log('Work')  );