import React from 'react'


const imgLogo = {
	src: process.env.PUBLIC_URL + '/img/icon-left-font-monochrome-black.png',
	alt: 'logo'
};
const MiniFlashcardStyle = {
	border: "5px solid #01695A	",
	borderRadius:"100px",
	minHeight: "60vh",
	width:"40vw",
	display: "flex",
	flexDirection:"column",
	justifyContent: "space-around",
	alignItems: "center",
	backgroundColor: "#fff",
	overflow: "hidden"


}

const logoStyle = {
	width:"200px",
	height:"200px",

	backgroundImage: `url(${imgLogo.src})`,
	backgroundSize:"contain",
	backgroundRepeat:"no-repeat",
	
}

const MiniFlashcard = (props) => {

	return(
				<div 
					className="mini-card"
					style = {MiniFlashcardStyle}
				>
				<div className="Header">
					<div style={logoStyle}></div>
				</div>
					{props.children}
				</div>

	);
}

export default MiniFlashcard