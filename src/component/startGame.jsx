//todo put background and game title
//todo button to start the game

import '../style/startGame.css';

function StartGame() {
	function playGame() {}
	return (
		<div className="start-page">
			<header>
				<img
					src="https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png"
					width="200"
					alt="rick and morty"
					className="logo"
				/>
			</header>
			<button className="start-btn" onClick={playGame}>
				Start Game
			</button>
		</div>
	);
}

export default StartGame;
