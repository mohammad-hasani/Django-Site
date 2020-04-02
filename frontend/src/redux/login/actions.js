import {Cookies} from "react-cookie";
import axios from 'axios'
import {
    LOGIN_REQUEST,
    LOGIN_SEND_SUCCESS,
    LOGIN_FAILURE
} from "./types";


import {SERVER_ADDR} from '../index'

const url = SERVER_ADDR + 'api/login';

export const Request = () => {
    return ({
        type: LOGIN_REQUEST
    })
};

const sendLoginSuccess = (token, email) => {
    return ({
        type: LOGIN_SEND_SUCCESS,
        token: token,
        email: email
    })
};


const Failure = error => {
    return ({
        type: LOGIN_FAILURE,
        payload: error
    })
};


export const sendLogin = data => {
    return (dispatch) => {
        dispatch(Request);
        axios.post(url, data)
            .then(response => {
                const email = data.email;
                const token = response.data.token;

                const cookie = new Cookies();
                cookie.set('email', email, {path: '/'});
                cookie.set('token', token, {path: '/'});

                dispatch(sendLoginSuccess(token, email))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(Failure(errorMsg))
            })
    }
};