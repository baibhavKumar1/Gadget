import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes";
import axios from 'axios';

export const Register = (userData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    await axios.post('https://gadgets-ohok.onrender.com/users/register', userData)
        .then((res) => {
            dispatch({ type: REGISTER_SUCCESS,payload:res })
            console.log(res.data.message)
        })
        .catch((err) => {
            dispatch({ type: REGISTER_ERROR })
            console.log(err)
        })
}

export const Login=(userData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    console.log(userData)
    await axios.post('https://gadgets-ohok.onrender.com/users/login',userData)
    .then((res)=>{
        dispatch({type:LOGIN_SUCCESS,payload:res})
        localStorage.setItem('token',JSON.stringify(res.data.token))
        console.log(res)
    })
    .catch((err)=>{
        dispatch({type:LOGIN_ERROR})
        console.log(err)
    })
} 