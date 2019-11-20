var express = require('express');
var searchRouter=express.Router();


function route(nav){


    searchRouter.route("/")
    .get((req,res)=>{
        res.render('search.ejs',{nav,title:'LogIn'});
    });


    searchRouter.route('/add')
    .post((req,res)=>{

        console.log(req.body); 
    }
    )
    return searchRouter;
}
module.exports=route;
