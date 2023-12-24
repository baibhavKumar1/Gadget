import { GET_PRODUCTS_ERROR,GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS,ADD_PRODUCTS_ERROR,ADD_PRODUCTS_REQUEST,ADD_PRODUCTS_SUCCESS, EDIT_PRODUCTS_REQUEST } from "./actionTypes";

import axios from 'axios';

export const Getproduct=(data)=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_REQUEST})
  await axios.get('https://gadgets-ohok.onrender.com/products/',{
    headers:{
        Authorization: `Bearer ${data}`
    }
  })
  .then((res)=>{
    dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
    console.log(res)
  })
  .catch((err)=>{
    dispatch({type:GET_PRODUCTS_ERROR})
    console.log(err)
  })
}

export const Addproduct=(data)=>async(dispatch)=>{
    dispatch({type:ADD_PRODUCTS_REQUEST})
    await axios.post('https://gadgets-ohok.onrender.com/products/add',data,{
        headers:{
            Authorization:`Bearer ${data.token}`
        }
    })
    .then((res)=>{
        dispatch({type:ADD_PRODUCTS_SUCCESS,payload:res.data})
        dispatch(Getproduct(data.token))
    })
    .catch((err)=>{
        dispatch({type:ADD_PRODUCTS_ERROR})
        console.log(err)
    })
}

export const Editproduct = (data)=>async(dispatch)=>{
    dispatch({type:EDIT_PRODUCTS_REQUEST})
    await axios.patch(`https://gadgets-ohok.onrender.com/products/update/${data.id}`,data,{
        headers:{
            Authorization:`Bearer ${data.token}`
        }
    })
    .then((res)=>{
        dispatch({type:ADD_PRODUCTS_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:ADD_PRODUCTS_ERROR})
        console.log(err)
    })
}

export const Deleteproduct = (data)=>async(dispatch)=>{
    dispatch({type:EDIT_PRODUCTS_REQUEST})
    await axios.delete(`https://gadgets-ohok.onrender.com/products/delete/${data.id}`,{
        headers:{
            Authorization:`Bearer ${data.token}`
        }
    })
    .then((res)=>{
        dispatch({type:ADD_PRODUCTS_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:ADD_PRODUCTS_ERROR})
        console.log(err)
    })
}