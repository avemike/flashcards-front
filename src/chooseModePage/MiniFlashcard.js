import React from 'react'


export const imgLogo = {
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
	fontWeight:"bold"
}



const MiniFlashcard = (props) => {

	return(
				<div 
					className="mini-card"
					style = {MiniFlashcardStyle}
				>
			
			{props.children}
				</div>

	);
}

export default MiniFlashcard