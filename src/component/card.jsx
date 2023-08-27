import { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import '../style/card.css';

function MakeCard(character, handleClick) {
	return (
		<Tilt key={character.id}>
			<div className="card" onClick={handleClick} id={character.id}>
				<img src={character.image} alt={character.name} />
				<div className="title">{character.name}</div>
			</div>
		</Tilt>
	);
}

export default MakeCard;
