import {
    PROFILE_REQUEST,
    PROFILE_FETCH_SUCCESS,
    PROFILE_SEND_SUCCESS,
    PROFILE_FAILURE
} from "./types";

const initialState = {
    loading: false,
    data: '',
    error: ''
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case PROFILE_FETCH_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            };
        case PROFILE_SEND_SUCCESS:
            return {
                ...state,
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