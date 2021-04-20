import{ LOGIN_USER,LOG_OUT} from '../Actions/types';

const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    loading: true,
    user: null
    
    
}

export default function(state=initialState,action){
    const { type,payload }=action;
    switch(type){
        case LOGIN_USER:
            localStorage.setItem('token',payload.token);
            return{
                ...payload,
                isAuthenticated:true,
                loading:false
                
            }
        case LOG_OUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false
            }
        default:
            return state;    


    }
  
}