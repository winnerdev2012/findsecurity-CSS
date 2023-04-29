export interface Collection extends CollectionPublic {
  collection_image: string,
  description: string,
  id: string,
  name: string,
  header_name: string,
  header_button_text: string | null,
  collection_slug: string,
  banner_url: string | null,
  verified: boolean;
  views: number;
  project_status: string;
  status: number;
  opensea_slug?: string | null;
  payment_plan: string;
  interactions_count?: number | null;
  interactions_limit_reached?: boolean;
  main_activity_id?: string | null;
  main_campaign_id: string | null;
  main_activity?: MainActivity | null;
  main_campaign?: MainGiveaway | null;
  members: number | null;
  opensea_url: string | null,
  twitter_url: string | null,
  web_url: string | null,
  discord_url: string | null,
  etherscan_url: string | null,
  linkedin_url: string | null,
  instagram_url: string | null,
  tiktok_url: string | null,
  facebook_url: string | null,
  youtube_url: string | null,
  medium_url: string | null,
  whatsapp_url: string | null,
  telegram_url: string | null,
  show_description: boolean,
  show_urls: boolean,
  show_stats: boolean,
  show_button: boolean,
  gamified: boolean,
  interactions_due_date?: string | null,
}

export interface CollectionPublic {
  id: string,
  description: string,
  name: string,
  header_name: string,
  header_button_text: string | null,
  collection_slug: string,
  banner_url: string | null,
  verified: boolean;
  views: number;
  status: number;
  interactions_count?: number | null;
  interactions_limit_reached?: boolean;
  main_activity_id?: string | null;
  main_campaign_id: string | null;
  main_campaign_slug?: string | null;
  main_activity?: MainActivity | null;
  main_campaign?: MainGiveaway | null;
  opensea_url: string | null,
  twitter_url: string | null,
  web_url: string | null,
  discord_url: string | null,
  etherscan_url: string | null,
  linkedin_url: string | null,
  instagram_url: string | null,
  tiktok_url: string | null,
  facebook_url: string | null,
  youtube_url: string | null,
  medium_url: string | null,
  whatsapp_url: string | null,
  telegram_url: string | null,
  show_description: boolean,
  show_urls: boolean,
  show_stats: boolean,
  show_button: boolean,
  gamified: boolean,
  hide_powered_by: boolean,
}

export interface WorkSpace {
  collection_id: string,
  email: string | null,
  name: string,
  payment_plan: string,
  members: number,
}

interface MainActivity {
  activity_name_key: string,
  name: string,
}

interface MainGiveaway {
  giveaway_name_key: string,
  name: string,
}

export interface CollectionBilling {
  plan: string,
  monthlyPrice: string,
  loading: boolean,
  card?: BillingCardProps | null,
  subscription_status: number,
  next_payment_attempt?: string | null,
}


export interface TokenDetail {
  contract_address: string,
  token_id: string,
  name: string,
}

export interface BillingCardProps {
  id: string,
  brand: string,
  last_four: string,
  name: string,
  updated_at: string,
}

export interface InvoiceProps {
  id: string,
  invoice_id: string,
  status: string,
  total_amount: number,
  subtotal: number,
  discount: number,
  invoice_number: string,
  created_at: string,
  last_four: string,
  brand: string,
  next_payment_attempt?: string,
  name: string,
}

export interface Theme {
  id: string,
  theme_name: string,
  default: boolean,
  logo_url: string | null,
  card_text: string,
  card_tint: string,
  card_background: string,
  page_background: string,
  text: string,
  button_text: string,
  button: string,
  answer: string,
  incorrect_answer: string,
  collection_id: string,
  background_url: string | null,
}

export interface CollectionMetrics {
  views: number,
  avg_interactions: number,
  users_count: number,
  perks_claimed_count: number,
}
