import React, { Component } from "react";
import axios from "axios";

export default class EditFlashcardModal extends Component {
  constructor(props) {
    super(props);
    this.state = { categoryId: "", word: "", translatedWord: "" };

    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleTranslatedWordChange = this.handleTranslatedWordChange.bind(
      this
    );
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCategoryChange(event) {
    const categoryId = this.props.categories
      .filter(c => c.name === event.target.value)
      .map(cat => cat._id)[0];
    this.setState({ categoryId: categoryId });
  }
  handleTranslatedWordChange(event) {
    this.setState({ translatedWord: event.target.value });
  }
  handleWordChange(event) {
    this.setState({ word: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newFlashcard = {
      firstText: this.state.word,
      secondText: this.state.translatedWord
    };
    axios
      .post(`http://localhost:4000/api/flashcards`, newFlashcard, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("userKey")
        }
      })
      .then(res => {
        axios.post(
          "http://localhost:4000/api/flashcards/" +
            res.data._id +
            "/categories/" +
            this.state.categoryId,
          {},
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "x-auth-token": localStorage.getItem("userKey")
            }
          }
        );
      });
  }
  render() {
    return (
      <div
        className="modal fade"
        id={"addFlashcard"}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Dodaj fiszkę
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form onSubmit={this.handleSubmit}>
                <label>
                  Kategoria:
                  <select onChange={this.handleCategoryChange}>
                    <option>wybierz</option>
                    {this.props.categories.map(e => {
                      return <option>{e.name}</option>;
                    })}
                  </select>
                </label>
                <label>
                  Słowo:
                  <input
                    type="text"
                    value={this.state.word}
                    onChange={this.handleWordChange}
                  />
                </label>

                <label>
                  Przetłumaczone słowo:
                  <input
                    type="text"
                    value={this.state.translatedWord}
                    onChange={this.handleTranslatedWordChange}
                  />
                </label>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Anuluj
              </button>
              <button
                type="button"
                data-dismiss="modal"
                onClick={e => this.handleSubmit(e)}
                class="btn btn-primary"
              >
                Dodaj fiszkę
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
