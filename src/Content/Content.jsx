import React, { Component } from 'react'
import Flashcard from './Flashcard/Flashcard';
import AddFlashcardModal from './Flashcard/AddFlashcardModal';
import AddFlashcard from './Flashcard/AddFlashcard';

export default class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            flashcards: [{
                category: 'Jedzenie',
                word: 'Lody',
                translatedWord: 'Ice Cream'
            },
            {
                category: 'Jedzenie',
                word: 'Jabłko',
                translatedWord: 'Apple'
            },
            {
                category: 'Sprzęt',
                word: 'Komputer',
                translatedWord: 'Computer'
            },
            {
                category: 'Motoryzacja',
                word: 'Samochód',
                translatedWord: 'Car'
            }
            ]
        }
        this.handleDeleteFlashcard = this.handleDeleteFlashcard.bind(this);
        this.handleAddFlashcard = this.handleAddFlashcard.bind(this);
        this.handleEditFlashcard = this.handleEditFlashcard.bind(this);

    }

    handleDeleteFlashcard(index) {
        this.setState({
            flashcards: this.state.flashcards.filter((data, i) => i !== index)
        })
    }

    handleAddFlashcard(flashcard) {
        this.setState({ flashcards: [...this.state.flashcards, flashcard] })
    }

    handleEditFlashcard(flashcard, index) {
        this.setState({ flashcards: this.state.flashcards.map((el, i) => i === index ? flashcard : el) })
    }

    render() {
        return (
            <div class='row'>
                <AddFlashcard />
                {this.state.flashcards.map((el, i) => {
                    return <Flashcard handleEditFlashcard={this.handleEditFlashcard} handleDeleteFlashcard={this.handleDeleteFlashcard} key={i} index={i} flashcard={el} />
                })}
                <AddFlashcardModal handleAddFlashcard={this.handleAddFlashcard} />

            </div>

        )
    }
}


