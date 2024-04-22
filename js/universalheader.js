// Universal Header for University of Kentucky Libraries websites
// Author: Eric Weig, University of Kentucky Libraries
// 2022 - 2024

const modulePath = document.querySelector("script[data-config]").dataset.config;

import(modulePath)
	.then((module) => {
		const hdr = module.default;
		const config = globalConfig();
		init();
		cookie();
		insertHTML(config, hdr);
		insertContentAndStyle(config, hdr);
	})
	.catch((error) => {
		console.error("Error with config:", error);
	});

function globalConfig() {
	return {
		/* Configurable Alert Messages Variables */

		/* Danger (red) level message text and toggle */
		DangerTitleText: "0 - UK ALERT - DELAYED OPENING",
		DangerMsgText:
			"URGENT: University of Kentucky campus operations on a 2-hour delay. All library facilities will open at 10 am, today, Friday, Jan 19.",
		DangerMsgToggle: "on",
		DangerMsgBackground: "#c12c2b",
		DangerMsgColor: "#fff",
		DangerLinkColor: "#fff",

		/* Warning (yellow) level message text and toggle */
		WarningTitleText: "0 - UK ALERT - EARLY CANCELLATION",
		WarningMsgText:
			"We are currently experiencing technical difficulties with some online databases.  We are working to resolve this issue as soon as possible.  Thank you for your patience. ",
		WarningMsgToggle: "off",
		WarningMsgBackground: "#FFDC00",
		WarningMsgColor: "#000",
		WarningLinkColor: "#0033A0",

		/* Announcement (blue) level message text and toggle */
		AnnouncementTitleText: "0 - UK ALERT - EARLY CANCELLATION",
		AnnouncementMsgText:
			"We are currently experiencing technical difficulties with some online databases.  We are working to resolve this issue as soon as possible.  Thank you for your patience. ",
		AnnouncementMsgToggle: "off",
		AnnouncementMsgBackground: "#a1d3ed",
		AnnouncementMsgColor: "#000",
		AnnouncementLinkColor: "#0033A0",

		/* Survey (green) level message tex/t and toggle */
		SurveyTitleText:
			"Help us improve library services, spaces, and collections!",
		SurveyMsgText: "Take the ",
		SurveyMsgLinkLabel: "LibQUAL+ survey",
		SurveyMsgLinkURL: "https://www.libqual.org/survey/RWSLDQ72YU886X8HRA",
		SurveyMsgToggle: "on",
		SurveyMsgBackground: "#4CBCC0",
		SurveyMsgColor: "#000",

		/* variables for HTML header chunks */
		ukltophdr_start_clamp: '<div class="ukl-ext-clamp">',

		ukltophdr_top_alert:
			'<div id="top-alert" class="banner-alert"><div class="slab"><div class="slab__wrapper"><span class="icon-label icon-label--big"><span class="ic ic--alert" aria-hidden="true"></span><span id="tltalert"></span></span><div class="message"><p id="msgalert"></p><p>More at&nbsp;<a href="https://www.uky.edu/alert" id="ukalertlink" title="www.uky.edu/alert">www.uky.edu/alert</a></p><p>&nbsp;</p></div></div></div></div>',

		ukltophdr_univlvl:
			'<div class="slab universal-header"><div class="slab__wrapper"><div class="universal-header__layout"><div class="universal-breadcrumb" role="region" aria-label="Breadcrumb"><ul><li><a class="link--fancy-reverse" href="https://www.uky.edu" title="Back to University of Kentucky home page">University of Kentucky <sub>&#174;</sub></a></li><li><a class="link--sans" href="https://libraries.uky.edu">UK Libraries</a></li></ul></div><div class="universal-nav" role="region" aria-label="Navigation"><div class="show-for-sr" id="UniversalNavLabel">University-wide Navigation</div><a class="my-uk-logo" href="https://myuk.uky.edu" title="Log into the myUK portal"><svg focusable="false" aria-hidden="true" viewBox="0 0 61 27" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="evenodd"><path d="M57.878 24.676c0-.174.034-.337.1-.49a1.29 1.29 0 0 1 .668-.669c.152-.067.315-.1.488-.1s.336.033.488.1a1.29 1.29 0 0 1 .668.67c.066.152.1.315.1.49 0 .174-.034.336-.1.488a1.284 1.284 0 0 1-.668.671c-.152.067-.315.101-.488.101s-.336-.034-.488-.1a1.289 1.289 0 0 1-.668-.672 1.215 1.215 0 0 1-.1-.489zm.182 0a1.103 1.103 0 0 0 .314.763c.098.097.211.174.341.23.13.056.27.085.42.085a1.053 1.053 0 0 0 .758-.315c.096-.098.173-.211.23-.343.056-.13.084-.27.084-.42a1.06 1.06 0 0 0-.314-.761 1.053 1.053 0 0 0-.759-.316 1.054 1.054 0 0 0-.76.316 1.099 1.099 0 0 0-.314.761zm.8.722h-.182v-1.453h.557c.164 0 .281.034.352.103.068.069.104.168.104.3 0 .068-.01.125-.03.173a.358.358 0 0 1-.196.197.635.635 0 0 1-.138.043l.43.637h-.205l-.432-.637h-.26v.637zm0-.799h.233c.05 0 .1-.002.149-.005a.426.426 0 0 0 .133-.031.246.246 0 0 0 .097-.075.235.235 0 0 0 .037-.14.226.226 0 0 0-.029-.118.225.225 0 0 0-.075-.072.32.32 0 0 0-.104-.038.566.566 0 0 0-.117-.012h-.323v.491zm-46.745-6.412c0-.346.068-.833.162-1.227l.744-4c.326-1.782.187-2.591-1.07-2.591-.72 0-1.325.254-2.279.786l-1.371 8.142H5.952l1.071-6.338c.301-1.804.232-2.59-1-2.59-.744 0-1.326.254-2.28.786l-1.371 8.142H0l1.465-8.582L0 9.767v-.232l3.953-1.156.093.07-.326 2.15.094.07C5.394 9.235 6.65 8.518 7.79 8.518c1.278 0 1.814.925 1.836 2.105l.093.07c1.558-1.435 2.86-2.175 4.023-2.175 1.604 0 2.116 1.457 1.675 3.793l-.907 4.742c-.164.926.046 1.204 2.116 1.25l.068.162c-1.046.647-2.208 1.087-3.115 1.087-1.07 0-1.464-.578-1.464-1.365"></path><path d="M15.13 22.333c0-.754.44-1.416 1.188-1.416.945 0 1.451 1.028 1.407 2.284.968-.548 2.068-1.919 2.816-3.358-.616-3.265-1.672-6.988-2.31-8.587-.243-.594-.462-.822-.88-.822-.264 0-.704.092-1.364.343l-.132-.183c.858-1.096 1.848-2.033 2.75-2.033.77 0 1.166.389 1.54 1.142.572 1.097 1.386 4.134 1.826 7.217h.109a71.802 71.802 0 0 0 1.98-8.542h.176l2.023 1.006c-1.957 4.658-4.31 10.985-6.774 13.475-.858.867-1.606 1.347-2.486 1.347-1.165 0-1.87-.868-1.87-1.873m19.511-9.431h-1.71v-9.16h1.711V1.454h-7.983v2.29h1.71v9.16l2.281 2.29h3.992zm5.703 2.29h3.991l2.282-2.29V3.744h1.71v-2.29h-7.983v2.29h1.71v9.158h-1.71z"></path><path d="M48.469 17.339l4.99-5.01h2.28V10.04h-8.554v2.29h.856l-3.421 3.434h-4.847V12.33h1.71v-2.29H33.5v2.29h1.71v10.303H33.5v2.29h7.984v-2.29h-1.71V19.2h4.847l3.42 3.434h-.855v2.29h8.554v-2.29h-1.996z"></path><path d="M39.201.308v4.58h1.711v4.007H34.07V4.888h1.712V.308H25.516v4.58h1.711v8.587l2.85 2.862h3.992v5.152h-1.71v4.58h10.264v-4.58h-1.71v-1.146h3.136l1.996 2.005v3.721H56.88v-4.58h-2.567l-4.133-4.15 3.848-3.864h2.852v-4.58h-9.124V4.888h1.71V.308H39.2zm.571.573h9.125v3.435h-1.711v5.152h9.123v3.434h-2.565l-4.42 4.437 4.705 4.722h2.28v3.436h-9.693V22.06l-2.282-2.29h-3.991v2.29h1.71v3.436h-9.125V22.06h1.712v-6.297h-4.278l-2.566-2.576V4.316h-1.711V.88h9.124v3.435H33.5v5.152h7.985V4.316h-1.712V.88z"></path></g></svg><span class="show-for-sr">My UK</span></a></div></div></div></div>',

		ukltophdr_sitehdr:
			'<div id="uklsitelvl"><div class="mtopmenu"><span id="mhead"><span id="getmhome"></span></span><div class="item">  <a href="javascript:void(0);" class="icon" onclick="toggleMobile()"><span class="menu_button_more"></span></a></div></div><div class="ukl-ext-clamp"><header id="MainHeader" class="global-header "><div class="slab"><div class="slab__wrapper"><div class="global-header"><div class="global-header-layout"><span id="gethome"></span><span id="gethdrw"></span> <div class="nav-links"><div class="link" id="link1"><span id="getlink1"></span></div><div class="link" id="link2"><span id="getlink2"></span></div><div class="link" id="link3"><span id="getlink3"></span></div><div class="link" id="link4"><span id="getlink4"></span></div></div><div class="utility-links"><div id="springsrch"><form action="https://libguides.uky.edu/srch.php" role="search"><label id="springsrchLabel" for="searchTerm"><input type="text" id="searchTerm" name="q" placeholder="Search our Guides">&nbsp;<button type="submit" id="springbtn">Search</button></form></div><div class="link" id="link5"><span id="getlink5"></span></div><div class="link" id="link6"><span id="getlink6"></span></div></div></div></div></div></div></header></div>',

		ukltophdr_low_alert:
			'<div class="site-ukl-alert" id="uklalert"><div class="slab__wrapper"><div class="icon-wrapper"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#EFF4FD"></circle><rect x="22" y="12" width="4.54545" height="4.54545" fill="#1E8AFF"></rect><rect x="22" y="19.9545" width="4.54545" height="17.0455" fill="#1E8AFF"></rect></svg></div><div><h2 id="uklalerttlt"></h2><div class="message"><p><span id="uklalertmsg"></span>&nbsp;&nbsp;<span id="uklalertlink"></span></p></div></div></div></div>',

		ukltophdr_survey:
			'<div class="site-ukl-survey" id="uklsurvey"><div class="slab__wrapper"><div id="ukl-survey-foil"><h2 id="uklsurveytlt"></h2><div class="message"><span id="uklsurveymsg"></span><span id="uklsurveylink"></span></div></div><div id="ukl-survey-close" class="icon-wrapper"><a href="javascript:void(0);"><span id="survey_button_less"></span></a></div></div><div id="ukl-survey-close-mobile" class="icon-wrapper"><a href="javascript:void(0);"><span id="survey_button_less_mobile"></span></a></div></div>',

		ukltophdr_end_clamp: "</div>",
	};
}

