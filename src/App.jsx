import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { addFlashcard } from './actions';
import Header from './Header/Header';
import Content from './Content/Content'
import AddFlashcardModal from './Content/Fiche/AddFlashcardModal';
import EditFlashcardModal from './Content/Fiche/EditFlashcardModal';
class App extends Component {

    render() {
        return (
            <div class='container'>
                <Header />
                <Content flashcards={this.props.flashcards} />
                <AddFlashcardModal />
            </div>
        );
    }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
    return {
        flashcards: state.flashcards
    };
}


export default connect(mapStateToProps, { addFlashcard })(App);
