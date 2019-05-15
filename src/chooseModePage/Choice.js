import React from 'react'
import MiniFlashcard from './MiniFlashcard'
import TopBar from '../topBar/TopBar'
import { Link } from 'react-router-dom';
import LogoutButton from "../topBar/LogoutButton"
import HompageButton from "../topBar/HompageButton"
import ShowUser from '../topBar/ShowUser';
const mainStyle = {
	backgroundColor: "#2CC26F",
	height: "100vh",
	textAlign: "center",
	fontFamily: "Lato",
	color: "#fff",

	margin: "0",
	padding: "0"
}
const ChoiceStyle = {
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center"	
}
const paragraphStyle = {

	fontWeight: "lighter",
	fontSize: "60px",
}

const linkStyle = {

	color: "#04291D",
	fontSize:"80px"
}

const Choice = probs => {
	return(
		<div style ={mainStyle}>
				<TopBar>
				
				<Link to="/home" >
					<HompageButton />
				</Link>
				
				<ShowUser />
				<LogoutButton />

				</TopBar>
			<p style={paragraphStyle}>Witaj, co chcesz zrobić? </p>
			<div style={ChoiceStyle}>
			
				<Link to="/test" style={linkStyle}>
					<MiniFlashcard>
						Nauka
					</MiniFlashcard>
				</Link>
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