/* ----------------------------------------------------------------- */
/* ----------------   DO NOT EDIT BELOW THIS LINE!  ---------------- */
/* ----------------------------------------------------------------- */

function cookie() {
	/* Cookie stuff for Survey Message */
	const cookie_name = "UKLSurvey";

	/* Function to set the cookie */
	function CookieSet(cName, cValue, cPath, cExpires) {
		encodeURIComponent(cValue);
		if (cExpires === "") {
			const cdate = new Date().toLocaleString();
			cExpires = cdate;
		}
		if (cPath !== "") {
			cPath = ";Path=" + cPath;
		}
		document.cookie = `${cName}=${encodeURIComponent(
			cValue
		)};expires=${cExpires}${cPath}`;
	}

	/* Functions to hide elements */
	function hideElements() {
		document.getElementById("uklsurvey").style.display = "none";
		document.getElementById("ukl-survey-close").style.display = "none";
	}

	function hideMElements() {
		document.getElementById("uklsurvey").style.display = "none";
		document.getElementById("ukl-survey-close-mobile").style.display = "none";
	}

	/* Functions to display elements */
	function showElements() {
		document.getElementById("uklsurvey").style.display = "block";
		document.getElementById("ukl-survey-close").style.display = "block";
	}

	function showMElements() {
		document.getElementById("uklsurvey").style.display = "block";
		document.getElementById("ukl-survey-close-mobile").style.display = "block";
	}

	const value_or_null = (document.cookie.match(
		"^(?:.*;)?\\s*" + cookie_name + "\\s*=\\s*([^;]+)(?:.*)?$"
	) || [, null])[1];

	const MsThreshold = 300000;

	/* Function to compare two dates by milisections to check threshold */
	/* Set new cookie and display elements if threshold is met, else hide elements */
	window.fireCookie = function () {
		if (diffInMs > MsThreshold) {
			CookieSet("UKLSurvey", "", "/", "");
			//console.log("setting new cookie");
			hideElements();
		} else if (value_or_null == null) {
			CookieSet("UKLSurvey", "", "/", "");
			//console.log("setting first cookie");
			hideElements();
		}
	};

	window.chkThreshold = function () {
		/* If time threshold not met, hide elements */
		if (typeof diffInMs !== "undefined") {
			if (diffInMs < MsThreshold) {
				hideElements();
			} else {
				showElements();
			}
		}
	};

	const expiredate = value_or_null && value_or_null.replace("expires=", "");

	const curdate = new Date().toLocaleString();

	/* Convert date strings to date objects */
	let format_expiredate = Date.parse(expiredate);
	let format_curdate = Date.parse(curdate);

	/* Calculate the difference in milliseconds */
	const diffInMs = format_curdate - format_expiredate;
}

