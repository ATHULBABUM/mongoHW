var express = require('express');
var addRouter = express.Router();

var {studentModel}=require('../models/studentModel')

var authors = [{ name: "J.K. Rowling", country: "England", Books: 20, image: 'rowling.jpeg' },
{ name: "J. D. Salinger", country: "America", Books: 12, image: 'salinger.jpg' },
{ name: "Chetan Bhagat", country: "India", Books: 2, image: 'chetan.jpg' },
{ name: "R. K. Narayan", country: "India", Books: 10, image: 'rk.jpg' },
{ name: "Ruskin Bond", country: "India", Books: 25, image: 'ruskin.jpg' },
{ name: "Arundhati Roy", country: "India", Books: 50, image: 'aru.jpg' }];

function route(nav) {

    addRouter.route('/')
    .post((req,res)=>{
        var student=new studentModel(req.body);
        student.save((error,data)=>{
            if(error){
                throw error;
                res.json({"status":"error"});
            }else{
                res.json({"status":"success"})
            }
        });

        
    })


    return addRouter;
}
module.exports = route;