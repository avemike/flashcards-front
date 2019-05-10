import {
    combineReducers
} from 'redux';

// calling the default reducer to create a link
import flashcardsReducer from './flashcardsReducer';

const rootReducers = combineReducers({
    // add reducer files references here
    flashcards: flashcardsReducer
});

export default rootReducers;