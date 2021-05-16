const { urlencoded } = require('express');
const express = require('express');

const app = express();
app.use(express.static("frontend"));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

var users =[{
    username: "first", email:"firstmail@gmail.com",id :"1"
}]
app.get("/", function(req, res){
    let path = __dirname+"/frontend/html/home.html";
    res.sendFile(path);
})

app.get("/resume", function(req, res){
    let path = __dirname+"/frontend/html/myresume.html";
    res.sendFile(path);
})
app.get("/validation", function(req, res){
    let path = __dirname+"/frontend/html/validation.html";
    res.sendFile(path);
})
app.get("/login", function(req, res){
    let path = __dirname+"/frontend/html/login.html";
    res.sendFile(path);
})
app.get("/todo", function(req, res){
    let path = __dirname+"/frontend/html/todo.html";
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


app.get('/api/users/user:id',function(req, res){
    var userid = req.params.userid;
    let i=-1;
    for(let i=0;i<users.length;i++){
        if(users[i].id==userid){
            i=1;
            break;
        }
    }
    if(i=-1)
    res.json({error : 'user not found'});
    else
    res.json(users[i]);

})
app.get('/reg', function(req, res){
    let path = __dirname+"/frontend/html/registration.html";
    res.sendFile(path);
})
app.post('/api/users',function(req,res){
    var newuser = req.body;
   // var t = JSON.stringify(newuser);
    users.push(newuser);
    res.json({users});

    
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
