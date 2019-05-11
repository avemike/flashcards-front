import "../style/Flashcard.css";
import React from 'react';
import axios from 'axios';
import AnswerChecker from './AnswerChecker';
import LearningSummary from './LearningSummary';

 export const imgLogo = {
    src: process.env.PUBLIC_URL + '/img/icon-left-font-monochrome-black.png',
    alt: 'logo'
};

export default class Flashcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 200,
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
            const status = res.status;
            this.setState({
                status: status,
                flashcard: newFlashcard
            });
        });
    }

    render() {
        if (this.state.status == 200) {
            return(
                <div className="card">
                    <div className="wrap">
                        <p>Kategoria : {this.state.flashcard.category}</p>
                        <img src={imgLogo.src} alt={imgLogo.alt} />
                    </div>
                    <h2>{this.state.flashcard.name}</h2>
                    <AnswerChecker onChange={this.onTextareaChange} flashcard = {this.state.flashcard}/>
                    <button onClick={this.nextFlashcard}>Dalej</button>
                </div>

            );
        } else if (this.state.status == 204) {
            return(<div><LearningSummary /> </div>);
        }
    }
}
