import "../style/AnswerChecker.css";
import React from "react";

export default class AnswerChecker extends React.Component {
  properValueId = "properValue";

  state = {
    userAnswer: ""
  };

  handleAnswerChange = event => {
    this.setState({ answer: event.target.value });
  };

  checkUserAnswer = event => {
    this.isAnswerCorrect()
      ? this.setAnswerCorrect()
      : this.setAnswerIncorrect();

    console.log("Correct answers " + this.props.flashcard.correctAnswers);
    console.log("Bad answers " + this.props.flashcard.badAnswers);
  };

  isAnswerCorrect = () => {
    return (
      this.state.answer.toLowerCase() ===
      this.props.flashcard.secondText.toLowerCase()
    );
  };

  setAnswerCorrect = () => {
    this.props.flashcard.correctAnswers += 1;
    this.setTextFrameStyle("properAnswer");
  };

  setAnswerIncorrect = () => {
    this.props.flashcard.badAnswers += 1;
    this.setTextFrameStyle("wrongAnswer");
  };

  setTextFrameStyle = className => {
    document
      .getElementById("textButtonContainer")
      .getElementsByTagName("textarea")[0].className = className;
  };

  render() {
    return (
      <div id="textButtonContainer">
        <div id={this.properValueId} />
        <textarea
          rows="2"
          cols="44"
          name="secondText"
          onChange={this.handleAnswerChange.bind(this)}
        />
        <button onClick={this.checkUserAnswer}>Sprawdź</button>
      </div>
    );
  }
}
