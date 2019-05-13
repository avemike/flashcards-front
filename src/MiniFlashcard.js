import React from 'react'

const MiniFlashcardStyle = {
	"border": "5px solid #01695A	",
	"border-radius":"100px",
	"height": "40vh",
	"width":"40vw",
	"display": "flex",
	"justifyContent": "center",
	"alignItems": "center",

}

const MiniFlashcard = (probs) => {
	return(
				<div 
					className="mini-card"
					style = {MiniFlashcardStyle}
				>
				
			{probs.children}
				</div>

	);
}

export default MiniFlashcard