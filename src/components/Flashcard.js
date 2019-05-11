import React from 'react';
import AnswerChecker from './AnswerChecker';

const imgLogo = {
    src: process.env.PUBLIC_URL + '/img/icon-left-font-monochrome-black.png',
    alt: 'logo'
};

export default class Flashcard extends React.Component {
    render() {
        return(
            <div className="card">
                <div className="wrap">
                    <h2>Kategoria : {this.props.flashcard.category}</h2> 
                    <img src={imgLogo.src} alt={imgLogo.alt} />
                </div>
                <p>{this.props.flashcard.name}</p>
                <AnswerChecker onChange={this.onTextareaChange} flashcard = {this.props.flashcard}/>
            </div>

        );
    }
}
