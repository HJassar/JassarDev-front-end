import { SET_SPIN, SET_NIGHT, SET_FIXED } from "./ui.types";

export const switchSpin = spin => async dispatch => {
    dispatch({ type: SET_SPIN, payload: !spin });
}

export const switchNight = night => async dispatch => {
    dispatch({ type: SET_NIGHT, payload: !night });
}

export const fixTilt = () => async dispatch => {
    dispatch({ type: SET_FIXED, payload: true });
}