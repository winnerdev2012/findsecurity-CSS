import {RewardPresentation} from "./RewardsTypes";

export interface Campaign extends CampaignPublic {
  id: string;
  name: string;
  description: string;
  status: number;
  expires: string | null;
  image_url: string | null;
  completed: boolean;
  winners_limit: number;
  reward_id?: string;
  user_entries: number | null;
  total_entries: number | null;
  campaign_slug: string;
  giveaway_description_key: string;
  winner_selection_method?: string;
  terms_and_conditions?: string;
  total_points?: number;
  gamified: boolean;
  show_description: boolean;
  end_page_type: string | null
  end_image_url: string | null;
  show_end_description: boolean;
  show_end_social: boolean;
  end_button_text: string | null;
  end_title: string | null;
  end_description: string | null;
  endPageRewards: RewardPresentation[] | null;
  end_website: string | null;
  end_campaign_id: string | null;
  user_completed: boolean;
}

export interface CampaignPublic {
  id: string;
  name: string;
  description: string;
  status: number;
  expires: string | null;
  image_url: string | null;
  completed: boolean;
  winners_limit: number;
  reward_id?: string;
  user_entries: number | null;
  total_entries: number | null;
  campaign_slug: string;
  giveaway_description_key: string;
  terms_and_conditions?: string;
  total_points?: number;
  gamified: boolean;
  show_description: boolean;
  end_page_type: string | null
  end_image_url: string | null;
  show_end_description: boolean;
  show_end_social: boolean;
  end_button_text: string | null;
  end_title: string | null;
  end_description: string | null;
  end_website: string | null;
  end_campaign_id: string | null;
  total_activities: number | null;
  collection_id: string;
  redirect: EndRedirect | null;
  user_completed: boolean;
}

interface EndRedirect {
  collection_slug: string;
  campaign_slug: string;
}

export interface CampaignRequisite {
  id: string,
  name: string;
}

export interface CampaignProgress {
  total: number;
  completed: number;
  user_completed: boolean;
}

export interface CampaignMetrics {
  avg_time: number;
  conversion_rate: number;
  interactions_count: number;
  users_count: number;
  views: number;
}
