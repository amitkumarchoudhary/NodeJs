var express=require('express');
var router=express.Router();


router.get('/tasks',function(req,res,next){
req.send('taks pages');
});

module.exports=router;