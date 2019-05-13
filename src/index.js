import React from 'react'
import ReactDOM from 'react-dom'
import Feature from './Feature'
import ButtonLanding from './Button'

const App = () =>{
	return (
		<div>
			<ButtonLanding
				text="Załóż konto!"
				onClick=""
			 />

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

ReactDOM.render(<App />,document.getElementById('root'))
ReactDOM.render(<Features />, document.getElementById('features'))

