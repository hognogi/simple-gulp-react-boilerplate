var express = require('express');
var fs = require('fs');

var app = express();


//init static files
app.use("/public",express.static('./public/' ));


app.get('/', function (req, res) {
	fs.readFile('react_base.html', 'utf8', function(err, file_content) {	
  		res.send(file_content);
	});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

