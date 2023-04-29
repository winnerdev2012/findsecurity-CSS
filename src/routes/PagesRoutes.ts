export const ROUTES = {
  HOME: "/",

  //-----------------Pages---------------------//
  BusinessLocation: "/business-location",
  SearchResult: "/search-result",





  //-------------------------------------------//
  LOGIN_LINK: "/enter",
  LINK_AUTH: "/auth",
  INVITES: "/r",
  OAUTH: "/auth/*",
  PRIVACY: "/privacy",
  UNSUBSCRIBE: "/unsubscribe",
  PARTNERS: "/partners",
  // External routing to collection tabs
  COLLECTION_MAIN_PAGE: "/b/:collection_slug",
  COLLECTION_TAB_QUESTS: "/b/:collection_slug/quests",
  COLLECTION_TAB_GIVEAWAYS: "/b/:collection_slug/giveaways",
  COLLECTION_GIVEAWAY: "/c/:collection_key/:giveaway_name_key",
  ADMIN_COLLECTION: "/b/admin",
  SUBSCRIPTION_CANCEL: "/subscriptions/cancel",
  SUBSCRIPTION_SUCCESS: "/subscriptions/success",
  // int routing for user-dashboard nav
  USER_DASHBOARD_PROJ_LISTING: "/project-listing",
  USER_DASHBOARD_TEAM_MANAGEMENT: "/team-management",
  USER_DASHBOARD_ACCOUNT_SETTINGS: "/settings",
  UD_INTEGRATIONS: "/integrations",

  BILLING: "/billing",
  PARTNER_PRICING: "/partners/pricing",
  PARTNER_FEATURES_QUEST: "/partner/features/quests",
  PARTNER_FEATURES_GIVEAWAYS: "/partner/features/giveaways",
  PARTNER_FEATURES_REWARDS: "/partner/features/rewards",
  PARTNER_FEATURES_ANALYTICS: "/partner/features/analytics",
  FLO_BUILDER: "/builder",
  FLO_EDITOR: "/editor",
  FLO_PERK_EDITOR: "/perk-editor",
  FLO_CAMPAIGN: "/editor/:campaign_id",
  PERK_EDITOR: "/perk-editor/:reward_id",
  RESULTS_GENERAL: "/results",
  RESULTS_CAMPAIGN: "/campaign/:campaign_id",
  RESULTS_REWARDS: "/perks/:reward_id",
  ONBOARDING_BRAND: "/onboarding/:collection_id",
  CAMPAIGN: "/b/:collection_slug/c/:campaign_slug",
  CAMPAIGN_END: "/c/:campaign_slug/end",
  REWARD: "/b/:collection_slug/r/:reward_id",
  ACTIVITY: "/a/:activity_id",
  //int routing for admin dashboard

  //int routing for templates
  TEMPLATES: "/templates",
  TEMPLATE_OVERVIEW: "/template-overview",
  TEMPLATE_DETAIL_SUBCATEGORY: "/templates/:category_slug/:subcategory_slug/:template_slug",
  TEMPLATE_DETAIL_CATEGORY: "/templates/:category_slug/:template_slug",
  TEMPLATE_PREVIEW: "/templates/t/:id/preview",

  //instant landing pages
  SMART_FUNNEL: "/flospace",
  FLOW_CAMPAIGNS: "/flow-campaigns",
  PERK_REWARDS: "/perk-rewards",
  ANALYTICS: "/analytics",

  //support pages
  SUPPORT: "/support",
  ABOUT_US: "/about-us",
  BLOG: "/blog",
  BLOG_OVERVIEW: "/blog/:id/:name"
};


export const getActivityRoute = (activity_id: string) => {
  return `${ROUTES.ACTIVITY.replace(":activity_id", activity_id)}`;
}

export const getCollectionRoute = (collection_slug?: string, refresh?: boolean) => {
  const url = ROUTES.COLLECTION_MAIN_PAGE.replace(":collection_slug", collection_slug || "");
  return refresh ? `${url}?refresh=true` : url;
}

