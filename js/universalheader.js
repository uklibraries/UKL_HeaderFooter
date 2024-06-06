import globalConfig from "../js/config/global/globalConfig.js";
const base_path = document.querySelector("#headerScript").dataset.base_path;
const module_path = `./config/sites/${base_path}/${base_path}Config.js`;

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
	AnnouncementMsgToggle,
	AnnouncementMsgBackground,
	AnnouncementMsgColor,
	AnnouncementLinkColor,
	AnnouncementMsgText,
	SurveyMsgToggle,
} = globalConfig;

import(module_path).then((module) => {
	const localConfig = module.default;
	insertHTML(localConfig);
	insertContentAndStyle(localConfig);
});

const cookieName = "ukl-survey";
// 300000 = 5 minutes
const cookieExpiryMS = 300000;
const now = new Date();
const cookieExists = () => {
	return document.cookie.split(";").some((cookie) => {
		return cookie.trim().startsWith(cookieName + "=");
	});
};

const headerStrings = {
	ukltophdr_start_clamp: '<div class="ukl-ext-clamp">',
	ukltophdr_top_alert:
		'<div id="ukl-top-alert" class="banner-alert"><div class="ukl-slab"><div class="ukl-slab__wrapper"><span class="ukl-icon-label"><span class="ic ic--alert" aria-hidden="true"></span><span id="ukl-tltalert"></span></span><div class="ukl-message"><p id="ukl-msgalert"></p><p>More at&nbsp;<a href="https://www.uky.edu/alert" id="ukl-global-alert-link" title="www.uky.edu/alert">www.uky.edu/alert</a></p><p>&nbsp;</p></div></div></div></div>',
	ukltophdr_univlvl:
		'<div class="ukl-slab ukl-universal-header"><div class="ukl-slab__wrapper"><div class="ukl-universal-header__layout"><div class="ukl-universal-breadcrumb" role="region" aria-label="Breadcrumb"><ul><li><a class="ukl-link--fancy-reverse" href="https://www.uky.edu" title="Back to University of Kentucky home page">University of Kentucky <sub>&#174;</sub></a></li><li><a class="ukl-link--sans" href="https://libraries.uky.edu">UK Libraries</a></li></ul></div><div class="ukl-universal-nav" role="region" aria-label="Navigation"><div class="ukl-show-for-sr" id="ukl-UniversalNavLabel">University-wide Navigation</div><a class="ukl-my-uk-logo" href="https://myuk.uky.edu" title="Log into the myUK portal"><svg focusable="false" aria-hidden="true" viewBox="0 0 61 27" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="evenodd"><path d="M57.878 24.676c0-.174.034-.337.1-.49a1.29 1.29 0 0 1 .668-.669c.152-.067.315-.1.488-.1s.336.033.488.1a1.29 1.29 0 0 1 .668.67c.066.152.1.315.1.49 0 .174-.034.336-.1.488a1.284 1.284 0 0 1-.668.671c-.152.067-.315.101-.488.101s-.336-.034-.488-.1a1.289 1.289 0 0 1-.668-.672 1.215 1.215 0 0 1-.1-.489zm.182 0a1.103 1.103 0 0 0 .314.763c.098.097.211.174.341.23.13.056.27.085.42.085a1.053 1.053 0 0 0 .758-.315c.096-.098.173-.211.23-.343.056-.13.084-.27.084-.42a1.06 1.06 0 0 0-.314-.761 1.053 1.053 0 0 0-.759-.316 1.054 1.054 0 0 0-.76.316 1.099 1.099 0 0 0-.314.761zm.8.722h-.182v-1.453h.557c.164 0 .281.034.352.103.068.069.104.168.104.3 0 .068-.01.125-.03.173a.358.358 0 0 1-.196.197.635.635 0 0 1-.138.043l.43.637h-.205l-.432-.637h-.26v.637zm0-.799h.233c.05 0 .1-.002.149-.005a.426.426 0 0 0 .133-.031.246.246 0 0 0 .097-.075.235.235 0 0 0 .037-.14.226.226 0 0 0-.029-.118.225.225 0 0 0-.075-.072.32.32 0 0 0-.104-.038.566.566 0 0 0-.117-.012h-.323v.491zm-46.745-6.412c0-.346.068-.833.162-1.227l.744-4c.326-1.782.187-2.591-1.07-2.591-.72 0-1.325.254-2.279.786l-1.371 8.142H5.952l1.071-6.338c.301-1.804.232-2.59-1-2.59-.744 0-1.326.254-2.28.786l-1.371 8.142H0l1.465-8.582L0 9.767v-.232l3.953-1.156.093.07-.326 2.15.094.07C5.394 9.235 6.65 8.518 7.79 8.518c1.278 0 1.814.925 1.836 2.105l.093.07c1.558-1.435 2.86-2.175 4.023-2.175 1.604 0 2.116 1.457 1.675 3.793l-.907 4.742c-.164.926.046 1.204 2.116 1.25l.068.162c-1.046.647-2.208 1.087-3.115 1.087-1.07 0-1.464-.578-1.464-1.365"></path><path d="M15.13 22.333c0-.754.44-1.416 1.188-1.416.945 0 1.451 1.028 1.407 2.284.968-.548 2.068-1.919 2.816-3.358-.616-3.265-1.672-6.988-2.31-8.587-.243-.594-.462-.822-.88-.822-.264 0-.704.092-1.364.343l-.132-.183c.858-1.096 1.848-2.033 2.75-2.033.77 0 1.166.389 1.54 1.142.572 1.097 1.386 4.134 1.826 7.217h.109a71.802 71.802 0 0 0 1.98-8.542h.176l2.023 1.006c-1.957 4.658-4.31 10.985-6.774 13.475-.858.867-1.606 1.347-2.486 1.347-1.165 0-1.87-.868-1.87-1.873m19.511-9.431h-1.71v-9.16h1.711V1.454h-7.983v2.29h1.71v9.16l2.281 2.29h3.992zm5.703 2.29h3.991l2.282-2.29V3.744h1.71v-2.29h-7.983v2.29h1.71v9.158h-1.71z"></path><path d="M48.469 17.339l4.99-5.01h2.28V10.04h-8.554v2.29h.856l-3.421 3.434h-4.847V12.33h1.71v-2.29H33.5v2.29h1.71v10.303H33.5v2.29h7.984v-2.29h-1.71V19.2h4.847l3.42 3.434h-.855v2.29h8.554v-2.29h-1.996z"></path><path d="M39.201.308v4.58h1.711v4.007H34.07V4.888h1.712V.308H25.516v4.58h1.711v8.587l2.85 2.862h3.992v5.152h-1.71v4.58h10.264v-4.58h-1.71v-1.146h3.136l1.996 2.005v3.721H56.88v-4.58h-2.567l-4.133-4.15 3.848-3.864h2.852v-4.58h-9.124V4.888h1.71V.308H39.2zm.571.573h9.125v3.435h-1.711v5.152h9.123v3.434h-2.565l-4.42 4.437 4.705 4.722h2.28v3.436h-9.693V22.06l-2.282-2.29h-3.991v2.29h1.71v3.436h-9.125V22.06h1.712v-6.297h-4.278l-2.566-2.576V4.316h-1.711V.88h9.124v3.435H33.5v5.152h7.985V4.316h-1.712V.88z"></path></g></svg><span class="ukl-show-for-sr">My UK</span></a></div></div></div></div>',
	ukltophdr_sitehdr:
		'<div id="ukl-site-lvl"><div class="ukl-ext-clamp"><header id="ukl-main-header" class="ukl-global-header "><div class="ukl-slab"><div class="ukl-slab__wrapper"><div class="ukl-global-header"><div class="ukl-global-header-layout"><div id="ukl-gethome"></div><span id="ukl-gethdrw"></span> <div class="ukl-nav-links"><div class="ukl-link" id="ukl-link1"><div id="ukl-getlink1"></div></div><div class="ukl-link" id="ukl-link2"><div id="ukl-getlink2"></div></div><div class="ukl-link" id="ukl-link3"><div id="ukl-getlink3"></div></div><div class="ukl-link" id="ukl-link4"><div id="ukl-getlink4"></div></div></div><div class="ukl-utility-links"><div id="ukl-spring-search-label"><form action="https://libguides.uky.edu/srch.php" role="search"><label id="ukl-spring-search-label" for="searchTerm"><input type="text" id="ukl-search-term" name="q" placeholder="Search our Guides">&nbsp;</label><button type="submit" id="ukl-spring-btn">Search</button></form></div><div class="ukl-link" id="ukl-link5"><div id="ukl-getlink5"></div></div><div class="ukl-link" id="ukl-link6"><div id="ukl-getlink6"></div></div></div></div></div></div></div></header></div>',
	ukltophdr_low_alert:
		'<div class="ukl-site-alert" id="ukl-alert"><div class="ukl-slab__wrapper"><div class="ukl-icon-wrapper"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#EFF4FD"></circle><rect x="22" y="12" width="4.54545" height="4.54545" fill="#1E8AFF"></rect><rect x="22" y="19.9545" width="4.54545" height="17.0455" fill="#1E8AFF"></rect></svg></div><div><h2 id="ukl-alerttlt"></h2><div class="ukl-message"><p><span id="ukl-alertmsg"></span>&nbsp;&nbsp;<span id="ukl-alertlink"></span></p></div></div></div></div>',
	ukltophdr_survey:
		'<div class="ukl-site-survey" id="ukl-survey"><div class="ukl-slab__wrapper"><div id="ukl-survey-foil"><h2 id="ukl-surveytlt"></h2><div class="ukl-message"><span id="ukl-surveymsg"></span><span id="ukl-surveylink"></span></div></div><div id="ukl-survey-close" class="ukl-icon-wrapper"><button class="ukl-surveybtn" id="ukl-btnCloseSurvey" title="close Survey"><span id="ukl-survey_button_less"></span></button></div></div></div>',
	ukltophdr_end_clamp: "</div>",
};

