import React from 'react';
import Feature from './Feature';
import ButtonLanding from './Button';
import { Link } from 'react-router-dom';
import './index.css';

const App = () => {
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

