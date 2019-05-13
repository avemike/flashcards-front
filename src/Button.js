import React from 'react'


 const gotoRegister = () => {
	alert("Przeneisienie na stronę rejetracji")
 }
const ButtonLanding = (probs) =>{
	return(
		<button className="button"
			onClick={gotoRegister}
		>
			{probs.text}
		</button>
	);
}

export default ButtonLanding