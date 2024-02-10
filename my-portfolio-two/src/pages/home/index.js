import React from "react";
import HomePic from "../../assets/pic-from-side.jpg";
import Typewriter from "typewriter-effect";
// import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
	const myIntro = {
		title: "I am...",
		quotes: {
			first: "Ron Morant",
			second: "Husband",
			third: "Father",
			fourth: "Marine",
			fifth: "Developer",
		},
		description:
			"Greatly appreciate you for dropping by! Check out my portfolio to see my journey.",
	};

	return (
		// <>
		// 	<div className="home-name-and-intro">
		// 		<img className="home-image"
		// 		src={HomePic} alt="Black and White" />
		// 	</div>
		// </>
		<div className="home">
			<div>
				<div className="name-and-intro">
					<div className="i-am">{myIntro.title}</div>
					<p className="my-intro">
						<Typewriter
							options={{
								strings: [
									myIntro.quotes.first,
									myIntro.quotes.second,
									myIntro.quotes.third,
									myIntro.quotes.fourth,
									myIntro.quotes.fifth,
								],
								autoStart: true,
								loop: true,
								deleteSpeed: 15,
							}}
						/>
					</p>
					<p className="description">{myIntro.description}</p>
				</div>
				{/* <div className="social-media">
					<SocialIcon
						className="icon"
						url="https://www.linkedin.com/in/ronmorant/"
						target="_blank"
						rel="noopener noreferrer"
						bgColor="black"
					/>
					<SocialIcon
						className="icon"
						url="https://github.com/rrmorant"
						target="_blank"
						rel="noopener noreferrer"
						bgColor="black"
					/>
				</div> */}
				<div className="buttons">
					<div className="contact">
						<div className="contact-text">Contact Me</div>
					</div>
					<div className="portfolio">
						<Link to="/portfolio">
							<div className="portfolio-text">Portfolio</div>
						</Link>
					</div>
				</div>
				<img className="black-and-white" alt="Ron" src={HomePic} />
			</div>
		</div>
	);
};

export default Home;
