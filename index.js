const express = require("express");
const app = express();
const qrcode = require("qrcode");
const path = require("path");

app.set("view engine","ejs")
var QRCode = require('qrcode');
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req,res){
    const url = "hariom";
    res.render("reader",{url:url});
    
});
app.get("/read",function(req,res){
    const url = "hariom";
    res.render("index",{url:url});
    
});
app.post("/qr",async function(req,res){
    QRCode.toDataURL(req.body.image, function (err, url) {
        res.render("index",{url:url});
       })
});

app.listen(3000);