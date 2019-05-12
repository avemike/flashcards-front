import React from 'react';
import Flashcard from './Flashcard';
import LearningSummary from './LearningSummary';
import FlashcardsChoosement from './FlashcardsChoosement';
export default class App extends React.Component {
    render() {
        return (
            <div>
                <FlashcardsChoosement />
            </div>
        )
    }
}