function init() {
	document.querySelector(".ukl-menu_button").addEventListener("click", () => {
		document.querySelector(".ukl-nav-links").classList.toggle("ukl-hidden");
		document.querySelector(".ukl-utility-links").classList.toggle("ukl-hidden");
	});
	window.addEventListener("resize", handleResize);
	handleResize();
}

function insertHTML(localConfig) {
	let { hdr_simple, include, hdr_alert_include } = localConfig;

	let {
		ukltophdr_start_clamp,
		ukltophdr_top_alert,
		ukltophdr_univlvl,
		ukltophdr_sitehdr,
		ukltophdr_low_alert,
		ukltophdr_survey,
		ukltophdr_end_clamp,
	} = headerStrings;

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
		headerContent += hdr_alert_include === 1 ? ukltophdr_low_alert : "";
		headerContent += SurveyMsgToggle === "on" ? ukltophdr_survey : "";
		headerContent += ukltophdr_end_clamp;
		return headerContent;
	}
}

function insertContentAndStyle(localConfig) {
	let {
		hdr_simple,
		include,
		home_label,
		home_url,
		bases,
		hdr_srch_include,
		hdr_width,
		hdr_alert_include,
		hdr_alert_title,
		hdr_alert_msg,
		hdr_alert_url_label,
		hdr_alert_url,
		custom_logo,
		image_path,
	} = localConfig;

	let {
		SurveyTitleText,
		SurveyMsgText,
		SurveyMsgLinkLabel,
		SurveyMsgLinkURL,
		SurveyMsgToggle,
		SurveyMsgBackground,
		SurveyMsgColor,
	} = globalConfig;

	if (include) {
		for (const base of bases) {
			let title = base.title;
			let label = base.label;
			let button = document.getElementById("ukl-get" + base.label);
			button.classList.add("ukl-dropdown");
			button.setAttribute("tabIndex", "0");
			const i = document.createElement("i");
			button.appendChild(i);
			i.setAttribute("tabIndex", "0");
			i.classList.add("ukl-db2");

			if (base.hasOwnProperty("children")) {
				const menuTitle = document.createElement("span");
				menuTitle.classList.add("ukl-dropbtn", "ukl-c");
				const menu = document.createElement("ul");

				button.appendChild(menuTitle).innerText = base.title;
				menu.classList.add("ukl-dropdown-content", "ukl-c");

				base.children.forEach((child) => {
					menu.appendChild(createListItem(child));
				});
				button.appendChild(menu);
			} else if (label == "home") {
				createLogoHeaderWithMobileButton(
					button,
					home_url,
					home_label,
					custom_logo,
					image_path
				);
			} else {
				let url = base.url;
				if (label) {
					button.innerHTML =
						'<a href="' +
						url +
						'" class="ukl-section-heading">' +
						title +
						"</a>";
				} else {
					button.innerHTML = label;
				}
			}
		}

		init();

		const div2 = document.querySelector(".ukl-menu_button_more");
		div2.addEventListener("click", function () {
			div2.classList.toggle("ukl-menu_button_more");
			div2.classList.toggle("ukl-menu_button_less");
		});
		/* toggle visibility of Springshare search box */
		if (hdr_srch_include === 1) {
			document.getElementById("ukl-spring-search-label").style.display =
				"block";
			document.getElementById("ukl-link5").style.display = "none";
			document.getElementById("ukl-link6").style.display = "none";
		} else {
			document.getElementById("ukl-spring-search-label").style.display = "none";
		}
	}
	/* toggles for top level alert messages but not if simple header is set */

	if (hdr_simple === 0) {
		setAnnouncement();
		if (SurveyMsgToggle === "on") {
			document.getElementById("ukl-surveytlt").innerHTML = SurveyTitleText;
			document.getElementById("ukl-surveymsg").innerHTML = SurveyMsgText;
			document.getElementById("ukl-surveylink").innerHTML +=
				"<a href='" + SurveyMsgLinkURL + "'>" + SurveyMsgLinkLabel + "</a>";
			document.getElementById("ukl-survey").style.backgroundColor =
				SurveyMsgBackground;
			document.querySelector(".ukl-site-survey").style.color = SurveyMsgColor;
			/* close survey message */
			const div3 = document.getElementById("ukl-survey_button_less");
			if (cookieExists()) {
				document.getElementById("ukl-survey").style.display = "none";
			}
			if (div3) {
				div3.addEventListener("click", function () {
					document.getElementById("ukl-survey").style.display = "none";
				});
				/* fire cookie */
				document
					.getElementById("ukl-survey-close")
					.addEventListener("click", setCookie);
			}
		}
	}

	if (hdr_alert_include == 1) {
		document.getElementById("ukl-alert").style.display = "block";
		document.getElementById("ukl-alerttlt").innerHTML = hdr_alert_title;
		document.getElementById("ukl-alertmsg").innerHTML = hdr_alert_msg;
		document.getElementById("ukl-alertlink").innerHTML +=
			"<a href='" + hdr_alert_url + "'>" + hdr_alert_url_label + "</a>";
	}

	/* set custom header width */
	if (hdr_width > 72) {
		const wrapper = document.getElementsByClassName("ukl-slab__wrapper");
		for (let i = 0; i < wrapper.length; i++) {
			if (typeof wrapper[i] !== "undefined") {
				wrapper[i].style.maxWidth = hdr_width + "em";
			}
		}
	}
}

