import { useState, useEffect } from 'react';
import './App.css';
import StartGame from './component/startGame';
import Footer from './component/footer';
import MakeCard from './component/card';
function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	function Game() {
		const [clicked, setClicked] = useState(false);
		const [character, setCharacter] = useState([]);

		async function getCharacter() {
			const response = await fetch('https://rickandmortyapi.com/api/character', {
				mode: 'cors',
			});
			const character = response.json();
			character
				.then((character) => {
					setCharacter(character.results);
				})
				.catch(console.log('ERROR!'));
		}
		const newChar = character.slice(0, 12);
		useEffect(() => getCharacter, []);

		function handleClick() {
			// const clickedChar = [];
			// function addCharToList() {}
		}

		// function resetGame() {
		// 	setScore(0);
		// 	shuffleCard();
		// }

		// function shuffleCard() {}

		return (
			<div className="cards">
				{newChar.map((item) => MakeCard(item, handleClick))}
			</div>
		);
	}
	return (
		<div className="container">
			{StartGame(score, bestScore)}
			{Game()}
			<Footer />
		</div>
	);
}

export default App;

// API https://rickandmortyapi.com/api/character
