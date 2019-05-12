import React from 'react';
import axios from 'axios';
import Flashcard from './Flashcard';
import "../style/FlashcardsChoosement.css";
import { imgLogo } from './Flashcard.js'

export default class FlashcardsChoosement extends React.Component {
    constructor(props) {
       super(props);
        this.state = {
           categories: [],
           flashcardsNbr: {
                max: 1,
                flashcardAmount: 1
           },
           gotoFlashcards: false
        };
        this.getCategories();
    }

    getCategories = () => {
        axios.get("http://localhost:4000/learning/categories")
        .then(res => {
            let innerCategories = res.data.map(category => ({...category, isTicked:false}));
            innerCategories[0].isTicked = true;
            this.state.categories = innerCategories;
            this.countTotalFlashcardsNumber();
        });
    }

    flashcardNbrChoose = (e) => {
        const flashcardsSize = this.state.flashcardsNbr.max;
        this.setState({flashcardsNbr: {
                max: flashcardsSize,
                flashcardAmount: e.target.value
            }
        });
    }

    categoryTicked = (e) => {
        const clickedElementIndex = parseInt(e.target.getAttribute("data-index"));
        const clickedCategory = this.state.categories[clickedElementIndex];
        clickedCategory.isTicked = !clickedCategory.isTicked;
        this.countTotalFlashcardsNumber();
    }

    countTotalFlashcardsNumber = () => {
        const totalFlashcardsNbr = this.state.categories
            .filter((category) => category.isTicked)
            .map((category) => category.count)
            .reduce((total, next) => { return total + next}, 0);

        const setFlashcardNbr = parseInt(totalFlashcardsNbr / 2);
        this.setState({flashcardsNbr: {
                max: totalFlashcardsNbr,
                flashcardAmount: setFlashcardNbr
            }
        });
    }

    listTickedCategories = () => {
        return this.state.categories
            .filter((category) => category.isTicked)
            .map((category) => category.name);
    }

    startLearning = () => {
        this.setState({gotoFlashcards: true});
    }

    render () {
        const renderedCategories = this.state.categories.map((category, index) =>
            <label className="inputContainer">
                {category.name}
                <input type="checkbox" onChange={this.categoryTicked}
                    checked={category.isTicked ? 'checked' : null}  data-index={index}/>
                <span className="checkmark"></span>
            </label>
        );

        if (!this.state.gotoFlashcards)
            return (<div className="card">
                <img src={imgLogo.src} alt={imgLogo.alt} />
                <p>Wybierz kategorie:</p>
                <form>
                    {renderedCategories}
                </form>
                <p>Wybierz liczbę fiszek do nauki</p>

                <div className="slidecontainer">
                  <input type="range" className="slider" min="1" max={this.state.flashcardsNbr.max}
                    defaultValue={this.state.flashcardsNbr.flashcardAmount}
                    onChange={this.flashcardNbrChoose}/>
                  <div>{this.state.flashcardsNbr.flashcardAmount}</div>
                </div>

                <button onClick={this.startLearning}>Dalej</button>
            </div>);
        else return(<Flashcard
            flashcardsAmount = {this.state.flashcardsNbr.flashcardAmount}
            categories = {this.listTickedCategories()}
        />);
    }
}
