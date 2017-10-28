var express = require('express');
var app = express();
//以下三行處理express的資料
 var bodyParser=require('body-parser')

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extend:true}));
 //use 使用一個功能



app.post('/user',function(req,res){
    console.log(req.body);

    if (req.body.name=="gonsakon"&&req.body.pwd=="1234") {
        res.send("您的姓名:"+req.body.name+" 您的密碼:"+req.body.pwd);
    } else {
        res.send("無此帳號");
    }
    
   
})


 
//post 使用者傳送資料
// get 使用者在讀資料


app.listen(3000)