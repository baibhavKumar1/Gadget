import { GET_PRODUCTS_ERROR,GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS,ADD_PRODUCTS_ERROR,ADD_PRODUCTS_REQUEST,ADD_PRODUCTS_SUCCESS,EDIT_PRODUCTS_ERROR,EDIT_PRODUCTS_REQUEST,EDIT_PRODUCTS_SUCCESS,DELETE_PRODUCTS_ERROR,DELETE_PRODUCTS_REQUEST,DELETE_PRODUCTS_SUCCESS } from "./actionTypes";

const init = {
    isLoading:false,
    isError:false,
    data:[]
}

export const Reducer = (state=init, {type,payload})=>{
    switch(type){
        case GET_PRODUCTS_REQUEST: return {...state, isLoading:true};
        case GET_PRODUCTS_ERROR: return {...state, isLoading:false, isError:true};
        case GET_PRODUCTS_SUCCESS: return {...state, isLoading:false, isError:false, data:payload}

        case ADD_PRODUCTS_REQUEST: return {...state,isLoading:true};
        case ADD_PRODUCTS_ERROR: return {...state, isLoading:false, isError:true};
        case ADD_PRODUCTS_SUCCESS: return {...state, isLoading:false, isError:false, data:payload.data}

        case EDIT_PRODUCTS_REQUEST: return {...state,isLoading:true};
        case EDIT_PRODUCTS_ERROR: return {...state, isLoading:false, isError:true};
        case EDIT_PRODUCTS_SUCCESS: return {...state, isLoading:false, isError:false, data:payload.data}

        case DELETE_PRODUCTS_REQUEST: return {...state,isLoading:true};
        case DELETE_PRODUCTS_ERROR: return {...state, isLoading:false, isError:true};
        case DELETE_PRODUCTS_SUCCESS: return {...state, isLoading:false, isError:false, data:payload.data}
        default: return state
    }
}