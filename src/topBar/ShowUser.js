import React from 'react'


const ShowUser = (probs) =>{

	return (<div>{localStorage.getItem("email")||"Brak adresu email"}</div>);
}

export default ShowUser