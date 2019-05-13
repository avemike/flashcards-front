import React from 'react'


const ButtonLandingStyle = {
	"margin": "20px 0",
	"textAlign": "center",
	"backgroundColor": "#2CC26F",
	"color": "#E8F4F0",
	"border": "none",
	"padding": "20px 100px",
	"borderRadius": "100px",
	"fontSize": "30px",
	"height": "30px",
	"lineHeight": "30px",
	"boxSizing": "content-box"
}

const route = destination => {

	alert(`Przeniesienie do ${destination}`)
}

const ButtonLanding = probs => {
	return (
		<button 
			className="button"
			style={ButtonLandingStyle}
			onClick={() =>route(probs.onClick)}
		>
			{probs.text || "BRAK TEKSTU"}
		</button>
	);
}

export default ButtonLanding