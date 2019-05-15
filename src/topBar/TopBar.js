import React from 'react';



const TopBarStyle = {
	height:"60px",  // testFlashards page height is calc(100vh - 60px)
	lineHeight:'60px',
	width:"100%",
	background:"#04291D",
	margin:" 0 0 0 0 ",
	padding:"0",
	display:"flex",
	justifyContent: "space-between",
	fontSize: "20px",
	fontWeight:"bold",
	color:"#E8F4F0"
}

const TopBar= probs => {
	return (
		<div style={TopBarStyle}>
				
				{probs.children}
			
		</div>
	);
}

export default TopBar