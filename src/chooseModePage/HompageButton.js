import React from 'react'
import {imgLogo} from './MiniFlashcard'


const logoStyle = {


	margin:"0 0 0 40px",
	height: "50px",
	width: "100%",
	backgroundImage: `url(${imgLogo.src})`,
	backgroundSize: "contain",
	backgroundRepeat: "no-repeat",
	backgroundPosition:" 0 center"
}
const HompageButton = () =>{
	return (<div style={logoStyle} onClick></div>);
}

export default HompageButton