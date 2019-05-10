// default reducer
// Note: You can remove this reducer and create your own reducer

import {
    FETCH_DATA,
    ADD_FLASHCARD,
    DELETE_FLASHCARD,
    EDIT_FLASHCARD
} from '../actions';
const defaultState = [{
        category: 'Jedzenie',
        word: 'Lody',
        translatedWord: 'blowjobs'
    },
    {
        category: 'Jedzenie1',
        word: 'Lody',
        translatedWord: 'blowjobs'
    },
    {
        category: 'Jedzenie2',
        word: 'Lody',
        translatedWord: 'blowjobs'
    },
    {
        category: 'Jedzenie3',
        word: 'Lody',
        translatedWord: 'blowjobs'
    }
]
export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return action.payload;
        case ADD_FLASHCARD:
            return [...state, action.payload]
        case DELETE_FLASHCARD:
            return state.filter((data, i) => i !== action.payload)
        case EDIT_FLASHCARD:
            return state.map((el, i) => i === action.payload.index ? action.payload.flashcard : el)
        default:
            return state;
    }
}