import React from 'react';
import { Link } from 'react-router-dom';

const TopBarStyle = {
	height:"60px",
	lineHeight:'60px',
	width:"100%",
	background:"#04291D",
	margin:" 0 0 30px 0 ",
	padding:"0",
	display:"flex",
	justifyContent: "space-between"
}
const linkStyle = {
	color: "white",
	"text-decoration": "none"
}
const paragraphStyle = {
	margin: "0 50px",
	fontSize:"30px"
}


// const logOut = () =>{
// 	alert("Wylogowanie")
// }

const TopBar= probs => {
	return (
		<div style={TopBarStyle}>
				
				<p style={paragraphStyle}>{probs.username||"BRAK UŻYTKOWNIKA"}</p>
				<p 
					style={paragraphStyle}
					// onClick={logOut}
				>
				<Link to='/home' style={linkStyle}>
					Wyloguj <i className="fas fa-sign-out-alt"></i>
				</Link>
				</p>
		</div>
	);
}

export default TopBar