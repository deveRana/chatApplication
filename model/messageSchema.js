const Mongoose = require('mongoose');

const messageSchema = Mongoose.Schema({

    conversationId : {
        type : String,
        required : true
    },

    senderId : {
        type : String,
        required : true
    },

    text : {
        type : String,
        required : true
    },


} , { timeStamps : true } );

const Messages = Mongoose.model('Messages' , messageSchema);

module.exports = Messages;