function init() {
	/* toggle function for mobile secondary header */
	window.toggleMobile = function () {
		/* toggle visibility of "MainHeader" in mobile */
		try {
			const div = document.getElementById("MainHeader");

			/* div element exists? */
			if (!div) {
				throw new Error("Div element with id 'MainHeader' not found");
			}

			/* toggle visibility div */
			if (div.style.display === "block") {
				div.style.display = "none";
			} else {
				div.style.display = "block";
			}
		} catch (error) {
			/* log the error */
			console.error(error);
		}

		/* toggle "MainHeader" when window is resized */
		window.addEventListener("resize", () => {
			const elem = document.querySelector("#MainHeader");
			const styleStr = elem.getAttribute("style");
			style = styleStr.replace("display: ", "").replace(";", "");
			if (window.innerWidth > 768 && style == "none") {
				document.getElementById("MainHeader").style.display = "block";
				if (document.querySelector(".menu_button_less")) {
					document
						.querySelector(".menu_button_less")
						.classList.add("menu_button_more");
				}
			} else if (
				window.innerWidth < 768 &&
				document.querySelector(".menu_button_more")
			) {
				document.getElementById("MainHeader").style.display = "none";
			}
		});
	};
}

function insertHTML(config, hdr) {
	let { hdr_simple, include, hdr_alert_include } = hdr;

	let {
		DangerMsgToggle,
		WarningMsgToggle,
		AnnouncementMsgToggle,
		SurveyMsgToggle,
		SurveyMsgBackground,
		SurveyMsgColor,
		ukltophdr_start_clamp,
		ukltophdr_top_alert,
		ukltophdr_univlvl,
		ukltophdr_sitehdr,
		ukltophdr_low_alert,
		ukltophdr_survey,
		ukltophdr_end_clamp,
	} = config;

	const ukDiv = document.createElement("div");
	ukDiv.id = "ukheader";
	ukDiv.innerHTML = chooseRender();
	document.body.insertBefore(ukDiv, document.body.firstChild);
	function chooseRender() {
		let headerContent = "";
		if (hdr_simple == 1) {
			headerContent += ukltophdr_start_clamp;
			headerContent += ukltophdr_univlvl;
			headerContent += include === 1 ? ukltophdr_sitehdr : "";
			headerContent += hdr_alert_include === 1 ? ukltophdr_low_alert : "";
			headerContent += ukltophdr_end_clamp;
			return headerContent;
		}
		headerContent += ukltophdr_start_clamp;
		headerContent +=
			DangerMsgToggle == "on" ||
			WarningMsgToggle == "on" ||
			AnnouncementMsgToggle == "on"
				? ukltophdr_top_alert
				: "";
		headerContent += ukltophdr_univlvl;
		headerContent += include === 1 ? ukltophdr_sitehdr : "";
		headerContent += hdr_alert_include ? ukltophdr_low_alert : "";
		headerContent += SurveyMsgToggle === "on" ? ukltophdr_survey : "";
		headerContent += ukltophdr_end_clamp;
		return headerContent;
	}
}

