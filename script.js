const express = require('express');
const app = express();

app.set("view engine","ejs");

app.use(express.static('./public'))

app.use(function(req,res,next){
    console.log("OK");
    next();
})

app.get("/",function(req,res){
    res.render('home');
})

app.get("/contact",function(req,res){
    throw Error("Code: h1");
});

app.use(function(err,req,res,next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500);
    res.render('error', {error:err});
});

app.listen(3000);

