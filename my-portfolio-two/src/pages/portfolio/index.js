import React from "react";
import "./style.css";
// import { NavLink } from "react-router-dom";
// import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

const Portfolio = () => {
	const portfolioData = [
		{
			img: "https://picsum.photos/400/?grayscale",
			description:
				"The wisdom of life consists in the elimination of non-essentials.",
			link: "#",
		},
		{
			img: "https://picsum.photos/400/800/?grayscale",
			description:
				"The wisdom of life consists in the elimination of non-essentials.",
			link: "#",
		},
		{
			img: "https://picsum.photos/400/?grayscale",
			description:
				"The wisdom of life consists in the elimination of non-essentials.",
			link: "#",
		},
		{
			img: "https://picsum.photos/400/600/?grayscale",
			description:
				"The wisdom of life consists in the elimination of non-essentials.",
			link: "#",
		},
		{
			img: "https://picsum.photos/400/300/?grayscale",
			description:
				"The wisdom of life consists in the elimination of non-essentials.",
			link: "#",
		},
		{
			img: "https://picsum.photos/400/700/?grayscale",
			description:
				"The wisdom of life consists in the elimination of non-essentials.",
			link: "#",
		},

	
	];

	return (
		<div>
			<Container>
				<title> Portfolio | </title>
				<Row>
					<Col>
						<h1 className="display-4 mb-4"> Portfolio </h1>{" "}
						<hr className="t_border my-4 ml-0 text-left" />
					</Col>
				</Row>
				<div className="mb-5 po_items_ho">
					{portfolioData.map((data, i) => {
						return (
							<div key={i} className="po_item">
								<img src={data.img} alt="" />
								<div className="content">
									<p>{data.description}</p>
									<a href={data.link}>view project</a>
								</div>
							</div>
						);
					})}
				</div>
			</Container>
		</div>
	);
};

export default Portfolio;