function createListItem(menuItem) {
	const li = document.createElement("li");
	li.classList.add("ukl-mi");
	const a = document.createElement("a");
	a.href = menuItem.url;
	a.textContent = menuItem.title;
	li.appendChild(a);
	return li;
}

function setAnnouncement() {
	if (DangerMsgToggle == "on") {
		document.getElementById("ukl-tltalert").innerHTML = DangerTitleText;
		document.getElementById("ukl-msgalert").innerHTML = DangerMsgText;
		document.getElementById("ukl-top-alert").style.display = "block";
		document.getElementById("ukl-top-alert").style.background =
			DangerMsgBackground;
		document.getElementById("ukl-top-alert").style.color = DangerMsgColor;
		document.getElementById("ukl-global-alert-link").style.color =
			DangerLinkColor;
	} else if (WarningMsgToggle == "on") {
		document.getElementById("ukl-tltalert").innerHTML = WarningTitleText;
		document.getElementById("ukl-msgalert").innerHTML = WarningMsgText;
		document.getElementById("ukl-top-alert").style.display = "block";
		document.getElementById("ukl-top-alert").style.background =
			WarningMsgBackground;
		document.getElementById("ukl-top-alert").style.color = WarningMsgColor;
		document.getElementById("ukl-global-alert-link").style.color =
			WarningLinkColor;
	} else if (AnnouncementMsgToggle == "on") {
		document.getElementById("ukl-tltalert").innerHTML = AnnouncementTitleText;
		document.getElementById("ukl-msgalert").innerHTML = AnnouncementMsgText;
		document.getElementById("ukl-top-alert").style.display = "block";
		document.getElementById("ukl-top-alert").style.background =
			AnnouncementMsgBackground;
		document.getElementById("ukl-top-alert").style.color = AnnouncementMsgColor;
		document.getElementById("ukl-global-alert-link").style.color =
			AnnouncementLinkColor;
	}
}

