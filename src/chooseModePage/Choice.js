import React from 'react'
import MiniFlashcard from './MiniFlashcard'
import Button from './Button'
import TopBar from './TopBar'
import { Link } from 'react-router-dom';
const mainStyle = {
	backgroundColor: "#2CC26F",
	height: "100vh",
	textAlign: "center",
	fontFamily: "Lato",
	color: "#fff",
	fontWeight: "lighter",
	fontSize: "60px",
	margin: "0",
	padding: "0"
}
const ChoiceStyle = {
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center"	
}
const paragraphStyle = {
	margin: "50px 0"
}

const Choice = probs => {
	return(
		<div style ={mainStyle}>
	<TopBar username = "Alek"/>
			<p style={paragraphStyle}>Witaj, co zamierzasz zrobić?</p>
			<div style={ChoiceStyle}>
					<MiniFlashcard>
						<Link to="/test">
							<Button
								text="Nauka"
							/>
						</Link>
					</MiniFlashcard>
					<MiniFlashcard>
						<Link to="/editFlashcards">
							<Button 
								text="Edycja" 
							/>
						</Link>
					</MiniFlashcard>
			</div>
		</div>

	);
}

export default Choice