interface CampaignSummary {
  campaign_id: string;
  campaign_slug: string;
  collection_slug: string;
}

interface RewardSummary {
  reward_id: string;
  collection_slug: string;
}

interface CategorySummary {
  name: string;
  slug: string;
}

interface SubCategorySummary {
  name: string;
  slug: string;
}

export interface TemplateItem {
  id: string;
  name: string;
  description?: string;
  order: number;
  slug: string;
  category_id?: string | null;
  subcategory_id?: string | null;
  creation_count: number;
  thumbnail: string;
  type: string;
  campaign?: CampaignSummary;
  reward?: RewardSummary;
  premium: boolean;
  faq?: any[];
  category: CategorySummary;
  subcategory?: SubCategorySummary;
}


export interface TemplateSubCategory {
  id: string;
  name: string;
  description?: string;
  order: number;
  slug: string;
  category_id: string;
  templates?: TemplateItem[];
}

export interface TemplateCategory {
  id: string;
  name: string;
  description?: string;
  order: number;
  slug: string;
  subcategories?: TemplateSubCategory[];
  templates?: TemplateItem[];
}
