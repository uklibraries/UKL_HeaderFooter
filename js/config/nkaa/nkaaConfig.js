export default {
	hdr_simple: 0,
	include: 1,
	hdr_srch_include: 1,
	hdr_width: 80,
	hdr_alert_include: 1,
	hdr_alert_title: "Unexpected Service Disruption",
	hdr_alert_msg:
		"We are currently working to resolve an authentication issue affect EBSCO databases.",
	hdr_alert_url_label: "More information",
	hdr_alert_url: "https://google.com",
	home_label: "NKAA",
	home_url: "https://google.com",
	custom_logo: false,
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
