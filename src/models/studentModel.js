var mongoose=require("mongoose");
var studentModel=mongoose.model('students',{
    firstname:"string",
    rollno:"number",
    admno:"number",
college:"string",
})
module.exports={studentModel}