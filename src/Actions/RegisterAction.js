import {REGISTER_USER} from './types';
import axios from 'axios';


export const register=({name,email,password})=>async dispatch=>{

    const config={
        headers:{
        'Content-Type' : 'application/json'
        }
  }

  const body=JSON.stringify({ name,email,password});

    try{
        await axios.post('https://nodeapisunanda.herokuapp.com/api/users',body,config)
         .then(res=>{
           
            dispatch({
                type:REGISTER_USER,
                payload:res.data
            })
    })

    }catch(err){
        const errors=err.response.data.errors;
        console.log(errors);

    }

}

