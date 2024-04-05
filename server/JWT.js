const jsonwebtoken = require("jsonwebtoken");
require('dotenv').config();
const Student = require('./model/Student')
const createTokens = (Student)=>{
    const accessToken = jsonwebtoken.sign({
        email:Student.email,
        id:Student._id
    },
    process.env.ACCESS_TOKEN_SECRET
    );

    return accessToken;
}

// middleware function that runs before any request

const validateTokenStudent =async (req,res,next)=>{
    const accessToken = req.cookies["access-token"];
    console.log('cookie value',accessToken)
    if(!accessToken) return res.status(400).json({error:"Student not authenticated"});
    try{
        const validToken = jsonwebtoken.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);
        if(validToken){
            console.log('validtoken value is' ,validToken)
            const studentData = await Student.findOne({email:validToken.email}).select({
                password:0
            });
            console.log(studentData)
            req.authenticated = true;
            req.Student=studentData;
            req.token=accessToken;
            return next();
        }
        res.send('heelo')
    }catch(err){
        res.status(400).json({error:err.message})
    }
    console.log('hi')
    return next();
}
const validateTokenMentor =async (req,res,next)=>{
    const accessToken = req.cookies["access-token"];
    console.log('cookie value',accessToken) 
    if(!accessToken) return res.status(400).json({error:"Mentor not authenticated"});
    try{
        const validToken = jsonwebtoken.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);
        if(validToken){
            console.log('validtoken value is' ,validToken)
            const MentorData = await Mentor.findOne({email:validToken.email}).select({
                password:0
            });
            req.authenticated = true;
            req.Mentor=MentorData;
            req.token=accessToken;
            return next();
        }
    }catch(err){
        res.status(400).send("invalid token")
    }
    console.log('hi')
    return next();
}

module.exports = {createTokens,validateTokenStudent,validateTokenMentor}