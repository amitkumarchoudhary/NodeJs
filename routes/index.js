var express=require('express');
var router=express.Router();


router.get('/',function(req,res,next){
req.send('index pages');
});

module.exports=router;