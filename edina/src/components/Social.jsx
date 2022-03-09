import React from "react";
import {
	FiFacebook,
	FiTwitter,
	FiInstagram,
	FiDribbble,
	FiLinkedin,
	FiGithub,
} from "react-icons/fi";

const SocialShare = [
	{
		iconName: <FiGithub />,
		link: "https://github.com/Recep-T",
	},
	// {
	//   iconName: <FiFacebook />,
	//   link: "https://www.facebook.com/",
	// },
	{ iconName: <FiTwitter />, link: "https://twitter.com/taylanhanrecep" },
	// {
	// 	iconName: <FiInstagram />,
	// 	link: "https://www.instagram.com/",
	// },
	// { iconName: <FiDribbble />, link: "https://dribbble.com/" },
	{
		iconName: <FiLinkedin />,
		link: "https://www.linkedin.com/in/recep-taylanhan-abc/",
	},
];
const Social = () => {
	return (
		<ul>
			{SocialShare.map((val, i) => (
				<li key={i}>
					<a href={val.link} target="_blank" rel="noreferrer">
						{val.iconName}
					</a>
				</li>
			))}
		</ul>
	);
};

export default Social;
