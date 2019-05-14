import React from 'react'
import MiniFlashcard from './MiniFlashcard'
import Button from './Button'
import TopBar from './TopBar'
import { Link } from 'react-router-dom';
import LogoutButton from "./LogoutButton"
import HompageButton from "./HompageButton"
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

const linkStyle = {

	color: "#04291D",
	fontSize:"80px"
}

const Choice = probs => {
	return(
		<div style ={mainStyle}>
				<TopBar>

				
				<HompageButton />
				<LogoutButton />

				</TopBar>
			<div style={ChoiceStyle}>
					<MiniFlashcard>
						<Link to="/test" style={linkStyle}>
						Nauka
						</Link>
					</MiniFlashcard>
					<MiniFlashcard>
					<Link to="/editFlashcards" style={linkStyle}>
						Edycja
						</Link>
					</MiniFlashcard>
			</div>
		</div>

	);
}

export default Choice