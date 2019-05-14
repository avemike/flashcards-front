import React from 'react'
import { Logout } from '../logout';

const logoutStyle ={
	cursor:"pointer",
	fontSize:"20px",
	display:"flex",
	justifyContent: "center",
	alignItems: "center",	
	margin:"10px"
}

const LogoutButton = () =>{
	return (
	<div 
	style={logoutStyle}
	onClick={Logout}
	>
	Wyloguj 
	<i className="fas fa-sign-out-alt"></i>
	</div>	
	);
		
}

export default LogoutButton