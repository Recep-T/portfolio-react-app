import React from "react";

const personalInfoContent = [
	{ meta: "first name", metaInfo: "Recep " },
	{ meta: "last name", metaInfo: "TAYLANHAN" },
	// { meta: "Age", metaInfo: "25 Years" },
	// { meta: "Nationality", metaInfo: "USA" },
	{ meta: "Freelance", metaInfo: "Available" },
	{ meta: "Address", metaInfo: "Pennsylvania" },
	{ meta: "phone", metaInfo: "+12673929753" },
	{ meta: "Email", metaInfo: "taylanhanr@mail.com" },
	// { meta: "Skype", metaInfo: " recep.taylanhan" },
	{ meta: "langages", metaInfo: " English,Turkish,Spanish" },
];

const PersonalInfo = () => {
	return (
		<ul className="about-list list-unstyled open-sans-font">
			{personalInfoContent.map((val, i) => (
				<li key={i}>
					<span className="title">{val.meta}: </span>
					<span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
						{val.metaInfo}
					</span>
				</li>
			))}
		</ul>
	);
};

export default PersonalInfo;
