export const STATUS = {
	ACTIVE: 1,
	DELETED: 2,
	PAUSED: 3,
	DEMO: 4,
	DRAFT: 5,
	EXPIRED: 6,
	PROTECTED: 7,
	COMING_SOON: 8,
	PENDING_CONFIRMATION: 9,
	CONFIRMED: 10,
	SENT: 11,
	FAILED: 12,
	MINTING: 13,
	POST_MINT: 14,
	WINNERS_SELECTED: 15,
	PAST_DUE: 16,
	NOT_CONFIGURED: 17,
};

export const getStatusLabel = (status: number) => {
	switch (status) {
		case STATUS.ACTIVE:
			return "Active";
		case STATUS.DELETED:
			return "Deleted";
		case STATUS.PAUSED:
			return "Paused";
		case STATUS.DEMO:
			return "Demo";
		case STATUS.DRAFT:
			return "Draft";
		case STATUS.EXPIRED:
			return "Expired";
		case STATUS.PROTECTED:
			return "Protected";
		case STATUS.COMING_SOON:
			return "Coming Soon";
		case STATUS.PENDING_CONFIRMATION:
			return "Pending Confirmation";
		case STATUS.CONFIRMED:
			return "Confirmed";
		case STATUS.SENT:
			return "Sent";
		case STATUS.FAILED:
			return "Failed";
		case STATUS.MINTING:
			return "Minting";
		case STATUS.POST_MINT:
			return "Post Mint";
		case STATUS.WINNERS_SELECTED:
			return "Winners Selected";
		default:
			return "Unknown";
	}
};

export const ACTIONS_KEYS = {
	REFERRAL: "referral_register",
	FOLLOW_TWITTER: "follow_twitter",
	PLAY_AUDIO: "play_audio",
	PLAY_VIDEO: "play_video",
	DISPLAY_IMAGE: "display_image",
	DOWNLOAD_FILE: "download_file",
	TWITTER_RETWEET: "twitter_retweet",
	CONNECT_TWITTER: "connect_twitter",
	TWITTER_JOIN_SPACE: "twitter_join_space",
	TWITTER_UPDATE_STATUS: "twitter_update_status",
	TWITTER_LIKE_POST: "twitter_like_post",
	TWITTER_COMMENT_POST: "twitter_comment_post",
	CONNECTING_DISCORD: "connect_discord",
	FILL_FORM: "fill_form",
	FILL_FORM_SHORT_ANSWER: "fill_form_short_answer",
	FILL_FORM_LONG_ANSWER: "fill_form_long_answer",
	FILL_FORM_QUIZ: "fill_form_quiz",
	FILL_FORM_POLL: "fill_form_poll",
	VERIFY_EMAIL: "verify_email",
	JOIN_DISCORD_SERVER: "join_discord_server",
	JOIN_TELEGRAM: "join_telegram",
	LIKE_INSTAGRAM: "like_instagram",
	CONNECT_LINKEDIN: "connect_linkedin",
	DISCORD_JOIN_COLLECTION_SERVER: "join_collection_discord",
	SHARE_EMAIL_WITH_COLLECTION: "share_email_with_collection",
	UPLOAD_FILE: "upload_file",
	VISIT_WEBSITE: "visit_website",
	TEXT_SHORT: "text_short",
	TEXT_LONG: "text_long",
	PURCHASE_NFT: "purchase_nft",
	MINT_NFT: "mint_nft",
	CONNECT_METAMASK_WALLET: "connect_metamask_wallet",
	SPOTIFY: "spotify",
	SOUNDCLOUD: "soundcloud",
	APPLE_MUSIC: "apple_music",
	CALENDLY: "calendly",
};

export const PERK_TYPES = {
	COUPON_CODE: "coupon_code",
	GIFT_CARD: "gift_card",
	DOWNLOAD_LINK: "download_link",
	ACCESS_LINK: "access_link",
	MEDIA: "media",
	MERCH: "merch",
};

export const PAGE_END_KEYS = {
	THANKS_PAGE: "thanks_page",
	PERKS_PAGE: "rewards_page",
};

