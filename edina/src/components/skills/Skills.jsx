import React from "react";

const skillsContent = [
	{
		name: "React.Js",
		skillPercent: "75",
	},

	{
		name: "HTML5",
		skillPercent: "90",
	},
	{
		name: "CSS3",
		skillPercent: "90",
	},
	{
		name: "MATERIAL-UI",
		skillPercent: "90",
	},
	{
		name: "Bootstrap",
		skillPercent: "75",
	},
	{
		name: "WebPack",
		skillPercent: "90",
	},
	{
		name: "Firebase",
		skillPercent: "90",
	},
	{
		name: "Redux",
		skillPercent: "33",
	},
	{
		name: "Git",
		skillPercent: "90",
	},
	{
		name: "Reactstrap",
		skillPercent: "90",
	},
];

const Skills = () => {
	return (
		<>
			{skillsContent.map((val, i) => (
				<div className="progress_inner" key={i}>
					<span className="label">{val.name}</span>
					<div className="background">
						<div className="bar">
							<div
								className="bar_in"
								style={{ width: val.skillPercent + "%" }}
							></div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Skills;
