import React from 'react'
import { Logout } from '../logout';

const logoutStyle ={
	cursor:"pointer",
	display:"flex",
	justifyContent: "center",
	alignItems: "center",	
	margin:"10px"
}
const logoutIconStyle ={
	margin: " 0 10px"
}

const LogoutButton = () =>{
	return (
	<div 
	style={logoutStyle}
	onClick={Logout}
	>
	Wyloguj 
	<i style = {logoutIconStyle} className="fas fa-sign-out-alt"></i>
	</div>	
	);
		
}

export default LogoutButton