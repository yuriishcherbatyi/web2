const express=require('express');
const app=express();
const fs=require('fs');
const User=require('./models/User');
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})

app.get('/getusers',function(req,res){
    User.find(function(err,data){
        console.log(data);
        res.send(data);
    })
})

app.post('/adduser',function(req,res){
    console.log(req.body);
    var user=new User(req.body);
    user.save(function(err,data){
        if(err) console.log(err.message);
        res.send('add user!');
    })
})

app.post('/deleteuser',function(req,res){
    console.log(req.body);
    User.remove({_id:req.body.id},function(err,data){
        res.send('remove user');
    })
})

app.post('/updateuser',function(req,res){
    console.log(req.body);
    let userToUpgrade = {_id:req.body.id}
    let infoToUpgrade = {username:req.body.username, userage:req.body.userage}
    User.updateOne(userToUpgrade,infoToUpgrade,function(err,data){
        res.send('updated user');
    })
})

app.listen(process.env.PORT||8081);

console.log('Run server!');