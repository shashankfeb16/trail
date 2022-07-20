import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./action.types";
import axios from "axios"


export const getBooks = (params)=> (dispatch)=>{
    dispatch({type:GET_BOOKS_REQUEST});
    axios.get("http://localhost:8080/books",params).then((res)=>{
        dispatch({type:GET_BOOKS_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:GET_BOOKS_FAILURE})
    })
}