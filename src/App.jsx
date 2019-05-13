import React from 'react';
import MiniFlashcard from './MiniFlashcard'
import Button from './Button'

export default class App extends React.Component {

    
    render() {
        const choiceStyle = {
            "display":"flex",
            "justifyContent":"space-around",
            "alignItems":"center",
            "height":"100vh"
        }

        return (
            <div className="choice" style={choiceStyle}>
                
                <MiniFlashcard>
                    <Button text="Nauka"/>
                </MiniFlashcard>
                <MiniFlashcard>
                    <Button text="Edycja"/>
                </MiniFlashcard>
                
            </div>
        )
    }
}