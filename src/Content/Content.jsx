import React, { Component } from 'react'
import Flashcard from './Fiche/Flashcard';
import AddFlashcard from './Fiche/AddFlashcard';




export default function Content(props) {
    return (
        <div class='row'>
            {props.flashcards.map((el, i) => {
                return <Flashcard key={i} index={i} flashcard={el} />
            })}
        </div>
    )
}




