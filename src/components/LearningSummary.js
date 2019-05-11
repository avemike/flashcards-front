import React from 'react';
import axios from 'axios';
import { imgLogo } from './Flashcard.js'

export default class LearningSummary extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           correctAnswer: 0,
           badAnswers: 0
       };
       this.getCorrectAnswer();
    }

    getCorrectAnswer = () => {
        axios.get("http://localhost:4000/learning/learningResults")
        .then(res => {
            const correctAnswer = res.data.correctAnswer;
            this.setState({
                correctAnswer: res.data.correctAnswer,
                badAnswers: res.data.badAnswers
            });
        });
    }

    render() {
        return(
            <div className="card">
                <img src={imgLogo.src} alt={imgLogo.alt} />
                <h2>Twój wynik to:</h2>
                <p>{this.state.correctAnswer} dobrych i {this.state.badAnswers} złych odpowiedzi</p>
                <button>Powrót</button>
            </div>
        );
    }
}