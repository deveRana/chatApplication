const express = require('express');

const Router = express.Router();

// getting Database
require('../database/connection');

// Getting UserSchema 

const User = require('../model/userSchema');


Router.post('/addUser' , async (req , res)=>{

    const {email , name , googleId , imageUrl} = req.body;

    try{

        if(!email || !name || !googleId || !imageUrl){
            res.status(404).send("Something is Missing")
        }
        else{

            const UserExist = await User.findOne({googleId});

            if(UserExist){
                console.log("User Exist");
            }
            else{

                const user = new User({ email:email , name:name , googleId:googleId , imageUrl:imageUrl })
                const userRegister = user.save();

                if(userRegister){
                    console.log("User Register Succesfully");
                }

            }


        }

    }catch(err){
        console.log("Add User Error" ,err)
    }

})

Router.get('/getUsers' , async (req ,res)=>{

    try{
        const allUsers = await User.find();

        res.status(200).send(allUsers);

    }catch(err){
        console.log("Get Users Errorr" , err)
    }

})

module.exports = Router;
