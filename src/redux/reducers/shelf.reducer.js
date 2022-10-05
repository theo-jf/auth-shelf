// SHELF REDUCER IN HERE
import { combineReducers } from 'redux';

const shelf = (state = [], action) => {
    switch (action.type) {
        case 'SET_SHELF':
            return action.payload
    }
    return state
}

export default combineReducers({
    shelf
  });