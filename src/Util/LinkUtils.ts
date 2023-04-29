import axios from "axios";
import fileDownload from "js-file-download";
import { ACTIONS_KEYS } from "./StatusUtil";
import {
	isValidProfileUrl,
	isValidTwitterSpaceUrl,
	isValidTweetUrl,
} from "./TwitterUtil";


const isValidHttpUrl = (value: string) => {
	try {
		const url = new URL(value);
		return url.protocol === "http:" || url.protocol === "https:";
	} catch (err) {
		return false;
	}
};

export const appendHttpsToUrl = (url: string | undefined | null) => {
	if (!url) {
		return null;
	}

	const isHttp = isValidHttpUrl(url);

	if (isHttp) {
		return url;
	}

	if (!url.match(/^[a-zA-Z]+:\/\//)) {
		url = "https://" + url;
		return url;
	} else {
		return null;
	}
};

export const downloadUrlFile = (activity_url: string) => {
	return new Promise((resolve, reject) => {
		try {
			const parts = activity_url.split("/");
			const u = parts[parts.length - 1];
			axios
				.get(activity_url, {
					responseType: "blob",
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "GET",
					},
				})
				.then((res) => {
					fileDownload(res.data, u);
					resolve(true);
				});
		} catch (e) {
			reject(e);
		}
	});
};

const isValidDiscordUrl = (value: string) => {
	const regex =
		/(https:\/\/)?(www\.)?(((discord(app)?)?\.com\/invite)|((discord(app)?)?\.gg))\/(?<invite>.+)/gm;
	return regex.test(value);
};

const isValidTelegramUrl = (value: string) => {
	const regex =
		/^(https:\/\/)?(www\.)?((t\.me)|(telegram\.org))\/(?<invite>.+)/gm;
	return regex.test(value);
};

const isValidInstagramUrl = (value: string) => {
	const regex = /^(https:\/\/)?(www\.)?((instagram\.com))\/(?<invite>.+)/gm;
	return regex.test(value);
};

const isValidLinkedinUrl = (value: string) => {
	const regex = /^(https:\/\/)?(www\.)?((linkedin\.com))\/(?<invite>.+)/gm;
	return regex.test(value);
};

export const validateLink = (action_key: string, link: string) => {
	let message = "";
	if (action_key === ACTIONS_KEYS.FOLLOW_TWITTER) {
		const isValid = isValidProfileUrl(link);
		if (!isValid) {
			message = "Invalid Twitter profile url";
		}
		return { isValid, message };
	}
	if (action_key === ACTIONS_KEYS.TWITTER_JOIN_SPACE) {
		const isValid = isValidTwitterSpaceUrl(link);
		if (!isValid) {
			message = "Invalid Twitter Space url";
		}
		return { isValid, message };
	}

	if (action_key === ACTIONS_KEYS.TWITTER_LIKE_POST) {
		const isValid = isValidTweetUrl(link);
		if (!isValid) {
			message = "Invalid Tweet url";
		}
		return { isValid, message };
	}

	if (action_key === ACTIONS_KEYS.TWITTER_COMMENT_POST) {
		const isValid = isValidTweetUrl(link);
		if (!isValid) {
			message = "Invalid Tweet url";
		}
		return { isValid, message };
	}

	if (action_key === ACTIONS_KEYS.TWITTER_RETWEET) {
		const isValid = isValidTweetUrl(link);
		if (!isValid) {
			message = "Invalid Tweet url";
		}
		return { isValid, message };
	}

	if (action_key === ACTIONS_KEYS.DISCORD_JOIN_COLLECTION_SERVER) {
		const isValid = isValidDiscordUrl(link);
		if (!isValid) {
			message = "Invalid Discord url";
		}
		return { isValid, message };
	}

	if (action_key === ACTIONS_KEYS.JOIN_TELEGRAM) {
		const isValid = isValidTelegramUrl(link);
		if (!isValid) {
			message = "Invalid Telegram url";
		}
		return { isValid, message };
	}

	if (action_key === ACTIONS_KEYS.LIKE_INSTAGRAM) {
		const isValid = isValidInstagramUrl(link);
		if (!isValid) {
			message = "Invalid Instagram url";
		}
		return { isValid, message };
	}

	if (action_key === ACTIONS_KEYS.CONNECT_LINKEDIN) {
		const isValid = isValidLinkedinUrl(link);
		if (!isValid) {
			message = "Invalid LinkedIn url";
		}
		return { isValid, message };
	}

	return { isValid: true, message: "" };
};

export const getFilenameFromUrl = (url: string) => {
	const parts = url.split("/");
	const u = parts[parts.length - 1];
	return u;
}
