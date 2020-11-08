import axios from 'axios'
import {
    PROFILE_REQUEST,
    PROFILE_FETCH_SUCCESS,
    PROFILE_SEND_SUCCESS,
    PROFILE_FAILURE
} from "./types";

import {getTokenHeader, getEmail} from "../../scripts/general/helper";

import {SERVER_ADDR} from '../index';

const url = SERVER_ADDR + 'api/profile';

export const Request = () => {
    return ({
        type: PROFILE_REQUEST
    })
};

const fetchProfileSuccess = (data) => {
    return ({
        type: PROFILE_FETCH_SUCCESS,
        payload: data
    })
};

const sendProfileSuccess = () => {
    return ({
        type: PROFILE_SEND_SUCCESS
    })
};


const Failure = error => {
    return ({
        type: PROFILE_FAILURE,
        payload: error
    })
};


export const fetchProfile = () => {
    return (dispatch) => {
        dispatch(Request);
        const data = {params: getEmail()};
        const dataAndHeaders = getTokenHeader(data);
        axios.get(url, dataAndHeaders)
            .then(response => {
                const data = response.data;
                dispatch(fetchProfileSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(Failure(errorMsg))
            })
    }
};


export const sendProfile = data => {
    return (dispatch) => {
        dispatch(Request);
        axios.post(url, data, getTokenHeader())
            .then(response => {
                dispatch(sendProfileSuccess())
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(Failure(errorMsg))
            })
    }
};

