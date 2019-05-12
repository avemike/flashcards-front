import React from 'react';
import axios from 'axios';
import AnswerChecker from './AnswerChecker';
import LearningSummary from './LearningSummary';
import "../style/learning-module.css";

 export const imgLogo = {
    src: process.env.PUBLIC_URL + '/img/icon-left-font-monochrome-black.png',
    alt: 'logo'
};

export default class Flashcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 200,
            flashcard: {
                category: "Jedzenie",
                name: "Jabłko",
                answer: "Apple",
                correctAnswer: 3,
                badAnswers:2
            }
        };
        this.gotFlashcardsNbr = -1;
        this.getNextFlashcard();
    }

    properValueId = "properValue";
    textButtonContainerId = "textButtonContainer"

    nextFlashcard = () => {
        this.hideAnswer();
        this.updateCurrentFlashcard();
        this.getNextFlashcard(); //in future - cookie as parameter
    }

    hideAnswer = () => {
        document.getElementById(this.properValueId).hidden = true;
        const answerTexArea = document.getElementById(this.textButtonContainerId).getElementsByTagName("textarea")[0];
        answerTexArea.className = "";
        answerTexArea.value = "";
    }

    updateCurrentFlashcard = () => {
//    TODO check on server
        axios.post("http://localhost:4000/api/flashcards/updateStatistics", {
            flashcard: this.props.flashcard,
        });
    }

    updateFlashcard = () => {
        const f = this.getNextFlashcard();
        this.setState({f});
    }

    getNextFlashcard = () => {
        axios.get("http://localhost:4000/learning/nextFlashcard", {
           params: { categories: this.props.categories.join("&") }
        }).then(res => {
            const newFlashcard = res.data;
            const status = res.status;
            this.gotFlashcardsNbr += 1;
            this.setState({
                status: status,
                flashcard: newFlashcard
            });
        });
    }

    render() {
        if (this.state.status === 204 || this.gotFlashcardsNbr === this.props.flashcardsAmount)
            return(<LearningSummary />);
        if (this.state.status === 200)
            return(
                <div className="card">
                    <div className="wrap">
                        <p>Kategoria : {this.state.flashcard.category}</p>
                        <img src={imgLogo.src} alt={imgLogo.alt} />
                    </div>
                    <h2>{this.state.flashcard.name}</h2>
                    <AnswerChecker flashcard = {this.state.flashcard} properValueId = {this.properValueId} textButtonContainerId = {this.textButtonContainerId} />
                    <button onClick={this.nextFlashcard}>Dalej</button>
                </div>

            );
    }
}
