import "../style/Flashcard.css";
import React from 'react';
import axios from 'axios';
import AnswerChecker from './AnswerChecker';

const imgLogo = {
    src: process.env.PUBLIC_URL + '/img/icon-left-font-monochrome-black.png',
    alt: 'logo'
};

export default class Flashcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcard: {}
        };
        this.getNextFlashcard();
    }

    nextFlashcard = () => {
        this.updateCurrentFlashcard();
        this.getNextFlashcard(); //in future - cookie as parameter
    }

    updateCurrentFlashcard = () => {
//    TODO check on server
        axios.post("http://localhost:4000/api/flashcards/updateStatistics", this.props.flashcard );
    }

    updateFlashcard = () => {
        const f = this.getNextFlashcard();
        this.setState({f});
    }

    getNextFlashcard = () => {
        axios.get("http://localhost:4000/learning/nextFlashcard")
        .then(res => {
            const newFlashcard = res.data;
            this.setState({flashcard: newFlashcard});
        });
    }

    render() {
        return(
            <div className="card">
                <div className="wrap">
                    <h2>Kategoria : {this.state.flashcard.category}</h2>
                    <img src={imgLogo.src} alt={imgLogo.alt} />
                </div>
                <p>{this.state.flashcard.name}</p>
                <AnswerChecker onChange={this.onTextareaChange} flashcard = {this.state.flashcard}/>
                <button onClick={this.nextFlashcard}>Dalej</button>
            </div>

        );
    }
}