export const getShareCollectionLink = (_window: any, collection_slug: string) => {
  return `${_window.location.origin}${ROUTES.COLLECTION_MAIN_PAGE.replace(":collection_slug", collection_slug)}`;
}

export const getShareCampaignLink = (_window: any, collection_slug: string, campaign_slug: string) => {
  return `${_window.location.origin}${ROUTES.CAMPAIGN.replace(":collection_slug", collection_slug).replace(":campaign_slug", campaign_slug)}`;
}

export const getOnboardingRoute = (collection_id: string) => {
  return `${ROUTES.ONBOARDING_BRAND.replace(':collection_id', collection_id)}`;
}

export const getWorkSpacesAdminUrl = (domain_url: string, collection_slug?: string | null) => {
  let url = `${domain_url}${ROUTES.ADMIN_COLLECTION}`;
  if (collection_slug) {
    url = url + `?collection=${collection_slug}`;
  }
  return url
}

export const getLinkAuthRedirect = (domain_url: string, redirectUri?: string) => {
  let url = `${domain_url}${ROUTES.LINK_AUTH}`;
  if (redirectUri) {
    url = url + `?redirectUri=${redirectUri}`;
  }
  return url
}

export const getFloEditorCampaignRoute = (campaign_id: string) => {
  return `${ROUTES.FLO_CAMPAIGN.replace(':campaign_id', campaign_id)}`;
}

export const getPerkEditorRoute = (reward_id: string) => {
  return `${ROUTES.PERK_EDITOR.replace(":reward_id", reward_id)}`
}

export const homeRouteReload = () => {
  return `${ROUTES.HOME}?reload=true`;
}

// -------------------------------------------------------------------------Pages---------------------------------------------------------------------------//

export const getBusinessLocation = () => {
  return `${ROUTES.BusinessLocation}`;
}
export const getSearchResult = () => {
  return `${ROUTES.SearchResult}`;
}











export const getCampaignResultsRoute = (campaign_id: string) => {
  return `${ROUTES.RESULTS_CAMPAIGN.replace(":campaign_id", campaign_id)}`;
}

export const gePerksResultsRoute = (reward_id: string) => {
  return `${ROUTES.RESULTS_REWARDS.replace(":reward_id", reward_id)}`;
}

export const getCampaignRoute = (collection_slug: string, campaign_slug: string) => {
  return `${ROUTES.CAMPAIGN.replace(":collection_slug", collection_slug).replace(":campaign_slug", campaign_slug)}`;
}

export const getRewardRoute = (collection_slug: string, reward_id: string) => {
  return `${ROUTES.REWARD.replace(":collection_slug", collection_slug).replace(":reward_id", reward_id)}`;
}

export const getRewardLink = (_window: any, collection_slug: string, reward_id: string) => {
  return `${_window.location.origin}${ROUTES.REWARD.replace(":collection_slug", collection_slug).replace(":reward_id", reward_id)}`;
}

export const getCampaignEndRoute = (campaign_slug: string) => {
  return `${ROUTES.CAMPAIGN_END.replace(":campaign_slug", campaign_slug)}`;
}

export const getTemplateDetailRoute = (template_slug: string, category_slug: string, subcategory_slug?: string | null) => {
  if (subcategory_slug) {
    return `${ROUTES.TEMPLATE_DETAIL_SUBCATEGORY.replace(":template_slug", template_slug).replace(":category_slug", category_slug).replace(":subcategory_slug", subcategory_slug)}`;
  }
  return `${ROUTES.TEMPLATE_DETAIL_CATEGORY.replace(":template_slug", template_slug).replace(":category_slug", category_slug)}`;
}

export const getBlogRoute = (id: string, blog_name: string) => {
  return `${ROUTES.BLOG.replace(":id", id).replace(":name", blog_name)}`;
}

export const getBillingRoute = () => {
  return `${ROUTES.ADMIN_COLLECTION}${ROUTES.BILLING}`;
}
