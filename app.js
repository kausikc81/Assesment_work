const express = require("express")
const app = express();

// serve files from the public directory
app.use(express.static('public'));

app.listen(3000, function () {
console.log("Started application on port %d", 3000)
});

// serve the homepage
app.get('/', (req, res) => {
    //res.send("GET req called!!!!");
    res.sendFile(__dirname + '/index.html');
  });

