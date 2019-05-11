import React from 'react';
import axios from 'axios';
import "../style/FlashcardsChoosement.css";
import { imgLogo } from './Flashcard.js'

export default class FlashcardsChoosement extends React.Component {
    constructor(props) {
           super(props);
            this.state = {
               categories: [{
                  name:'Jedzenie',
                  count: 33
               }, {
                   name:'Budowlanka',
                   count:21
               }, {
                   name:'Podroze',
                   count:23
               }]
            };
    }

    render () {
        return (
            <div className="card">
                <img src={imgLogo.src} alt={imgLogo.alt} />
                <p>Wybierz kategorie:</p>
                <form>
                    <label className="inputContainer">
                        Jedzenie
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="inputContainer">
                        Budowlanka
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="inputContainer">
                        PodrĂłĹĽe
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </form>
                <p>Wybierz liczbÄ™ fiszek do nauki</p>
                <div>
                    <button>5</button>
                    <button>10</button>
                    <button>15</button>
                </div>
                <button>Dalej</button>
            </div>
        );
    }
}
