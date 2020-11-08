import {Cookies} from "react-cookie";
import axios from 'axios'
import {
    LOGIN_REQUEST,
    LOGIN_SEND_SUCCESS,
    LOGOUT_SEND_SUCCESS,
    LOGIN_FAILURE
} from "./types";

import {getTokenHeader} from "../../scripts/general/helper";

import {SERVER_ADDR} from '../index'

const url_login = SERVER_ADDR + 'api/login';
const url_logout = SERVER_ADDR + 'api/logout';


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

const sendLogoutSuccess = (token, email) => {
    return ({
        type: LOGOUT_SEND_SUCCESS,
        payload: undefined,
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
        axios.post(url_login, data)
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

export const sendLogout = () => {
    return (dispatch) => {
        dispatch(Request);
        axios.get(url_logout, getTokenHeader())
            .then(response => {
                const email = undefined;
                const token = undefined;

                const cookie = new Cookies();
                cookie.set('email', email, {path: '/'});
                cookie.set('token', token, {path: '/'});

                dispatch(sendLogoutSuccess(token, email))
            })
            .catch(error => {
                const errorMsg = error.message;
                console.log(errorMsg)
                dispatch(Failure(errorMsg))
            })
    }
};