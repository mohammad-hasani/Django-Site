import {
    STORY_REQUEST,
    STORY_TITLES_FETCH_SUCCESS,
    STORY_FETCH_SUCCESS,
    STORY_FAILURE
} from "./types";

const initialState = {
    loading: false,
    titles: '',
    story: '',
    error: ''
};

export const storyReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORY_REQUEST:
            return {
                ...state,
                loading: true
            };
        case STORY_TITLES_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                titles: action.payload,
                error: ''
            };
        case STORY_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                story: action.payload,
                error: ''
            };
        case STORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };


        default:
            return state;
    }
};