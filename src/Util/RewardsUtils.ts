import {PERK_TYPES, STATUS} from "./StatusUtil";
import {RewardPublic} from "../Types/RewardsTypes";

export const formatPoints = (
	points = 1000000,
	isLoggedIn = true,
	admin = false
) => {
	if (!isLoggedIn && !admin) {
		return "????";
	}

	if (points < 1e3) return points;
	if (points >= 1e3) return +(points / 1e3).toFixed(1) + "K";
};

export const getTypeContent = (rewardType: string) => {
	switch (rewardType) {
		case PERK_TYPES.COUPON_CODE:
			return "Coupon";

		case PERK_TYPES.ACCESS_LINK:
			return "Access Link";

		case PERK_TYPES.DOWNLOAD_LINK:
			return "Download Link";

		case PERK_TYPES.GIFT_CARD:
			return "Gift";

		case PERK_TYPES.MEDIA:
			return "Access Media";

		case PERK_TYPES.MERCH:
			return "Merchandising";
		default:
			return rewardType;
	}
};

export const getQuantityContent = (publicReward: RewardPublic) => {
	if (!publicReward) {
		return ""
	}

	const isCode = publicReward.reward_type === PERK_TYPES.GIFT_CARD || publicReward.reward_type === PERK_TYPES.COUPON_CODE;
	let unitsLeft = publicReward?.unitsLeft || 0
	if (unitsLeft < 0) {
		unitsLeft = 0
	}
	if (isCode) {
		return `${unitsLeft || 0} LEFT`
	}
	if (!publicReward?.quantity || publicReward?.quantity === 0 || publicReward?.quantity === null) {
		return "Unlimited"
	} else {
		return `${unitsLeft || 0} LEFT`
	}
}

export const getRequirementsContent = (publicReward: RewardPublic) => {
	const requirements = publicReward?.requisites;
	if (!requirements || requirements.length === 0) {
		return ""
	}

	const first = requirements[0]
	const count = requirements.length;

	if (count > 2) {
		return `${first.name} + ${count - 1} More`
	} else {
		return first.name
	}
}



export const getRewardButtonText = (isUserLoggedIn :boolean, loading: boolean, publicReward: RewardPublic) => {
	if (!isUserLoggedIn) {
		return publicReward?.button_text || "Login to Claim";
	}

	if (loading || !publicReward) {
		return "Loading...";
	}

	if (publicReward?.status === STATUS.EXPIRED) {
		return "Closed";
	}

	if (publicReward.start_date && new Date(publicReward.start_date) > new Date()) {
		return "Starts Soon";
	}

	if (publicReward.end_date && new Date(publicReward.end_date) < new Date()) {
		return "Closed";
	}

	if (publicReward.claimed) {
		return "Claimed";
	}

	if (!publicReward.requisitesCompleted) {
		return `Complete ${publicReward.nextCampaign?.campaign_name || "Campaign"}`;
	}

	if (publicReward.unitsLeft === 0 && (publicReward.quantity !== 0)) {
		return "Out of Stock";
	}

	const userHasPoints = (publicReward.points || 0) <= (publicReward.userPoints || 0);
	if (publicReward.gamified) {
		if (!userHasPoints) {
			return "Not Enough Points";
		} else {
			return publicReward?.button_text || "Claim";
		}
	} else {
		return publicReward?.button_text || "Claim";
	}

}
