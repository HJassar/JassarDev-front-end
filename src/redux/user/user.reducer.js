
import { SET_AUTHENTICATED, SET_USER, SET_UNAUTHENTICATED, LOADING_USER } from "./user.types";

import decode from "jwt-decode"

// 🍪
const accessToken = localStorage.getItem('accessToken') || ''
const decoded = !!accessToken ? decode(accessToken) : [];
const tokenIsValid = !!decoded && decoded.exp * 1000 >= Date.now();

const initialState = {
    loaded: false,
    isAuthenticated: tokenIsValid,
    accessToken,
    ...decoded
    // displayName, email, roles, isVerified 👉 No need to add this to the initial state
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: true
            }
        case SET_UNAUTHENTICATED:
            return {
                isAuthenticated: false
            };
        case SET_USER:
            return {
                ...state,
                isAuthenticated: true,
                ...action.payload
            }
        case LOADING_USER:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}