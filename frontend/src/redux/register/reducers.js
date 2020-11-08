import {
    REGISTER_REQUEST,
    LOGIN_FETCH_SUCCESS,
    REGISTER_SEND_SUCCESS,
    REGISTER_FAILURE
} from "./types";

const initialState = {
    loading: false,
    error: ''
};

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case REGISTER_SEND_SUCCESS:
            return {
                loading: false,
                error: ''
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };


        default:
            return state;
    }
};