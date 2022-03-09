import React from "react";

const experienceContent = [
	{
		year: "   2021- Present",
		position: " Front-end Developer",
		compnayName: "Emplosoft",
		details: ` Improve web application performance by code refactoring, reorganizing data, remove code duplication and simplifying conditional expressions.Also Worked on building reusable React components, refactored class components into functional components with the help of Hooks and Redux. `,
	},
	{
		year: "2016-2020",
		position: " Marketing Manager",
		compnayName: "Estambul LLC",
		details: `Developed sales strategies and approaches for various products and services, such as special promotions, sponsored events, etc.`,
	},
	// {
	//   year: "2005 - 2013",
	//   position: "Consultant",
	//   compnayName: "Videohive",
	//   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
	//       elit, sed do eiusmod tempor duntt`,
	// },
];

const Experience = () => {
	return (
		<ul>
			{experienceContent.map((val, i) => (
				<li key={i}>
					<div className="icon">
						<img src="img/about/briefcase.png" alt="icon" />
						<i className="fa fa-briefcase"></i>
					</div>
					<span className="time open-sans-font text-uppercase">{val.year}</span>
					<h5 className="poppins-font text-uppercase">
						{val.position}
						<span className="place open-sans-font">{val.compnayName}</span>
					</h5>
					<p className="open-sans-font">{val.details}</p>
				</li>
			))}
		</ul>
	);
};

export default Experience;
