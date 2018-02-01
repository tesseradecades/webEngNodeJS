var express = require('express');
var app = express();

app.use('/public',express.static(__dirname+'/public'));
app.use('/node_modules/bootstrap-4.0.0',express.static(__dirname+'/node_modules/bootstrap-4.0.0'));
app.get('/', function (req, res) {
    res.sendFile( __dirname + "/view/index.htm" );
 })
/*app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/view/index.htm" );
})*/

app.get('/index', function (req, res) {
    res.sendFile( __dirname + "/view/index.htm" );
 })

 app.get('/other', function (req, res) {
    res.sendFile( __dirname + "/view/other.htm" );
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})