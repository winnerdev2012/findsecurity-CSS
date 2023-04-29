import { CampaignRequisite } from "./CampaignsTypes";

export interface Reward extends RewardPublic {
	current_points: number;
	description: string;
	expired: boolean;
	reward_id: string;
	name: string;
	quantity: number;
	points: number;
	reward_type: string;
	status: number;
	claimed: boolean;
	image_url: string | null;
	show_description: boolean;
	redeem_instructions?: string;
	coupon_text?: string;
	reward_url?: string;
	button_text: string | null;
	enabled: boolean;
	gamified: boolean;
	requires_verification: boolean;
	redirect_campaign_id: string | null;
	requisites: CampaignRequisite[];
	end_date: string | null;
	start_date: string | null;
	redemption_image_url: string | null;
	redemption_button_text: string | null;
	redemption_title: string | null;
	redemption_description: string | null;
	show_redemption_description: boolean;
	codes: string[] | null;
	end_page_type: string | null;
	end_button_text: string | null;
	show_end_description: boolean;
	end_website: string | null;
	end_campaign_id: string | null;
	end_image_url: string | null;
	end_title: string | null;
	end_description: string | null;
	show_end_social: boolean;
	endPageRewards: RewardPresentation[] | null;
}

export interface RewardPublic {
	description: string;
	expired: boolean;
	reward_id: string;
	name: string;
	quantity: number;
	points: number;
	reward_type: string;
	status: number;
	claimed: boolean;
	image_url: string | null;
	show_description: boolean;
	button_text: string | null;
	enabled: boolean;
	gamified: boolean;
	requires_verification: boolean;
	redirect_campaign_id: string | null;
	requisites: CampaignRequisite[];
	end_date: string | null;
	start_date: string | null;
	redemption_image_url: string | null;
	redemption_button_text: string | null;
	redemption_title: string | null;
	redemption_description: string | null;
	show_redemption_description: boolean;
	codes: string[] | null;
	end_page_type: string | null;
	end_button_text: string | null;
	show_end_description: boolean;
	end_website: string | null;
	end_campaign_id: string | null;
	end_image_url: string | null;
	end_title: string | null;
	end_description: string | null;
	show_end_social: boolean;
	requisitesCompleted: boolean;
	userPoints: number;
	nextCampaign: NextCampaign | null;
	redirectCampaign: NextCampaign | null;
	reward_url?: string;
	endCampaign: EndRedirect | null;
	claimInfo: ClaimInfo | null;
	unitsLeft: number;
}

interface ClaimInfo {
	id: string;
	first_name: string;
	last_name: string;
	street_address: string;
	zip_code: string;
	apt: string | null;
	city: string;
	country: string;
	phone: string;
	state: string;
}

interface EndRedirect {
	collection_slug: string;
	campaign_slug: string;
}

interface NextCampaign {
	campaign_id: string;
	campaign_name: string;
	campaign_slug: string;
}

export interface RewardPresentation {
	reward_id: string;
	name: string;
	reward_type: string;
	end_date: string | null;
	points: number | null;
	image_url: string | null;
}

export interface RewardEditor {
	reward: Reward | null;
	isChangesToSave: boolean;
	name: string;
	description: string;
	button_text: string;
	redemptionTitle: string;
	redemptionDescription: string;
	show_redemption_description: boolean;
	redemption_button_text: string;
	redemptionImageFile: File | null;
	downloadFile: File | null;
	points: number;
	requires_verification: boolean;
	show_description: boolean;
	start_date: string | null;
	end_date: string | null;
	requisites: CampaignRequisite[];
	quantity: number;
	redirect_campaign_id: string | null;
	imageFile: File | null;
	codes: string | null;
	reward_type: string;
	reward_url: string | null;
	endTitle: string;
	endDescription: string;
	showEndDescription: boolean;
	showEndSocialLinks: boolean;
	end_page_type: string;
	perksToDisplay: RewardPresentation[];
	endImageFile: File | null;
	end_campaign_id: string | null;
	end_website: string | null;
	end_button_text: string | null;
}

//Data object for the Flo Modules section
export interface RewardModule {
	reward_id: string;
	order: number;
	name: string;
	reward_type: string;
	points: number;
	image_url: string | null;
	end_date: string | null;
	start_date: string | null;
	quantity: number;
	user_completed: boolean;
}

// Type for the campaign card perks
export interface RewardSummary {
	reward_id: string;
	order: number;
	name: string;
	reward_type: string;
	points: number;
	image_url: string | null;
	end_date: string | null;
	start_date: string | null;
	quantity: number;
	user_completed: boolean;
	unitsLeft?: number;
	claimed?: boolean;
}

export interface RewardMetrics {
	views: number;
	claimed_count: number;
}
