export default {
	hdr_simple: 1,
	include: 1,
	hdr_srch_include: 1,
	hdr_width: 100,
	hdr_alert_include: 1,
	hdr_alert_title: "Scheduled Service Disruption",
	hdr_alert_msg:
		"The site will be offline for scheduled maintenance on YYYY-MM-DD.",
	hdr_alert_url_label: "More information",
	hdr_alert_url: "https://libguides.uky.edu/home",
	home_label: "Research Guides",
	home_url: "https://libguides.uky.edu/home",
	custom_logo: false,
	image_path: "./js/config/sites/libguides/logo.png",
	bases: [
		{
			label: "home",
		},
		{
			title: "'How To' Guides",
			label: "link1",
			url: "https://libguides.uky.edu/How",
		},
		{
			title: "Course Guides",
			label: "link2",
			url: "https://libguides.uky.edu/courseguides",
		},
		{
			title: "Contact Us",
			label: "link5",
		},
		{
			title: "Login",
			label: "link6",
		},
	],
};
