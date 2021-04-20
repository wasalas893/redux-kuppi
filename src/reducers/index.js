import {combineReducers} from 'redux';

import registerData from './registerComponents';
import loginData from './loginComponents';



const rootReducer=combineReducers({
    registerDataForm:registerData,
    loginDataForm:loginData,
   
  

})

export default rootReducer;