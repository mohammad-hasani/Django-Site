import {
    CONTACT_REQUEST,
    CONTACT_FETCH_SUCCESS,
    CONTACT_SEND_SUCCESS,
    CONTACT_FAILURE
} from "./types";

const initialState = {
    loading: false,
    data: [],
    message: '',
    error: ''
};

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case CONTACT_FETCH_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            };
        case CONTACT_SEND_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload,
                error: ''
            };
        case CONTACT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };


        default:
            return state;
    }
};