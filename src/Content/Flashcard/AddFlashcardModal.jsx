import React, { Component } from 'react'
import axios from 'axios';

export default class EditFlashcardModal extends Component {
    constructor(props) {
        super(props);
        console.log("w modal")
        console.log(this.props.categories)
        this.state = { category: '', word: '', translatedWord: '' };

        this.handleWordChange = this.handleWordChange.bind(this);
        this.handleTranslatedWordChange = this.handleTranslatedWordChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCategoryChange(event) {
        this.setState({ category: event.target.value });
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
        }
        axios
      .post(`http://localhost:4000/api/flashcards`, newFlashcard)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
        // this.props.handleAddFlashcard(this.state);
        // this.setState({ category: '', word: '', translatedWord: '' })
    }
    render() {
        console.log("w modal")
        console.log(this.props.categories[0])
        return (
            <div className="modal fade" id={"addFlashcard"} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Dodaj fiszkę</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Kategoria:
          <input type="text" value={this.props.categories[0]} onChange={this.handleCategoryChange} />
                                </label>
                                <label>
                                    Słowo:
          <input type="text" value={this.state.word} onChange={this.handleWordChange} />
                                </label>

                                <label>
                                    Przetłumaczone słowo:
          <input type="text" value={this.state.translatedWord} onChange={this.handleTranslatedWordChange} />
                                </label>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Anuluj</button>
                            <button type="button" data-dismiss="modal" onClick={(e) => this.handleSubmit(e)} class="btn btn-primary">Dodaj fiszkę</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
