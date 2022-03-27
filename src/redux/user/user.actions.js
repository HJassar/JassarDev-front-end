import { SET_USER, SET_UNAUTHENTICATED,  } from "./user.types";

import axios from 'axios';
import decode from "jwt-decode";

export const setToken = (accessToken) => dispatch => {
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common['Authorization'] = "Bearer " + accessToken
    const decoded = decode(accessToken);

    dispatch({ type: SET_USER, payload: { ...decoded, accessToken } })
}

export const getProfile = (username) => async dispatch => {
    try {
        const res = await axios.get('/users/' + username);
        dispatch({ type: SET_USER, payload: {...res.data, loaded:true} });
    } catch (err) {
        console.log(err);
    }
}

export const logout = () => dispatch => {
    dispatch({ type: SET_UNAUTHENTICATED })
    delete axios.defaults.headers.common['Authorization']
    localStorage.removeItem('accessToken')
}