var express = require('express');
var path = require('path')
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

//Renders the main HTML page
app.get("/", function (req, res) {
  res.render("main.ejs"); 
});

//Captures data, Validates and Returns to User
app.get('/sendForm', function (req, res) {
  var userName = req.query.username;
  var userAddress = req.query.address;
  var userDOB = req.query.dob;

  if ((Object.keys(userName).length <= 5) || (Object.keys(userAddress).length <= 5) || (Object.keys(userDOB).length === 0)) {
    res.send ('Invalid Data Error Occured');
  } else {
    res.send('SENDING TO MONGODB' + 'Your Name:' + userName + 'Your Address: ' + userAddress + 'Your DOB ' + userDOB);
  }
});

// Placed last so it will not run over other routes
app.get("*", function (req, res) {
  res.send("You have specified an incorrect path");
});

app.listen(3000, function() {
   console.log('Server running at http://127.0.0.1:3000/');
});