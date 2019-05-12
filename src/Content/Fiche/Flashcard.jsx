import React, { Component } from 'react'
import './flashcard.css'
import EditFlashcardModal from './EditFlashcardModal';
export default class Flashcard extends Component {

    render() {
        return (
            <div className='flashcard col-3 rounded'>
                <div className="row ">
                    Kategoria:{this.props.flashcard.category}
                </div>

                <div className="row d-flex justify-content-center">
                    {this.props.flashcard.word}
                </div>
                <div className="row d-flex justify-content-center">
                    {this.props.flashcard.translatedWord}
                </div>
                <div className="row d-flex justify-content-center">
                    <button onClick={() => this.props.handleDeleteFlashcard(this.props.index)} className="btn btn-danger justify-content-center">
                        Usuń fiszkę</button>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#deleteFlashcard" + this.props.index}>
                        Edytuj fiszkę
</button>
                    <EditFlashcardModal handleEditFlashcard={this.props.handleEditFlashcard} word={this.props.flashcard.word} translatedWord={this.props.flashcard.translatedWord} category={this.props.flashcard.category} index={this.props.index} />

                </div>

            </div >
        )
    }
}

