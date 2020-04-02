import {combineReducers} from "redux";

import {contactReducer} from "./contact/reducers";
import {loginReducer} from "./login/reducers";
import {registerReducer} from "./register/reducers";


const rootReducer = combineReducers({
    contact: contactReducer,
    login: loginReducer,
    register: registerReducer
});

export default rootReducer