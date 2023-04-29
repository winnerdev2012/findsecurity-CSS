export const followLinkIntent = (user_id?: string) => {
	return `https://twitter.com/intent/user?user_id=${user_id}`;
};

export const retweetLinkIntent = (tweet_id?: string | null) => {
	return `https://twitter.com/intent/retweet?tweet_id=${tweet_id}`;
};

export const buildTweetIntent = (signature: string, code: string) => {
	const base = "https://twitter.com/intent/tweet";
	const text1 = ``;
	const text2 = ` on `;
	const text3 = `. Get your free `;
	const text4 = ` at`;
	const text5 = `sig:${signature}`;
	const url = `https://www.funkynft.co/referral/${code}`;

	let link = base;
	link += `?text=${Buffer.from(text1, "utf-8").toString()}`;
	link += `%23NFT`;
	link += `&text=${Buffer.from(text2, "utf-8").toString()}`;
	link += `%23Polygon`;
	link += `${Buffer.from(text3, "utf-8").toString()}`;
	link += `%23MOJO`;
	link += `${Buffer.from(text4, "utf-8").toString()}`;
	link += `&url=${url}`;
	link += `%0a%0a${Buffer.from(text5, "utf-8").toString()}`;

	return link;
};

export const parseContentTweetIntent = (content: string) => {
	const base = "https://twitter.com/intent/tweet";
	const parsedHash = content
		.replace("%", "%25")
		.replace(/#/g, "%23")
		.replace("&", "%26")
		.replace("\r\n\r\n", "%0a%0a")
		.replace("\r\n", "%0a");

	const second = parsedHash.replace(/(?:\\[rn]|[\r\n]+)+/g, "%0a");
	let link = base;
	link += `?text=${Buffer.from(second, "utf-8").toString()}`;
	return link;
};

export const parseUsername = (value: string) => {
	let val = value.replace("@", "");
	return val.trim();
};

export const parseTweetIdFromUrl = (value: string) => {
	let val = value.split("/status/")[1];
	val = val.split("?")[0];
	return val.trim();
};

export const getTweetCanonicalUrl = (tweet_id: string) => {
	return `https://twitter.com/twitter/status/${tweet_id}`;
};

export const isValidProfileUrl = (value: string) => {
	const regex = /^(https?:\/\/)?(www\.)?twitter\.com\/([a-zA-Z0-9_]{1,15})$/;
	return regex.test(value);
};

export const isValidTwitterSpaceUrl = (value: string) => {
	const regex =
		/^(https?:\/\/)?(www\.)?twitter\.com\/(i|spaces)\/(i|spaces)\/([a-zA-Z0-9_]{1,15})$/gm;
	return regex.test(value);
};

export const isValidTweetUrl = (value: string) => {
	const regex = /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)/;
	return regex.test(value);
};