function insertContentAndStyle(config, hdr) {
	let {
		hdr_simple,
		include,
		mhdr_home_label,
		mhdr_home_url,
		bases,
		hdr_srch_include,
		hdr_width,
		hdr_alert_include,
		hdr_alert_title,
		hdr_alert_msg,
		hdr_alert_url_label,
		hdr_alert_url,
	} = hdr;

	let {
		DangerTitleText,
		DangerMsgText,
		DangerMsgToggle,
		DangerMsgBackground,
		DangerMsgColor,
		DangerLinkColor,
		WarningTitleText,
		WarningMsgText,
		WarningMsgToggle,
		WarningMsgBackground,
		WarningMsgColor,
		WarningLinkColor,
		AnnouncementTitleText,
		AnnouncementMsgText,
		AnnouncementMsgToggle,
		AnnouncementMsgColor,
		AnnouncementMsgBackground,
		SurveyTitleText,
		SurveyMsgText,
		SurveyMsgLinkLabel,
		SurveyMsgLinkURL,
		SurveyMsgToggle,
	} = config;

	/* mobile header? */
	if (include) {
		if (mhdr_home_url) {
			document.getElementById("getmhome").innerHTML =
				'<a href="' +
				mhdr_home_url +
				'" class="section-heading">' +
				mhdr_home_label +
				"</a>";
		} else if (mhdr_home_label) {
			document.getElementById("getmhome").innerHTML = mhdr_home_label;
		}
		/* insert content from meta into html */
		for (const base of bases) {
			let title = base.title;
			let label = base.label;
			let button = document.getElementById("get" + base.label);
			if (base.hasOwnProperty("children")) {
				const menuTitle = document.createElement("h3");
				button.appendChild(menuTitle).innerText = base.title;
				console.log(button);

				let menu = document.createElement("ul");
				menu.classList.add("hidden");

				base.children.forEach((child) => {
					menu.appendChild(populateMenu(child));
				});
				button.appendChild(menu);
				button.addEventListener("click", () => {
					menu.classList.toggle("hidden");
				});
			} else {
				let url = base.url;
				if (label) {
					button.innerHTML =
						'<a href="' + url + '" class="section-heading">' + title + "</a>";
				} else {
					button.innerHTML = label;
				}
			}
		}

		const div2 = document.querySelector(".menu_button_more");
		div2.addEventListener("click", function () {
			div2.classList.toggle("menu_button_more");
			div2.classList.toggle("menu_button_less");
		});
		/* toggle visibility of Springshare search box */
		if (hdr_srch_include == 1) {
			document.getElementById("springsrch").style.display = "block";
			document.getElementById("link5").style.display = "none";
			document.getElementById("link6").style.display = "none";
		}
	}
	/* toggles for top level alert messages but not if simple header is set */

	if (hdr_simple === 0) {
		if (DangerMsgToggle == "on") {
			document.getElementById("tltalert").innerHTML = DangerTitleText;
			document.getElementById("msgalert").innerHTML = DangerMsgText;
			document.getElementById("top-alert").style.display = "block";
			document.getElementById("top-alert").style.background =
				DangerMsgBackground;
			document.getElementById("top-alert").style.color = DangerMsgColor;
			document.getElementById("ukalertlink").style.color = DangerLinkColor;
		} else if (WarningMsgToggle == "on") {
			document.getElementById("tltalert").innerHTML = WarningTitleText;
			document.getElementById("msgalert").innerHTML = WarningMsgText;
			document.getElementById("top-alert").style.display = "block";
			document.getElementById("top-alert").style.background =
				WarningMsgBackground;
			document.getElementById("top-alert").style.color = WarningMsgColor;
			document.getElementById("ukalertlink").style.color = WarningLinkColor;
		} else if (AnnouncementMsgToggle == "on") {
			document.getElementById("tltalert").innerHTML = AnnouncementTitleText;
			document.getElementById("msgalert").innerHTML = AnnouncementMsgText;
			document.getElementById("top-alert").style.display = "block";
			document.getElementById("top-alert").style.background =
				AnnouncementMsgBackground;
			document.getElementById("top-alert").style.color = AnnouncementMsgColor;
			// document.getElementById("ukalertlink").style.color = AnnouncementLinkColor;
		}
		if (SurveyMsgToggle == "on") {
			document.getElementById("uklsurveytlt").innerHTML = SurveyTitleText;
			document.getElementById("uklsurveymsg").innerHTML = SurveyMsgText;
			document.getElementById("uklsurveylink").innerHTML +=
				"<a href='" + SurveyMsgLinkURL + "'>" + SurveyMsgLinkLabel + "</a>";
			/* close survey message */
			const div3 = document.getElementById("survey_button_less");
			if (div3) {
				div3.addEventListener("click", function () {
					document.getElementById("uklsurvey").style.display = "none";
				});

				/* fire cookie */
				document
					.getElementById("ukl-survey-close")
					.addEventListener("click", fireCookie);
				chkThreshold();
			}

			/* close survey message in mobile */
			const div4 = document.getElementById("survey_button_less_mobile");
			if (div4) {
				div4.addEventListener("click", function () {
					document.getElementById("uklsurvey").style.display = "none";
				});

				/* fire cookie in mobile */
				document
					.getElementById("ukl-survey-close-mobile")
					.addEventListener("click", fireCookie);
				chkThreshold();
			}
		}
	}

	/* toggle for survey message but not if simple header is set */

	/* toggle visibility of lower operator controlled alert message */
	if (hdr_alert_include == 1) {
		document.getElementById("uklalert").style.display = "block";
		document.getElementById("uklalerttlt").innerHTML = hdr_alert_title;
		document.getElementById("uklalertmsg").innerHTML = hdr_alert_msg;
		document.getElementById("uklalertlink").innerHTML +=
			"<a href='" + hdr_alert_url + "'>" + hdr_alert_url_label + "</a>";
	}

	/* set custom header width */
	if (hdr_width > 72) {
		const wrapper = document.getElementsByClassName("slab__wrapper");
		if (typeof wrapper[0] != "undefined") {
			wrapper[0].style.maxWidth = hdr_width + "rem";
		}
		if (typeof wrapper[1] != "undefined") {
			wrapper[1].style.maxWidth = hdr_width + "rem";
		}
		if (typeof wrapper[2] != "undefined") {
			wrapper[2].style.maxWidth = hdr_width + "rem";
		}
		if (typeof wrapper[3] != "undefined") {
			wrapper[3].style.maxWidth = hdr_width + "rem";
		}
		if (typeof wrapper[4] != "undefined") {
			wrapper[4].style.maxWidth = hdr_width + "rem";
		}
	}
}

function populateMenu(menuItem) {
	const li = document.createElement("li");
	const a = document.createElement("a");
	a.href = menuItem.url;
	a.textContent = menuItem.title;
	li.appendChild(a);
	return li;
}
