import React, { Component } from 'react'
import Flashcard from './Flashcard/Flashcard';
import AddFlashcardModal from './Flashcard/AddFlashcardModal';
import AddFlashcard from './Flashcard/AddFlashcard';
import axios from 'axios';

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state ={
            flashcards: [],
            categories: []
        }
        this.getAllFlashcards();
        this.getAllCategories();

        this.handleDeleteFlashcard = this.handleDeleteFlashcard.bind(this);
        this.handleAddFlashcard = this.handleAddFlashcard.bind(this);
        this.handleEditFlashcard = this.handleEditFlashcard.bind(this);
    }

    getAllFlashcards() {
        return axios.get("http://localhost:4000/api/flashcards", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem("userKey")
            }
        })
        .then(res => {
            this.setState({
                flashcards: res.data
            })
        });
    }

    getAllCategories() {
        return axios.get("http://localhost:4000/api/categories", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem("userKey")
            }
        })
        .then(res => {
            this.setState({
                categories: res.data
            })
        })
    }

    handleDeleteFlashcard(_id, index) {
        axios.delete("http://localhost:4000/api/flashcards/" + _id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem("userKey")
            }
        });

        // Shift flashcard from state
        const flashcardsWithoutDeletedOne = this.state.flashcards.filter((data, i) => i !== index); 
        this.setState({
            flashcards: flashcardsWithoutDeletedOne
        });
    }

    handleAddFlashcard(flashcard) {
        this.setState({ flashcards: [...this.state.flashcards, flashcard] })
    }

    handleEditFlashcard(flashcard, index) {
        this.setState({ flashcards: this.state.flashcards.map((el, i) => i === index ? flashcard : el) })
    }

    render() {
        return (
            <div className='row'>
                <AddFlashcard categories={this.state.categories}/>
                {this.state.flashcards.map((el, i) => {
                    return ( 
                        <Flashcard 
                            categories={this.state.categories} 
                            handleEditFlashcard={this.handleEditFlashcard} 
                            handleDeleteFlashcard={this.handleDeleteFlashcard} 
                            key={i} 
                            index={i} 
                            flashcard={el} />
                    )
                })}
                <AddFlashcardModal  categories={this.state.categories} handleAddFlashcard={this.handleAddFlashcard} />

            </div>

        )
    }
}


