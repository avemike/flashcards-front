import React, { Component } from 'react'
export default class EditFlashcardModal extends Component {
    constructor(props) {
        super(props);
        this.state = { category: this.props.category, word: this.props.word, translatedWord: this.props.translatedWord };

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
        this.props.handleEditFlashcard(this.state, this.props.index);
        //     this.setState({ category: '', word: '', translatedWord: '' })
    }
    render() {
        return (
            <div class="modal fade" id={"deleteFlashcard" + this.props.index} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Edytuj fiszkę</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Kategoria:
          <input type="text" value={this.state.category} onChange={this.handleCategoryChange} />
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
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" data-dismiss="modal" onClick={(e) => this.handleSubmit(e)} class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
