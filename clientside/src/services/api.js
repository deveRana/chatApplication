import axios from 'axios';

const url = `http://localhost:5000`;

export const addUser = async (data)=>{

    try{

        return await axios.post(`${url}/addUser`, data)


    }catch(err){
        console.log("AddUSer Error" , err)
    }
}

export const getUser = async ()=>{

    try{

        const res = await axios.get(`${url}/getUsers`)

        return res.data;

    }catch(err){
        console.log("GEtUSer Error" , err)
    }

}

export const setConversation = async (data)=>{


    try{

        return await axios.post(`${url}/conversation/add` , data)

    }catch(err){
        console.log("setConversation Error" , err)
    }

}

export const getConveration = async (data)=>{

    try{

        const res = await axios.post(`${url}/conversation/get`, data)

        return res.data;

    }catch(err){
        console.log("Get Conversation ", err)
    }

}

export const addMessage = async (data)=>{

    try{

        return await axios.post(`${url}/message/add` , data)

    }catch(err){
        console.log("Add Message Error" , err)
    }


}


export const getMessages = async (id)=>{

    try{

        const res = await axios.get(`${url}/message/get/${id}`);

        return res.data;


    }catch(err){
        console.log("Get Message Error" , err)
    }

}