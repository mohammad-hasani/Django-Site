import {
    PROFILE_REQUEST,
    LOGIN_FETCH_SUCCESS,
    PROFILE_FETCH_SUCCESS,
    PROFILE_FAILURE
} from "./types";

const initialState = {
    loading: false,
    error: ''
};

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case PROFILE_FETCH_SUCCESS:
            return {
                loading: false,
                error: ''
            };
        case PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };


        default:
            return state;
    }
};