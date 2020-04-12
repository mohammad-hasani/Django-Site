import {combineReducers} from "redux";

import {contactReducer} from "./contact/reducers";
import {loginReducer} from "./login/reducers";
import {registerReducer} from "./register/reducers";
import {profileReducer} from "./profile/reducers";
import {storyReducer} from "./story/reducers";


const rootReducer = combineReducers({
    contact: contactReducer,
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
    story: storyReducer
});

export default rootReducer