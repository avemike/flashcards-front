import React from 'react';
import axios from 'axios';
import FlashcardsChoosement from './FlashcardsChoosement';
import "../style/learning-module.css";
import { imgLogo } from './Flashcard.js'

export default class LearningSummary extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           correctAnswer: 0,
           badAnswers: 0,
           gotoFlashcardsChoosement: false
       };
    }

    jumpToFlashcardsChoosement = () => {
        this.setState({gotoFlashcardsChoosement: true});
    }

    render() {
        if (!this.state.gotoFlashcardsChoosement)
            return(
                <div className="card-test">
                    <img src={imgLogo.src} alt={imgLogo.alt} />
                    <h2>Twój wynik to:</h2>
                    <p>{this.props.correct} dobrych i {this.props.incorrect} złych odpowiedzi</p>
                    <button onClick={this.jumpToFlashcardsChoosement}>Powrót</button>
                </div>
            );
        else return(<FlashcardsChoosement/>);
    }
}