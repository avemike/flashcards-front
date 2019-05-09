import React from 'react';
import FlashcardsList from './components/FlashcardsList';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Flashcards</h1>
                <FlashcardsList />
            </div>
        )
    }
}