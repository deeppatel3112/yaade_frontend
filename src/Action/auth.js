import {AUTH} from '../reducers/types'
import * as api from '../apis/index.js'

export const signin = (formData, history) => async (dispatch)=>{
    try {
        const {data} = await api.signIn(formData) 
        
        dispatch({type:AUTH,data})

        history.push('/');
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, history) => async (dispatch) =>{
    try {
        const {data} = await api.signUp(formData);
        console.log(data);
        dispatch({type:AUTH, data});

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const adminlogin = (formData, history) => async (dispatch)=>{
    try {
        const {data} = await api.adminLogin(formData);
        dispatch({type:AUTH,data});

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}