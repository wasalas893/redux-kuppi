import {LOGIN_USER,LOG_OUT} from './types';
import axios from 'axios';







export const login=({email,password})=>async dispatch=>{

    const config={
        headers:{
        'Content-Type' : 'application/json'
        }
  }

  const body=JSON.stringify({ email,password});

    try{
        await axios.post('https://nodeapisunanda.herokuapp.com/api/auth',body,config)
         .then(res=>{
             
            dispatch({
                type:LOGIN_USER,
                payload:res.data
            })
    })

    }catch(err){
        const errors=err.response.data.errors;
        console.log(errors);

    }

}

//logout 

export const logout=()=>dispatch=>{
    dispatch({
        type:LOG_OUT
    });

}



