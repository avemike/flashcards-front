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
           gotoFlashcards: false,
           howManyFlashcardsPassed: 0,
           showSummary: false,
           correct: 0,
           incorrect: 0
        };

        this.getCategories = this.getCategories.bind(this);
        this.flashcardNbrChoose = this.flashcardNbrChoose.bind(this);
        this.categoryTicked = this.categoryTicked.bind(this);
        this.countTotalFlashcardsNumber = this.countTotalFlashcardsNumber.bind(this);
        this.listTickedCategories = this.listTickedCategories.bind(this);
        this.startLearning = this.startLearning.bind(this);
        this.flashcardPassed = this.flashcardPassed.bind(this);
        this.getCategories();   
    }

    getCategories = () => {
        return axios.get("http://localhost:4000/api/categories", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem("userKey")
            }
        })
        .then(res => {
            let innerCategories = res.data.map(category => ({...category, isTicked:false}));
            innerCategories[0].isTicked = true;
            this.setState({
                categories: innerCategories
            });
            // this.state.categories = innerCategories;
            this.countTotalFlashcardsNumber();
        });
    }
    flashcardPassed(gotPoint) {  // true -> +1 correct answer, false -> +1 bad answer
        this.setState({
            howManyFlashcardsPassed: this.state.howManyFlashcardsPassed + 1
        }, () => {
            
            if(gotPoint) this.setState({correct: this.state.correct + 1})
            else this.setState({incorrect: this.state.incorrect + 1})
    
            if(this.state.howManyFlashcardsPassed == this.state.flashcardsNbr.max) {
                this.setState({
                    showSummary: true
                })
            }
        })
        

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
        if(!this.state.categories) return ;
        const selectCategory = this.state.categories.filter((category) => category.isTicked)
        if(!selectCategory[0]) return ;
        const categoryId = selectCategory[0]._id;
        return axios
            .get("http://localhost:4000/api/categories/" + categoryId + "/flashcards", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem("userKey")
                }})
            .then(res => {
                this.setState(
                    {
                        flashcardsNbr: { max: res.data.length }
                    }
                );
            });
            console.log("maksior " + this.state.flashcardsNbr.max);
    };
        // const totalFlashcardsNbr = this.state.categories
        //     .filter((category) => category.isTicked)
        //     .map((category) => category.count)
        //     .reduce((total, next) => { return total + next}, 0);

        // const setFlashcardNbr = parseInt(totalFlashcardsNbr / 2);
        // this.setState({flashcardsNbr: {
        //         max: totalFlashcardsNbr,
        //         flashcardAmount: setFlashcardNbr
        //     }
        // });
        // console.log(this.state.flashcardsNbr.max);
    // }

    listTickedCategories = () => {
        return this.state.categories
            .filter((category) => category.isTicked);
            // .map((category) => category.name);
    }

    startLearning = () => {
        this.setState({gotoFlashcards: true});
    }

    componentDidMount = async() => {
        await this.getCategories();
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
            return (
                <div className="test-container">
                    <div className="card">
                        <img src={imgLogo.src} alt={imgLogo.alt} />
                        <p>Wybierz kategorie:</p>
                        <form>
                            {renderedCategories}
                        </form>
                        <p>Wybierz liczbę fiszek do nauki</p>

                        <div className="slidecontainer">
                            <input type="range" 
                                className="slider" 
                                min="1" 
                                max={this.state.flashcardsNbr.max}
                                defaultValue={this.state.flashcardsNbr.flashcardAmount}
                                onChange={this.flashcardNbrChoose} 
                            /> {/* tu onchange */}

                        <div>{this.state.flashcardsNbr.flashcardAmount}</div>
                    </div>

                    <button onClick={this.startLearning}>Dalej</button> {/* tu */}
                </div>
            </div>);
        else return(
            <div className="test-container">
                <Flashcard
                    flashcardsAmount = {this.state.flashcardsNbr.max} // tu (wczesniej .flashcardsAmount)
                    categories = {this.listTickedCategories()} //tu
                    flashcardPassed = {this.flashcardPassed}
                    showSummary = {this.state.showSummary}
                    correct = {this.state.correct}
                    incorrect = {this.state.incorrect}
                />
            </div>
        );
    }
}
