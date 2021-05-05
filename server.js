const express = require('express');

const app = express();
app.use(express.static("frontend"));

app.get("/", function(req, res){
    res.send("hello");
})

app.get("/resume", function(req, res){
    let path = __dirname+"/frontend/html/myresume.html";
    res.sendFile(path);
})
app.get("/apple", function(req, res){
    let path = __dirname+"/frontend/html/apple.html";
    res.sendFile(path);
})
    app.get("/google", function(req, res){
        let path = __dirname+"/frontend/html/google.html";
        res.sendFile(path);
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
