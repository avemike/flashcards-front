export const FETCH_DATA = 'fetch_data';
export const ADD_FLASHCARD = 'add_flashcard';
export const DELETE_FLASHCARD = 'delete_flashcard'
export const EDIT_FLASHCARD = 'edit_flashcard'

// default function to display redux action format
export function initFlashcardsState() {
    const flashcards = [{
        category: 'Jedzenie',
        word: 'Lody',
        translatedWord: 'ice cream'
    }]

    // action object format being return to a reducer
    return {
        type: FETCH_DATA,
        payload: flashcards
    }
}

export function addFlashcard(flashcard) {

    // action object format being return to a reducer
    return {
        type: ADD_FLASHCARD,
        payload: flashcard
    }
}
export function deleteFlashcard(index) {

    // action object format being return to a reducer
    return {
        type: DELETE_FLASHCARD,
        payload: index
    }
}

export function editFlashcard(flashcard, index) {
    return {
        type: EDIT_FLASHCARD,
        payload: {
            flashcard,
            index
        }
    }
}