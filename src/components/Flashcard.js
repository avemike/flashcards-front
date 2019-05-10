import React from 'react';
import Textarea from './Textarea';
import Button from './Button';
import { Flashcards } from './App';

const imgLogo = {
    src: process.env.PUBLIC_URL + '/img/icon-left-font-monochrome-black.png',
    alt: 'logo'
};

export default class Flashcard extends React.Component {
    onButtonClick = event => {
        document.getElementById("properValue").textContent = this.props.flashcard.answer;
    };

    render() {
        return(
            <div className="card">
                <div className="wrap">
                    <h2>Kategoria : {this.props.flashcard.category}</h2> 
                    <img src={imgLogo.src} alt={imgLogo.alt} />
                </div>
                <p>{this.props.flashcard.name}</p>
                <Textarea />
                <div id="properValue"></div>
                <Button name="Sprawdź" onClick={this.onButtonClick} />
            </div>

        );
    }
}
