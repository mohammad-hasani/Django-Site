import axios from 'axios'
import {
    CONTACT_REQUEST,
    CONTACT_FETCH_SUCCESS,
    CONTACT_SEND_SUCCESS,
    CONTACT_FAILURE
} from "./types";

import {getTokenHeader} from "../../scripts/general/helper";
import {SERVER_ADDR} from '../index'


const url = SERVER_ADDR + 'api/contactinfo';

export const Request = () => {
    return ({
        type: CONTACT_REQUEST
    })
};

const fetchContactInfoSuccess = data => {
    return ({
        type: CONTACT_FETCH_SUCCESS,
        payload: data
    })
};

const sendContactMessageSuccess = data => {
    return ({
        type: CONTACT_SEND_SUCCESS,
        payload: data
    })
};


const Failure = error => {
    return ({
        type: CONTACT_FAILURE,
        payload: error
    })
};

export const fetchContactInfo = () => {
    return (dispatch) => {
        dispatch(Request);
        axios.get(url, getTokenHeader())
            .then(response => {
                const data = response.data;
                dispatch(fetchContactInfoSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(Failure(errorMsg))
            })
    }
};



export const sendContactInfo = data => {
    return (dispatch) => {
        dispatch(Request);
        axios.post(url, data, getTokenHeader())
            .then(response => {
                const data = response.data;
                dispatch(sendContactMessageSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(Failure(errorMsg))
            })
    }
};