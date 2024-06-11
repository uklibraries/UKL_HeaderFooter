export default {
	hdr_simple: 1,
	include: 0,
	hdr_srch_include: 0,
	hdr_width: 80,
	hdr_alert_include: 0,
	hdr_alert_title: "Scheduled Service Disruption",
	hdr_alert_msg:
		"METS Generator will be offline for scheduled maintenance on 2024-06-07.",
	hdr_alert_url_label: "More information",
	hdr_alert_url: "https://google.com",
	home_label: "METSGenerator",
	home_url: "https://mets.ukylib-exhibit-test.org/",
	custom_logo: false,
	image_path: "./js/config/sites/libcal/logo.png",
	bases: [
		{
			label: "home",
		},
		{
			title: "About",
			label: "link1",
			children: [
				{
					title: "About Collections",
					label: "link1Child1",
					url: "https://linktolibrary.com/about/collections",
				},
				{
					title: "About King",
					label: "link1Child2",
					url: "https://linktolibrary.com/about/King",
				},
				{
					title: "About UK",
					label: "link1Child3",
					url: "https://linktolibrary.com/about/UK",
				},
			],
		},
		{
			title: "Kitty cats",
			label: "link2",
			children: [
				{
					title: "About kats",
					label: "link1Child1",
					url: "https://linktolibrary.com/about/collec",
				},
				{
					title: "About King",
					label: "link1Child2",
					url: "https://linktolibrary.com/about/King",
				},
				{
					title: "About UK",
					label: "link1Child3",
					url: "https://linktolibrary.com/about/UK",
				},
			],
		},
		{
			title: "Stuff 3",
			label: "link3",
			url: "https://google.com/",
		},
		{
			title: "Stuff 4",
			label: "link4",
			url: "https://google.com/",
		},
		{
			title: "Stuff",
			label: "link5",
			url: "https://google.com/",
		},
		{
			title: "Research Guides",
			label: "link6",
			url: "https://libguides.uky",
		},
	],
};
