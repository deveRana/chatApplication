const express = require('express');

const Router  = express.Router();


// getting Database
require('../database/connection.js');

// Getting Chats Schema
const Chats = require('../model/chatSchema.js');

// Getting Messages Schema
const Messages = require('../model/messageSchema.js');



Router.post('/conversation/add' , async (req, res)=>{

    const senderId = req.body.senderId;

    const receiverId = req.body.receiverId;

    try{

        const chatExists = await Chats.findOne({ members: { $all : [ senderId , receiverId ] } })

        if(!chatExists){


            const newChats = new Chats({
                members : [ senderId , receiverId ]
            })

            const saveChats = await newChats.save();

            if(saveChats){
                res.status(200).json("New Chats Saved")
            }

        }



    }catch(err){
        console.log("conversation Error" ,err)
    }

})


Router.post('/conversation/get' , async (req ,res)=>{

    let senderId = req.body.senderId;
    let receiverId = req.body.receiverId;


    try{

        const getChats = await Chats.findOne({ members: { $all : [ senderId , receiverId ] } })
        
        res.status(200).json(getChats);



    }catch(err){
        console.log("Conversation Error" , err)
    }



})


Router.post('/message/add' , async (req ,res)=>{

    const {sender , conversationId , text} = req.body

    try{

        const getMessage = new Messages({senderId:sender , conversationId:conversationId , text:text})

        const messageSave = await getMessage.save();

        if(messageSave){
            res.status(200).json("Message Saved Successfully")
        }


    }catch(err){
        console.log("Messages Error",err)
    }


})

Router.get('/message/get/:id' , async (req, res)=>{

    const conversationId = req.params.id;

    try{

        const findMessages = await Messages.find({conversationId:conversationId})

        if(findMessages){
            res.status(200).json(findMessages);
        }

    }catch(err){
        console.log("Converation Error" , err)
    }

})

module.exports = Router;

