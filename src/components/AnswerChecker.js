import "../style/AnswerChecker.css";
import React from 'react';

export default class AnswerChecker extends React.Component {
    state = {
        userAnswer: "",
        properValue: ""
    };

    checkUserAnswer = (event) => {
        this.isAnswerCorrect() ? this.setAnswerCorrect() : this.setAnswerIncorrect();

        console.log("Correct answers " + this.props.flashcard.correctAnswer);
        console.log("Bad answers " + this.props.flashcard.badAnswers);
    };


    isAnswerCorrect = () => {
        return this.state.userAnswer.toLowerCase() === this.props.flashcard.answer.toLowerCase();
    };

    setAnswerCorrect = () => {
        this.props.flashcard.correctAnswer += 1;
        this.setTextFrameStyle("properAnswer");
    }

    setAnswerIncorrect = () => {
        this.props.flashcard.badAnswers += 1;
        this.setTextFrameStyle("wrongAnswer");
        this.setState({properValue: this.props.flashcard.answer});
        document.getElementById(this.props.properValueId).hidden = false;

    }

    setTextFrameStyle = (className) => {
        document.getElementById("textButtonContainer").getElementsByTagName("textarea")[0].className = className;
    }

    render() {
        return (
            <div id="textButtonContainer">
                <div id={this.props.properValueId}>{this.state.properValue}</div>
                <textarea rows="2" cols="44"
                    onChange={e => this.setState({userAnswer:e.target.value})}></textarea>
                <button onClick={this.checkUserAnswer}>Sprawdź</button>
            </div>
        );
    }
}
