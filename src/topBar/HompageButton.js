import React from 'react'
import {imgLogo} from '../chooseModePage/MiniFlashcard'


const logoStyle = {

	margin:"5px 40px",  //topbar height is 60px, 5 + 5 + 50
	height: "50px",
	width: "175px", //height * 3,5
	backgroundImage: `url(${imgLogo.src})`,
	backgroundSize: "contain",
	backgroundRepeat: "no-repeat",
	backgroundPosition:"left center",
	filter: "invert(100%)"
}
const HompageButton = () =>{
	return (<div style={logoStyle} ></div>);
}

export default HompageButton;