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
    this.nextFlashcard = this.nextFlashcard.bind(this);
    this.updateCurrentFlashcard = this.updateCurrentFlashcard.bind(this);
    this.updateFlashcard = this.updateFlashcard.bind(this);
    this.getFlashcardsOfCategory = this.getFlashcardsOfCategory.bind(this);
    this.getNextFlashcard = this.getNextFlashcard.bind(this);

    this.gotFlashcardsNbr = -1;
    this.getNextFlashcard();
  }

  nextFlashcard = () => {
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

    axios.put("http://localhost:4000/api/flashcards/" + cardId, flashcardToUpdate, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem("userKey")
      }
    });
  };

  updateFlashcard = () => {
    const f = this.getNextFlashcard();
    this.setState({ f });
  };

  getFlashcardsOfCategory = () => {
    const categoryId = this.props.categories[0]._id;

    return axios.get(
      "http://localhost:4000/api/categories/" + categoryId + "/flashcards", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem("userKey")
        }
      })
      .then(res => {      
        this.setState({ 
          flashcards: res.data
        });
      });
  };

  getNextFlashcard = async () => {
    await this.getFlashcardsOfCategory();

    const amount = this.props.flashcardsAmount;
    let indeks = Math.floor(Math.random() * amount);

    const newFlashcard = this.state.flashcards.filter(f => f.correctAnswers < 3)[indeks];
    this.setState({
      flashcard: newFlashcard
    });
  };

  componentDidMount() {
    this.getFlashcardsOfCategory();
  }

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
