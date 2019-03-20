const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directoryng
app.use(express.static(__dirname + '/dist/joe-biggins'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/joe-biggins/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
