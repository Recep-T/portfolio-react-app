import React from "react";
import Sidebar from "../../components/header/Sidebar";
import Hero from "../../components/slider/Hero";
import About from "../../components/about/About";
import Service from "../../components/service/Service";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/Contact";
import Address from "../../components/Address";
// import Map from "../../components/Map";
import AnimatedCursor from "react-animated-cursor";

const HomeDark = () => {
	document.body.classList.add("dark");
	return (
		<div className="home-light edina_tm_mainpart">
			<AnimatedCursor
				innerSize={8}
				outerSize={44}
				color="221, 221, 221"
				outerAlpha={0.3}
				innerScale={0.7}
				outerScale={1.4}
			/>
			<Sidebar />
			{/* End Header */}
			<Hero />
			{/* End Hero */}
			<About />
			{/* End Hero */}

			<div className="edina_tm_services" id="service">
				<div className="container">
					<div className="edina_tm_title">
						<h3>What I Do</h3>
						<p>Design >>> Code >>> Build</p>
					</div>
					{/* End edian_tm_title */}
					<Service />
				</div>
			</div>
			{/* End Services */}

			<div className="edina_tm_portfolio" id="portfolio">
				<div className="container">
					<div className="edina_tm_title">
						<h3>Portfolio</h3>
						<p>My Latest Projects</p>
					</div>
					{/* End edian_tm_title */}
					<Portfolio />
				</div>
			</div>
			{/* End Portfolio */}

			{/* End Blog */}

			<div className="edina_tm_contact" id="contact">
				<div className="container">
					<div className="edina_tm_title">
						<h3>Contact</h3>
						{/* <p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							ipsum sit nibh amet egestas tellus.
						</p> */}
					</div>
					<div className="extra_info">
						<Address />
					</div>
					{/* End Address Info */}
					<div className="mainpart">
						<div
							className="left"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="300"
						>
							{/* <div className="title">
								<p>
									I'm always open to discussing product
									<br />
									<span> design work or partnerships.</span>
								</p>
							</div> */}
							{/* End title */}
							<div className="fields">
								<Contact />
							</div>
							{/* End Contact Form */}
						</div>
						<div
							className="right"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="400"
						>
							{/* <Map /> */}
						</div>
						{/* End Map */}
					</div>
				</div>
			</div>
			{/* /CONTACT */}
		</div>
	);
};

export default HomeDark;