export const availableActions = [
	{
		action_key: ACTIONS_KEYS.SHARE_EMAIL_WITH_COLLECTION,
		name: "Collect a User's Email",
	},
	{ action_key: ACTIONS_KEYS.FILL_FORM, name: "Create a Form, Quiz, or Poll" },
	{
		action_key: ACTIONS_KEYS.DISCORD_JOIN_COLLECTION_SERVER,
		name: "Join a Discord Server",
	},
	{ action_key: ACTIONS_KEYS.FOLLOW_TWITTER, name: "Follow a Twitter Profile" },
	{ action_key: ACTIONS_KEYS.TWITTER_RETWEET, name: "Retweet a Post" },
	{ action_key: ACTIONS_KEYS.TWITTER_LIKE_POST, name: "Like a Tweet" },
	{ action_key: ACTIONS_KEYS.TWITTER_UPDATE_STATUS, name: "Post a Tweet" },
	{ action_key: ACTIONS_KEYS.PLAY_AUDIO, name: "Play an Audio File" },
	{ action_key: ACTIONS_KEYS.PLAY_VIDEO, name: "Play a Youtube Video or File" },
	{ action_key: ACTIONS_KEYS.DISPLAY_IMAGE, name: "Reveal an Image" },
	{
		action_key: ACTIONS_KEYS.UPLOAD_FILE,
		name: "Request Users to Upload Media",
	},
	{ action_key: ACTIONS_KEYS.VISIT_WEBSITE, name: "Visit a Link or Website" },
	{
		action_key: ACTIONS_KEYS.TEXT_SHORT,
		name: "Request Users to Read Short Text",
	},
	{
		action_key: ACTIONS_KEYS.TEXT_LONG,
		name: "Request Users to Read Long Text",
	},
	{
		action_key: ACTIONS_KEYS.PURCHASE_NFT,
		name: "Purchase an NFT *(Only Ethereum Mainnet)",
	},
	{
		action_key: ACTIONS_KEYS.MINT_NFT,
		name: "Mint an NFT *(Only Ethereum Mainnet)",
	},
	{
		action_key: ACTIONS_KEYS.CONNECT_METAMASK_WALLET,
		name: "Connect Metamask Wallet",
	},
];

export const QUESTION_TYPES = {
	SHORT_ANSWER: "SHORT_ANSWER",
	LONG_ANSWER: "LONG_ANSWER",
	MULTIPLE_CHOICE: "MULTIPLE_CHOICE",
	SINGLE_CHOICE: "SINGLE_CHOICE",
	FILE_UPLOAD: "FILE_UPLOAD",
	POOLING: "POOLING",
};

export const availableQuestionTypes = [
	{ type: QUESTION_TYPES.SHORT_ANSWER, name: "Short Answer" },
	{ type: QUESTION_TYPES.LONG_ANSWER, name: "Long Answer" },
	{ type: QUESTION_TYPES.MULTIPLE_CHOICE, name: "Multiple Choice" },
	{ type: QUESTION_TYPES.SINGLE_CHOICE, name: "Single Choice" },
	{ type: QUESTION_TYPES.FILE_UPLOAD, name: "File Upload" },
	{ type: QUESTION_TYPES.POOLING, name: "Pooling" },
];

export const PAYMENT_PLANS = {
	FREE: "free",
	BASIC: "basic",
	PLUS: "plus",
	BUSINESS: "business",
	UNLIMITED: "unlimited",
};

export const PAYMENT_STATUS = {
	ACTIVE: "active",
	FAILED: "failed",
};
export const GIVEAWAY_WINNER_SELECTION = {
	ENTRIES: "entries",
	INSTANT: "instant",
};

export const getPlanPrice = (plan?: string) => {
	if (!plan) return 0;
	switch (plan) {
		case PAYMENT_PLANS.BASIC:
			return 29;
		case PAYMENT_PLANS.PLUS:
			return 79;
		case PAYMENT_PLANS.BUSINESS:
			return 179;
		default:
			return 0;
	}
};

export const ROLE_KEYS = {
	OWNER: "owner",
	ADMIN: "admin",
	EDITOR: "editor",
	PENDING: "pending",
};

export const roles = [
	{
		role: ROLE_KEYS.OWNER,
		description:
			"Create flo’s, perks & edit the flo space. Can manage members & delete the brand.",
	},
	{
		role: ROLE_KEYS.ADMIN,
		description:
			"Create flo’s, perks & edit the flo space. Can manage members & delete the brand.",
	},
	{
		role: ROLE_KEYS.EDITOR,
		description:
			"Create flo’s, perks & edit the flo space. Can’t manage members.",
	},
];

export const TEMPLATE_TYPES = {
	CAMPAIGN: "campaign",
	REWARD: "reward",
}
