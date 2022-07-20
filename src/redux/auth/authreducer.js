import { LOGIN_ERROR, LOGIN_LODING, LOGIN_SUCCESS, LOGOUT } from "./action.types"

const initialState={
    isAuth: false,
    isLoading: false,
    isError: false,
    token: ""
}


export const authReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_LODING:{
            return{...state,isLoading:true,isError:false}
        }
        case LOGIN_SUCCESS:{
            return{...state,isLoading:false,isError:false,isAuth:true,token:payload}
        }
        case LOGIN_ERROR:{
            return {...state,isLoading:false,isError:true}
        }
        case LOGOUT:{
            return{...state,isAuth:false,token:""}
        }
        default:{
            return state
        }
    }
}