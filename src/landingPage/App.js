import React from 'react';
import Feature from './Feature';
import ButtonLanding from './Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import history from '../history';

import './index.css';
const App = () => {
	{
		axios.get('http://localhost:4000/api/register/me', {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'x-auth-token': localStorage.getItem("userKey")
			}
		})
		.then(res => {
			// User is logged in
		})
		.catch(err => {
			// Redirect to home
			history.push('/loginRegister')
		})
	}
	return (
		<div className="center">
			<header>
				<div id="logo" class="background"></div>
				<h1>Z nami nauczysz się wstystkiego!</h1>
			</header>
    		<div id="promo" class="background">TU WSTAWIĆ ZDJĘCIE GOTOWEJ APKI</div>
			<Link to='/loginRegister'> 
				<ButtonLanding
					text="Załóż konto!"
				/>
			</Link>
			<Features />
		</div>
	);
}

const Features = () =>{
	return (
		<div className="features-body">
			<Feature
				title="Szybkie"
				icon="fas fa-space-shuttle"
				text="Praca z naszymi fiszkami jest błyskawiczna! Nie ważne czy masz przerwę, chwilę wolnego, jedziesz autobusem czy uczysz się na egzamin. Z nami szybko i skutecznie osiągniesz swoje cele!"
			/>
			<Feature
				title="Lekkie"
				icon="fas fa-paper-plane"
				text="Fiszki działają tylko na naszych serwerach. Nie ma potrzeby ściągania niepotrzebnych apek, programów czy wtyczek. Wszytko dzieję się w twojej przeglądarce!"
			/>
			<Feature
				title="Przyjemne"
				icon="fas fa-hand-peace"
				text="Nauka z naszymi fiszkami to czysta przyjemność! Z radością zauważysz postępy, i docenisz możliwości jakie otworzą się przed tobą dzięki nauce nowego języka"
			/>
	</div>
	);
}

export default App;

