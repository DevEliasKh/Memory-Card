import Tilt from 'react-parallax-tilt';

function MakeCard() {
	return (
		<Tilt>
			<div className="card">
				<div className="front-card">
					<img src="" alt="" />
					<div className="title"></div>
				</div>
				<div className="back-card"></div>
			</div>
		</Tilt>
	);
}

export default MakeCard;
