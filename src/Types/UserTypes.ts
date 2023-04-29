export interface User {
  id: string;
  user_name: string;
  email?: string;
  wallet?: string;
  code?: string;
  confirmed: boolean;
  hasTwitter: boolean;
  hasDiscord?: boolean;
  token: string;
  email_confirmed: boolean;
  role?: AdminRole;
}

export interface AdminRole {
  id: string;
  role: string;
  description: string;
  actions: AdminAction[];
}

export interface AdminAction {
  action: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: string;
  user_name: string;
}

export interface IUser {
  created_at: Date;
  campaigns_completed: number;
  email: string;
  claimed: number;
  referrals: number;
  points_earned: number;
  twitter_username: string;
  discord_username: string;
  interactions: number;
  id: string;
}

export interface IUserCampaign {
  created_at: Date;
  campaigns_completed: number;
  email: string;
  claimed: number;
  referrals: number;
  points_earned: number;
  twitter_username: string;
  discord_username: string;
  interactions: number;
  id: string;
  activities: IUserActivity[];
}

export interface AnswerData {
  selection?: number[];
  other_answer?: string;
  text_answer?: string;
  file_url?: string;
}

export interface IActivityHeader {
  activity_id: string;
  name: string;
  action_key: string;
}

export interface IUserActivity {
  activity_id: string;
  completed: boolean;
  action_key: string;
  answer: AnswerData
}
