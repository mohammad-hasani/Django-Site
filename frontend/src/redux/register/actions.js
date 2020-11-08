import {Cookies} from "react-cookie";
import axios from 'axios'
import {
    REGISTER_REQUEST,
    REGISTER_SEND_SUCCESS,
    REGISTER_FAILURE
} from "./types";


import {SERVER_ADDR} from '../index';

const url = SERVER_ADDR + 'api/register';

export const Request = () => {
    return ({
        type: REGISTER_REQUEST
    })
};

const sendRegisterSuccess = () => {
    return ({
        type: REGISTER_SEND_SUCCESS
    })
};


const Failure = error => {
    return ({
        type: REGISTER_FAILURE,
        payload: error
    })
};


export const sendRegister = data => {
    return (dispatch) => {
        dispatch(Request);
        // const headers = {'headers': {'Authorization': 'Token sinaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}};
        axios.post(url, data)
            .then(response => {
                dispatch(sendRegisterSuccess())
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(Failure(errorMsg))
            })
    }
};