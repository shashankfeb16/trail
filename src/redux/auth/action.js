import axios from "axios";
import { LOGIN_ERROR, LOGIN_LODING, LOGIN_SUCCESS, LOGOUT } from "./action.types"



export const login = (data)=> (dispatch)=>{
    dispatch({type:LOGIN_LODING});
    axios.post("https://reqres.in/api/login",{
        email: data.email,
        password: data.password
    }).then((res)=>{
        dispatch({type:LOGIN_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch(({type:LOGIN_ERROR}))
    })

}

export const logout = ()=> ({type:LOGOUT})