function createLogoHeaderWithMobileButton(
	parent,
	url,
	title,
	custom_logo,
	image_path
) {
	let container = document.createElement("a");
	container.href = url;
	let image = document.createElement(custom_logo === true ? "img" : "div");
	let span = document.createElement("span");
	if (custom_logo === true) {
		image.src = `${image_path}`;
		image.alt = title;
	} else {
		image.innerHTML = `<svg class="ukl-UK-Logo-Header" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 85 69"xmlns="http://www.w3.org/2000/svg"aria-hidden="true"><g fill="currentColor" fill-rule="evenodd"><path d="M24.466 33.753H19.88V9.234h4.587V3.106H3.056v6.128h4.589v24.52l6.118 6.129h10.703zm15.292 6.13h10.705l6.117-6.13V9.236h4.586v-6.13H39.758v6.13h4.588v24.517h-4.588z"/><path d="M61.55 45.628l13.38-13.407h6.117v-6.13H58.108v6.13h2.294l-9.174 9.193H38.23v-9.193h4.588v-6.13h-21.41v6.13h4.587v27.581h-4.587v6.129h21.41v-6.129H38.23v-9.194h12.998l9.173 9.194h-2.293v6.129h22.939v-6.129h-5.353z" /><path d="M36.7.041V12.3h4.588v10.728H22.937V12.299h4.589V.041H0V12.3h4.587v22.985h.003l-.003.002 7.646 7.66h10.705v13.792h-4.589v12.26h27.525v-12.26h-4.586v-3.066h8.41l5.353 5.365v9.96h29.052l.002-12.259h-6.882L66.138 45.63l10.32-10.343h7.647l-.002-12.26-24.465.001V12.299h4.587V.041H36.701zm1.528 1.533h24.469v9.195h-4.589v13.79h24.468v9.193h-6.882L63.843 45.63 76.46 58.27h6.116v9.196H56.58V58.27h-.001l-6.118-6.13H39.758v6.13h4.587v9.196H19.878V58.27h4.59V41.415h-11.47l-6.883-6.897v-23.75H1.528V1.574h24.467v9.195h-4.588v13.79h21.41v-13.79h-4.59V1.574z"/></g></svg>`;
		span.innerText = title;
	}

	let mobileMenuButton = document.createElement("div");
	mobileMenuButton.classList.add("ukl-menu_button_more", "ukl-menu_button");
	mobileMenuButton.setAttribute("tabindex", 0);

	const i = document.createElement("i");
	i.setAttribute("tabIndex", "0");
	i.classList.add("ukl-db2");

	parent.appendChild(container);
	container.appendChild(i);
	container.appendChild(image);
	container.appendChild(span);
	parent.appendChild(mobileMenuButton);
}

function handleResize() {
	if (window.innerWidth > 1023) {
		document.querySelector(".ukl-menu_button").classList.add("ukl-hidden");
		document.querySelector(".ukl-nav-links").classList.remove("ukl-hidden");
		document.querySelector(".ukl-utility-links").classList.remove("ukl-hidden");
	} else {
		if (document.querySelector(".ukl-nav-links")) {
			document
				.querySelector(".ukl-menu_button")
				.classList.add("ukl-menu_button_more");
			document
				.querySelector(".ukl-menu_button")
				.classList.remove("ukl-menu_button_less");
		}
		document.querySelector(".ukl-nav-links").classList.add("ukl-hidden");
		document.querySelector(".ukl-utility-links").classList.add("ukl-hidden");
		document.querySelector(".ukl-menu_button").classList.remove("ukl-hidden");
	}
}

function setCookie() {
	const cExpires = new Date(now.getTime() + cookieExpiryMS).toUTCString();
	document.cookie = `${cookieName}=;expires=${cExpires};Path=/`;
}
