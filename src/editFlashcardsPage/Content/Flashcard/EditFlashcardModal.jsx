import React, { Component } from "react";
import axios from "axios";

export default class EditFlashcardModal extends Component {
  constructor(props) {
    super(props);
    this.state = { oldCategoryId: "", categoryId: "", word: "", translatedWord: "" };

    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleTranslatedWordChange = this.handleTranslatedWordChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  getFlashcardCategoryId() {
    return axios.get('http://localhost:4000/api/flashcards/' + this.props.flashcard._id + '/categories', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("userKey")
        }
    })
    .then(res => {
            this.setState({
                oldCategoryId: res.data[0]._id
            })
        
    })
}

  deleteOldRelation = async (cardId) => {
    await this.getFlashcardCategoryId();
    axios.delete(`http://localhost:4000/api/flashcards/` + cardId + "/categories/" + this.state.oldCategoryId, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem("userKey")
        }
    });

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

    const editFlashcard = {
      firstText: this.state.word || this.props.flashcard.firstText,
      secondText: this.state.translatedWord || this.props.flashcard.secondText,
      correctAnswers: this.props.flashcard.correctAnswers,
      badAnswers: this.props.flashcard.badAnswers

    };
    console.log(editFlashcard);
    axios
      .put(`http://localhost:4000/api/flashcards/` + this.props.flashcard._id, editFlashcard, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("userKey")
            }
          })
          .then(res => {
            if(this.state.categoryId){
            this.deleteOldRelation(res.data._id);
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
            }
          });

  }
  render() {
    return (
      <div
        class="modal fade"
        id={"deleteFlashcard" + this.props.index}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Edytuj fiszkę
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
                    defaultValue={this.props.word}
                    onChange={this.handleWordChange}
                  />
                </label>

                <label>
                  Przetłumaczone słowo:
                  <input
                    type="text"
                    defaultValue={this.props.translatedWord}
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
                Edytuj fiszkę
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
