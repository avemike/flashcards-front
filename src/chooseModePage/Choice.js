import React from 'react'
import MiniFlashcard from './MiniFlashcard'
import Button from './Button'
import TopBar from './TopBar'

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
			<p style={paragraphStyle}>Witaj, co zamierzasz zorbić?</p>
			<div style={ChoiceStyle}>
				<MiniFlashcard>
					<Button
						text="Nauka"
						onClick="Test"
					/>
				</MiniFlashcard>
				<MiniFlashcard>
					<Button 
					text="Edycja" 
					onClick="Edit"	
					/>
				</MiniFlashcard>
			</div>
		</div>

	);
}

export default Choice