import React from "react";
import Sidebar from "../../components/header/Sidebar";
import Hero from "../../components/slider/Hero";
import About from "../../components/about/About";
import Service from "../../components/service/Service";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/Contact";
import Address from "../../components/Address";
// import Map from "../../components/Map";

const HomeLight = () => {
	document.body.classList.add("light");
	return (
		<div className="home-light edina_tm_mainpart">
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
						<p>Designing >>> Coding >>> Building</p>
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
						<p>My latest projects</p>
					</div>
					{/* End edian_tm_title */}
					<Portfolio />
				</div>
			</div>
			{/* End Portfolio */}

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
							<div className="fields">
								<Contact />
							</div>
							{/* End Contact Form */}
						</div>
					</div>
				</div>
			</div>
			{/* /CONTACT */}
		</div>
	);
};

export default HomeLight;
