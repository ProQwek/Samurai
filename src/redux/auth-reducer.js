import { useNavigate } from "react-router-dom";
import { stopSubmit } from "redux-form";
import { HeaderAPI } from "../api/api";

const SET_USER_DATA='samurai -network/auth/SET_USER_DATA'

let initialState = {


    
      userid: null,
      email: null,
      login: null,
      isAuth:false,

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: 

            return{
                ...state,
                ...action.payload,
                
                }
            
        default: 
            return state;
        
    }
}

export const setAuthUserData=(userId,email,login,isAuth)=> ({type: SET_USER_DATA, payload:{userId,email,login,isAuth}});
export default authReducer;

export const getAth=()=>{
    return async (dispatch)=>{
     let data = await HeaderAPI.getAth()
            if(data.resultCode ===0){
                let {id,login,email}= data.data;
            dispatch(setAuthUserData(id,email,login,true));
            }
       } 
};
export const login=(email,password,remeberMe)=>{
    return async (dispatch)=>{
        
       let response = await HeaderAPI.login(email,password,remeberMe)
            if(response.data.resultCode ===0){
               dispatch(getAth())
            }  else{
                let message = response.data.messages.length > 0 ? response.data.messages[0] :"some error"
                dispatch(stopSubmit("login",{_error: message}))
            }
       }
};
export const logout=()=>{
    return async (dispatch)=>{
       let data = await HeaderAPI.logout()
            if(data.resultCode ===0){
                dispatch(setAuthUserData(null,null,null,false));         
            }
}};