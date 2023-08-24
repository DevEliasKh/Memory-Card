import { useState } from 'react';
import './App.css';
import StartGame from './component/startGame';
import Footer from './component/footer';

function App() {
	return (
		<div className="container">
			<StartGame />
			<Footer />
		</div>
	);
}

export default App;

// https://rickandmortyapi.com/api/character
