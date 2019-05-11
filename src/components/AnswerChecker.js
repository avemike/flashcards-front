import React from 'react';

export default class AnswerChecker extends React.Component {
    state = {
        userAnswer: ""
    };

    checkUserAnswer = (event) => {
        this.isAnswerCorrect() ? this.setAnswerCorrect() : this.setAnswerIncorrect();

        console.log("Correct answers " + this.props.flashcard.correctAnswer);
        console.log("Bad answers " + this.props.flashcard.badAnswers);
    };


    isAnswerCorrect = () => {
        return this.state.userAnswer === this.props.flashcard.answer;
    };

    setAnswerCorrect = () => {
        this.props.flashcard.correctAnswer += 1; 
    }

    setAnswerIncorrect = () => {
        this.props.flashcard.badAnswers += 1;
    }

    render() {
        return (
            <div className="textButtonContainer">
                <div id="properValue"></div>
                <textarea rows="2" cols="44"
                    onChange={e => this.setState({userAnswer:e.target.value})}></textarea>
                <button onClick={this.checkUserAnswer}>{this.props.name}</button>
            </div>
        );
    }
}
