import React from "react";
import Social from "../Social";

const heroContent = {
	shapeImage: "hero-shape",
	heroImage: "2",
	name: "Recep Taylanhan",
	description: `I am a Front-end Engineer with extensive knowledge of
  programming.I really enjoy building and designing web
  applications to make it easy and simple for people.`,
};

const Hero = () => {
	return (
		//    HERO
		<div className="edina_tm_hero" id="home">
			<div className="content">
				<div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
					<img
						src={`img/hero/${heroContent.shapeImage}`}
						srcSet={`img/hero/${heroContent.heroImage}.jpg`}
						alt="hero-img"
					/>
				</div>
				<div className="extra">
					<h1
						className="name"
						data-aos="fade-up"
						data-aos-duration="1200"
						data-aos-delay="100"
					>
						{heroContent.name}
					</h1>
					<p
						className="text"
						data-aos="fade-up"
						data-aos-duration="1200"
						data-aos-delay="200"
					>
						{heroContent.description}
					</p>

					<div
						className="social"
						data-aos="fade-up"
						data-aos-duration="1200"
						data-aos-delay="300"
					>
						<Social />
					</div>
					<div
						className="edina_tm_button"
						data-aos="fade-up"
						data-aos-duration="1200"
						data-aos-delay="400"
					>
						<a href="img/resume-1.png" download className="color">
							Download Resume
						</a>
					</div>
				</div>
			</div>
		</div>
		// /HERO
	);
};

export default Hero;
