import React from "react";

import axios from "axios";

export default class FlashcardsList extends React.Component {
  state = {
    flashcards: []
  };
  handleFirstChange = event => {
    this.setState({ firstText: event.target.value });
  };
  handleSecondChange = event => {
    this.setState({ secondText: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const flashcard = {
      firstText: this.state.firstText,
      secondText: this.state.secondText
    };
    
    axios
      .post(`http://localhost:4000/api/flashcards`, flashcard)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  componentDidMount() {
    axios.get(`http://localhost:4000/api/flashcards`).then(res => {
      const flashcards = res.data;
      this.setState({ flashcards });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.flashcards.map(flashcard => (
            <li key="{flashcard.id}">{flashcard.firstText}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            FIrst:
            <input
              type="text"
              name="firstText"
              onChange={this.handleFirstChange.bind(this)}
            />
          </label>
          <label>
            Second:
            <input
              type="text"
              name="secondText"
              onChange={this.handleSecondChange.bind(this)}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
