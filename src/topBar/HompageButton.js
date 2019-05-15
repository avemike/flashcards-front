import React from 'react'
import {imgLogo} from '../chooseModePage/MiniFlashcard'


const logoStyle = {

	margin:"0 40px",
	height: "50px",
	width: "175px", //height * 3,5
	backgroundImage: `url(${imgLogo.src})`,
	backgroundSize: "contain",
	backgroundRepeat: "no-repeat",
	backgroundPosition:"left center"
}
const HompageButton = () =>{
	return (<div style={logoStyle} ></div>);
}

export default HompageButton