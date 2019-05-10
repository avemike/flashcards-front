import React from 'react';
import Flashcard from './Flashcard'


export const Flashcards = [
    {category: "Jedzenie",
    name: "Jabłko",
    answer: "Apple",
    correctAnswer: 5,
    badAnswers: 2}, 
    {category: "Jedzenie",
    name: "Lody",
    answer: "Ice cream",
    correctAnswer: 6,
    badAnswers: 1}, 
    {category: "Jedzenie",
    name: "Chleb",
    answer: "Bread",
    correctAnswer: 2,
    badAnswers: 6}, 
    {category: "Jedzenie",
    name: "Pomarańcza",
    answer: "Orange",
    correctAnswer: 3,
    badAnswers: 4}
];

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Flashcard flashcard = {Flashcards[0]} />
            </div>
        )
    }
}