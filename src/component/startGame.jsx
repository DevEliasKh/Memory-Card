import '../style/startGame.css';

function StartGame(score, bestScore) {
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
			<div className="score">
				<div className="current-score">Current Score : {score}</div>
				<div className="best-score">Best Score : {bestScore}</div>
			</div>
		</div>
	);
}

export default StartGame;
