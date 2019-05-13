import "../style/Flashcard.css";
import React from "react";
import axios from "axios";
import AnswerChecker from "./AnswerChecker";
import LearningSummary from "./LearningSummary";

export const imgLogo = {
  src: process.env.PUBLIC_URL + "/img/icon-left-font-monochrome-black.png",
  alt: "logo"
};

export default class Flashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 200,
      flashcards: [],
      flashcard: {}
    };
    this.gotFlashcardsNbr = -1;
    this.getNextFlashcard();
  }

  //    var gotFlashcardsNbr = 0;

  nextFlashcard = () => {
    console.log(this.state.flashcard.correctAnswers);
    console.log(this.state.flashcard.badAnswers);

    this.updateCurrentFlashcard();

    this.getNextFlashcard();
  };

  updateCurrentFlashcard = () => {
    const cardId = this.state.flashcard._id;

    const flashcardToUpdate = {
      firstText: this.state.flashcard.firstText,
      secondText: this.state.flashcard.secondText,
      correctAnswers: this.state.flashcard.correctAnswers,
      badAnswers: this.state.flashcard.badAnswers
    };

    axios.put("http://localhost:4000/api/flashcards/" + cardId, flashcardToUpdate);
  };

  updateFlashcard = () => {
    const f = this.getNextFlashcard();
    this.setState({ f });
  };

  getFlashcardsOfCategory = () => {

    console.log(this.props.categories[0]._id);
    const categoryId = this.props.categories[0]._id;
    axios
      .get(
        "http://localhost:4000/api/categories/" + categoryId + "/flashcards")
      .then(res => {
        console.log("stat ");
        console.log(res.data);
        this.setState({
          flashcards: res.data
        });
        console.log("sss")
      // console.log(this.state.flashcards.length);

      });
      console.log(this.state.flashcards)

  };

  getNextFlashcard = async () => {
    await this.getFlashcardsOfCategory();

    console.log(this.props.flashcardsAmount);
    const amount = this.props.flashcardsAmount;
    let indeks = Math.floor(Math.random() * amount);
    console.log(this.state.flashcards.filter(f => f.correctAnswers < 3));
    const newFlashcard = this.state.flashcards.filter(f => f.correctAnswers < 3)[indeks];
    console.log("1");
    console.log(newFlashcard);
    this.setState({
      flashcard: newFlashcard
    });
    console.log("2");

    console.log(this.state.flashcard);

  };

  render() {
    if (
      this.state.status === 204 ||
      this.gotFlashcardsNbr === this.props.flashcardsAmount
      // this.state.flashcards.length === 0
    )
      return <LearningSummary />;
    if (this.state.status === 200)
      return (
        <div className="card">
          <div className="wrap">
            <p>Kategoria : {this.props.categories[0].name}</p>
            <img src={imgLogo.src} alt={imgLogo.alt} />
          </div>
          <h2>{this.state.flashcard.firstText}</h2>
          <AnswerChecker
            onChange={this.onTextareaChange}
            flashcard={this.state.flashcard}
          />
          <button onClick={this.nextFlashcard}>Dalej</button>
        </div>
      );
  }
}
