/**
 * Created by lnolazco on 03/07/15.
 */
var express = require('express');
var app = express();
var mp = Math.random() * 100;

app.use("/public", express.static(__dirname + "/public"));

setInterval(function(){
    mp = Math.random() * 100;
}, 5000);

app.get('/', function(req, res) {
    res.sendfile('public/index.html');
});

app.get('/api/random', function(req, res) {
    res.json({ "random": mp});
});

app.listen(3000);
console.log('Server listening in port 3000');
