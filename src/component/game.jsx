import { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import '../style/game.css';

function MakeCard(character) {
	return (
		<Tilt>
			<div className="card">
				<div className="front-card">
					<img src={character.image} alt={character.name} />
					<div className="title">{character.name}</div>
				</div>
				<div className="back-card"></div>
			</div>
		</Tilt>
	);
}

function Game() {
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
	const newChar = character.slice(0, 3);
	useEffect(() => getCharacter, []);
	return <div className="cards">{newChar.map((item) => MakeCard(item))}</div>;
}

export default Game;
