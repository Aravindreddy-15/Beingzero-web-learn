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
app.get("/login", function(req, res){
    let path = __dirname+"/frontend/html/login.html";
    res.sendFile(path);
})

app.get("/colorpicker", function(req, res){
    let path = __dirname+"/frontend/html/colorpicker.html";
    res.sendFile(path);
})

app.get("/google", function(req, res){
        let path = __dirname+"/frontend/html/google.html";
        res.sendFile(path);
})
app.get("/chart", function(req, res){
    let path = __dirname+"/frontend/html/chart.html";
    res.sendFile(path);
})
app.get("/reg", function(req, res){
    let path = __dirname+"/frontend/html/registration.html";
    res.sendFile(path);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
