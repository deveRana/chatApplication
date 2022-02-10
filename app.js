const express =  require('express');
const dotenv =  require('dotenv');
const cors   = require('cors');
const bodyParser = require('body-parser');


const app = express()


app.use(cors());
app.use(bodyParser.json({ extended : true }));
app.use(bodyParser.urlencoded({ extended : true }));


app.use(express.json());

// Gettting Config File
dotenv.config({ 'path' : './config.env' })
 

// Getting Router
app.use(require('./router/userRouter.js'))

// Getting Chats Router
app.use(require('./router/chatsRouter.js'))

if(process.env.NODE_ENV == "production"){
    
    App.use(express.static('clientside/build'));

}

const Port = process.env.PORT;

app.listen(Port , ()=>{
    console.log(`Server is Running at ${Port}`);
})
 