import axios from 'axios'
import {
    STORY_REQUEST,
    STORY_TITLES_FETCH_SUCCESS,
    STORY_FETCH_SUCCESS,
    STORY_FAILURE
} from "./types";

import {getTokenHeader, getEmail} from "../../scripts/general/helper";

import {SERVER_ADDR} from '../index';

const url_titles = SERVER_ADDR + 'api/story/titles';
const url_story = SERVER_ADDR + 'api/story';


export const Request = () => {
    return ({
        type: STORY_REQUEST
    })
};

const fetchStoryTitlesSuccess = (data) => {
    return ({
        type: STORY_TITLES_FETCH_SUCCESS,
        payload: data
    })
};

const fetchStorySuccess = (data) => {
    return ({
        type: STORY_FETCH_SUCCESS,
        payload: data
    })
};

const Failure = error => {
    return ({
        type: STORY_FAILURE,
        payload: error
    })
};


export const fetchTitles = data => {
    return (dispatch) => {
        dispatch(Request);
        const searchData = {params: data};
        axios.get(url_titles, searchData)
            .then(response => {
                const data = response.data;
                dispatch(fetchStoryTitlesSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(Failure(errorMsg))
            })
    }
};


export const fetchStory = data => {
    return (dispatch) => {
        dispatch(Request);
        const searchData = {params: data};
        axios.get(url_story, searchData)
            .then(response => {
                const data = response.data;
                dispatch(fetchStorySuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(Failure(errorMsg))
            })
    }
};
