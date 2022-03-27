import { SET_SPIN, SET_NIGHT, SET_FIXED } from "./ui.types";

const initialState = {
    spin: false,
    night: true,
    tiltIsFixed: false,
}

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SPIN:
            return {
                ...state,
                spin: action.payload
            }
        case SET_NIGHT:
            return {
                ...state,
                night: action.payload
            }
        case SET_FIXED:
            return {
                ...state,
                tiltIsFixed: action.payload
            }
        default:
            return state;
    }
}