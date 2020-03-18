import {combineReducers} from "redux";

import storyReducer from "./storyReducer";

const allReducers = combineReducers(
    {
        story: storyReducer
    }
);

export default allReducers