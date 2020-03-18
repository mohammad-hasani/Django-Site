import {GET_STORY} from '../actions/storyAction'

function storyReducer(state=null, action) {
    switch (action.type) {
        case GET_STORY:
            window.alert('asdf');
            break;
    }
    return state;
}

export default storyReducer