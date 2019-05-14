import React, { Component } from 'react'
import axios from 'axios';
import './flashcard.css'
import EditFlashcardModal from './EditFlashcardModal';
export default class Flashcard extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: ''
        }

        this.getFlashcardCategory();
    }
    getFlashcardCategory() {
        return axios.get('http://localhost:4000/api/flashcards/' + this.props.flashcard._id + '/categories', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem("userKey")
            }
        })
        .then(res => 
            {
            this.setState({
            category: res.data[0].name
            })
        })
    }
    
    render() {
        return (
            <div className='card col-3'>
                <div className="row ">
                    Kategoria: {this.state.category}
                </div>
                <div className="row d-flex justify-content-center">
                    {this.props.flashcard.firstText}
                </div>
                <div className="row d-flex justify-content-center">
                    {this.props.flashcard.secondText}
                </div>
                <div className="row d-flex justify-content-center">
                    <button onClick={() => this.props.handleDeleteFlashcard(this.props.flashcard._id, this.props.index)} className="btn btn-danger justify-content-center">
                        Usuń fiszkę</button>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#deleteFlashcard" + this.props.index}>
                        Edytuj fiszkę
</button>

                </div>
                <EditFlashcardModal categories={this.props.categories} handleEditFlashcard={this.props.handleEditFlashcard} flashcard={this.props.flashcard} word={this.props.flashcard.firstText} translatedWord={this.props.flashcard.secondText} category={this.props.flashcard.category} index={this.props.index} />
            </div>
        )
    }
}

