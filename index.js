const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static('./'))
const path = require("path");


app.get('/', function(req,res){
    res.sendFile('index.html', { root: path.join(__dirname, './') });
});

app.get('/contact', function(req, res) {
    console.log("test")
  });

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  

