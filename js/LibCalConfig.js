// export default {
// 	hdr_simple: 0,
// 	include: 1,
// 	mhdr_home_label: "LibCal",
// 	mhdr_home_url: "https://libcal.uky.edu",
// 	bases: [
// 		{
// 			label: "home",
// 			title: "LibCal",
// 			url: "https://google.com",
// 		},
// 		{
// 			label: "link1",
// 			title: "Stuff 1",
// 			url: "https://google.com/",
// 		},
// 		{
// 			label: "link2",
// 			title: "Stuff 2",
// 			url: "https://google.com /",
// 		},
// 		{
// 			label: "link3",
// 			title: "Stuff 3",
// 			url: "https://google.com/",
// 		},
// 		{
// 			label: "link4",
// 			title: "Stuff 4",
// 			url: "https://google.com/",
// 		},
// 		{
// 			label: "link5",
// 			title: "Stuff 5",
// 			url: "https://google.com/",
// 		},
// 		{
// 			label: "link6",
// 			title: "Research Guides",
// 			url: "https://libguides.uky",
// 		},
// 	],
// 	hdr_srch_include: 1,
// 	hdr_width: 120,
// 	hdr_alert_include: 0,
// 	hdr_alert_title: "Unexpected Service Disruption",
// 	hdr_alert_msg:
// 		"We are currently working to resolve an authentication issue affect EBSCO databases.",
// 	hdr_alert_url_label: "More information",
// 	hdr_alert_url: "https://google.com",
// };

export default {
	hdr_simple: 0,
	hdr_level: 1,
	include: 1,
	hdr_srch_include: 1,
	hdr_width: 80,
	hdr_alert_include: 1,
	hdr_alert_title: "Unexpected Service Disruption",
	hdr_alert_msg:
		"We are currently working to resolve an authentication issue affect EBSCO databases.",
	hdr_alert_url_label: "More information",
	hdr_alert_url: "https://google.com",
	mhdr_home_label: "LibCal",
	mhdr_home_url: "https://libcal.uky.edu",
	bases: [
		{
			title: "LibCal",
			label: "home",
			url: "https://google.com",
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
