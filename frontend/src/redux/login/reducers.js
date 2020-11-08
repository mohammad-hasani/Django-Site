import {
    LOGIN_REQUEST,
    LOGIN_SEND_SUCCESS,
    LOGOUT_SEND_SUCCESS,
    LOGIN_FAILURE
} from "./types";

const initialState = {
    loading: false,
    token: undefined,
    email: undefined,
    error: ''
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SEND_SUCCESS:
            return {
                loading: false,
                token: action.token,
                email: action.email,
                error: ''
            };
        case LOGOUT_SEND_SUCCESS:
            return {
                loading: false,
                token: action.token,
                email: action.email,
                error: ''
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};