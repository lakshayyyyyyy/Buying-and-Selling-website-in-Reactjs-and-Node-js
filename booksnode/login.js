var express=require('express');
var cors=require("cors");
var mysql=require('mysql');
var bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"buynsell"
});
app.use(cors());
app.listen(9000);
conn.connect();
var data;
app.get('/home',function(req,res)
{   var q="Select * from buynselld";

    conn.query(q,function (err,result) {
        if(err) throw err;
        data=result;

    });
    res.send(data);
});

app.get('/carnbikes',function(req,res)
{   var q="Select * from buynselld where Category='Car&bikes'";

    conn.query(q,function (err,result) {
        if(err) throw err;
        data=result;

    });
    res.send(data);
});
app.get('/Furniture',function(req,res)
{   var q="Select * from buynselld where Category='Furniture'";

    conn.query(q,function (err,result) {
        if(err) throw err;
        data=result;

    });
    res.send(data);
});
app.get('/booksnsports',function(req,res)
{   var q="Select * from buynselld where Category='BooknSports'";

    conn.query(q,function (err,result) {
        if(err) throw err;
        data=result;

    });
    res.send(data);
});

app.post('/add',function (req,res) {
    console.log(req.body);
    var nameP = req.body.nameP;
    var description = req.body.description;
    var category = req.body.category;
    var price = req.body.price;
    var q= "insert into buynselld (category,Title,description,price) values ('"+category+"','"+nameP+"','"+description+"','"+price+"')";
    conn.query(q,function (err,result) {
        if(err) throw err;
        console.log(result);
        console.log(result.data);

    });
})