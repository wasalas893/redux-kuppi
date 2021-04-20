import {REGISTER_USER,LOGIN_USER} from '../Actions/types';



const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null

    
}
export default function(state=initialState,action){

    const { type,payload }=action;
    switch(type){
        case REGISTER_USER:
            localStorage.setItem('token',payload.token);
            return{
                ...payload,
                isAuthenticated:true,
                loading:false
                
            } 
            break;

         

    }
    return state;
}