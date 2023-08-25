import { useState } from 'react';
import './App.css';
import StartGame from './component/startGame';
import Footer from './component/footer';
import Game from './component/game';
function App() {
	return (
		<div className="container">
			<Game />
			<StartGame />
			<Footer />
		</div>
	);
}

export default App;

// https://rickandmortyapi.com/api/character
