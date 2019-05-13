import React from 'react'

const Feature = (probs) =>{
	return (
		<div className="feature">
			<div className="feature-header">
				<h2>{probs.title}</h2>
				<i class={probs.icon}></i>
			</div>
			<div className="feature-body">
				<p>{probs.text}</p>
			</div>
		</div>

	);
}

export default Feature