export default {
	hdr_simple: 1,
	include: 1,
	hdr_srch_include: 0,
	hdr_width: 100,
	hdr_alert_include: 1,
	hdr_alert_title: "Scheduled Service Disruption",
	hdr_alert_msg:
		"The site will be offline for scheduled maintenance on YYYY-MM-DD.",
	hdr_alert_url_label: "More information",
	hdr_alert_url: "https://google.com",
	home_label: "ExploreUK",
	home_url: "https://exploreuk.uky.edu/",
	custom_logo: false,
	image_path: "./js/config/sites/exploreuk/logo.png",
	bases: [
		{
			label: "home",
		},
		{
			title: "About",
			label: "link1",
			children: [
				{
					title: "About ExploreUK",
					label: "link1Child1",
					url: "https://exploreuk.uky.edu/about",
				},
			],
		},
		{
			title: "How to",
			label: "link2",
			children: [
				{
					title: "Activate your Researcher Account",
					label: "link2Child1",
					url: "https://libguides.uky.edu/SCRCaccount",
				},
				{
					title: "Request Materials",
					label: "link2Child2",
					url: "https://libguides.uky.edu/SCRCaccount/archivesrequests",
				},
				{
					title: "Visit SCRC",
					label: "link2Child3",
					url: "https://libraries.uky.edu/locations/special-collections-research-center",
				},				
				{
					title: "Find Copyright and Use Information",
					label: "link2Child4",
					url: "https://exploreuk.uky.edu/takedown-policy",
				},
			],
		},
		{
			title: "Contact Us",
			label: "link5",
			url: "https://libraries.uky.edu/ContactSCRC",
		},
		{
			title: "Researcher Account Login",
			label: "link6",
			url: "https://requests-libraries.uky.edu/logon",
		},
	],
};
