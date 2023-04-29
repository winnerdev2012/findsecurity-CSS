import { PERK_TYPES, PAGE_END_KEYS } from "./StatusUtil";

export const ELEMENTS = {
	HEADER: "header",
	CAMPAIGN: "campaign",
	PERK: "perk",
	LINKS: "links",
	DESCRIPTION: "show_campaign_description",
	MODULE: "module",
	END: "end",
	PERK_DETAIL: "perk_detail",
};

export const HEADER_ELEMENT_KEYS = {
	TITLE: "title",
	DESCRIPTION: "description",
	STATS: "show_stats",
	URLS: "show_urls",
	SHOW_DESCRIPTION: "show_description",
	BUTTON_TEXT: "header_button_text",
	SHOW_BUTTON: "show_button",
};

export const CONDITION_KEYS = {
	DESCRIPTION: "description",
	GAMIFY: "gamify",
	TOS: "tos",
};

export const generateTintStyle = (color?: string | null) => {
	if (!color) {
		return "";
	}
	if (color.toLowerCase() === "transparent") {
		return "";
	}
	const aRgbHex = color.substr(1).match(/.{1,2}/g);
	if (!aRgbHex)
		return `linear-gradient(180deg, rgba(28, 28, 40, 0.014) 0%, rgba(0, 0, 0, 0.7) 37.05%)`;

	const aRgb = [
		parseInt(aRgbHex[0], 16),
		parseInt(aRgbHex[1], 16),
		parseInt(aRgbHex[2], 16),
	];

	return `linear-gradient(180deg, rgba(28, 28, 40, 0.014) 0%, rgba(${aRgb[0]}, ${aRgb[1]}, ${aRgb[2]}, 0.7) 37.05%)`;
};

export const generateDefaultTintStyle = () => {
	return `linear-gradient(180deg, rgba(28, 28, 40, 0.014) 0%, rgba(0, 0, 0, 0.7) 37.05%)`;
};

export const defaultTheme = () => {
	return {
		card_text: "#C7C9D9",
		card_background: "#ffffff",
		card_tint: "transparent",
		text: "#1C1C28",
		button: "#1C1C28",
		button_text: "#ffffff",
		answer: "#FF8080",
		incorrect_answer: "#E53535",
	};
};

export const getPerkRemeptionText = (key: string) => {
	switch (key) {
		case PERK_TYPES.COUPON_CODE:
			return "Coupon Code";
		case PERK_TYPES.GIFT_CARD:
			return "Gift Card";
		case PERK_TYPES.DOWNLOAD_LINK:
			return "Downloadable Media";
		case PERK_TYPES.ACCESS_LINK:
			return "Exclusive Access Link";
		case PERK_TYPES.MERCH:
			return "Merchandise";
		case PERK_TYPES.MEDIA:
			return "Exclusive Video/Media";
		default:
			return "";
	}
};

export const getPerkEndItemText = (key: string) => {
	switch (key) {
		case PAGE_END_KEYS.THANKS_PAGE:
			return "Thank You Redirect";
		case PAGE_END_KEYS.PERKS_PAGE:
			return "Perks Redirect";
		default:
			return "";
	}
};

export const countDownGradientColor = () => {
	return "linear-gradient(147.14deg, #00CFDE 6.95%, #05A660 93.05%)";
};

export const quantityGradientColor = (quantity: number) => {
	if (quantity > 0)
		return "linear-gradient(145.51deg, #FDDD48 7.21%, #00B7C4 94.47%)";
	return "linear-gradient(147.14deg, #FF6A3A 6.95%, #FF2727 93.05%)";
};

export const perkGradientColor = (type: string) => {
	switch (type) {
		case PERK_TYPES.COUPON_CODE:
			return "linear-gradient(145.51deg, rgba(253, 237, 114, 0.9) 7.21%, rgba(255, 128, 128, 0.9) 94.47%)";
		case PERK_TYPES.GIFT_CARD:
			return "linear-gradient(145.51deg, #FDDD48 7.21%, #00B7C4 94.47%)";
		case PERK_TYPES.DOWNLOAD_LINK:
			return "linear-gradient(147.14deg, #3E7BFA 6.95%, #6600CC 93.05%)";
		case PERK_TYPES.ACCESS_LINK:
			return "linear-gradient(147.14deg, #5B8DEF 6.95%, #0063F7 93.05%)";
		case PERK_TYPES.MERCH:
			return "linear-gradient(147.14deg, #00CFDE 6.95%, #05A660 93.05%)";
		case PERK_TYPES.MEDIA:
			return "linear-gradient(147.14deg, #FF3B3B 6.95%, #6600CC 93.05%)";
		default:
			return "transparent";
	}
};

export const ONBOARDING_STATE_KEYS = {
	SPACE_LOADING: "spaceLoading",
	HEADER_LOADING: "headerLoading",
	SOCIAL_LOADING: "socialLoading",
	DESCRIPTION_LOADING: "descriptionLoading",
	CAMPAIGN_LOADING: "campaignLoading",
	PERK_LOADING: "perkLoading",
	SUCCESS: "success",
};

export const ONBOARDING_ANIMATION_TIME_SET = {
	spaceLoading: 3000,
	headerLoading: 3000,
	socialLoading: 2500,
	descriptionLoading: 2000,
	campaignLoading: 1500,
	perkLoading: 1500,
};

export const LIMIT_TEXT = {
	title: 40,
	description: 250,
	headerButton: 30,
	titleMaxRows: 2,
	descriptionMaxRows: 5,
}