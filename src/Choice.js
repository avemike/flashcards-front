import React from 'react'
import MiniFlashcard from './MiniFlashcard'
import Button from './Button'


const ChoiceStyle = {
	"display": "flex",
	"justifyContent": "space-around",
	"alignItems": "center",
	"height": "100vh",
	"backgroundColor":"#2CC26F"
}


const Choice = probs => {
	return (
		<div style={ChoiceStyle}>
			<h1>

			</h1>
			<MiniFlashcard>
				<Button 
				text="Nauka" 
				onClick="Home"
				/>
			</MiniFlashcard>
			<MiniFlashcard>
				<Button text="Edycja" />
			</MiniFlashcard>
		</div>
	);
}

export default Choice