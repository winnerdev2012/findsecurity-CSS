import React, { createContext, useContext, useEffect, useState } from "react";
import { CollectionPublic, Theme } from "Types/CollectionTypes";
import { Campaign, CampaignProgress, CampaignPublic } from "../Types/CampaignsTypes";
import { getCollectionBySlug, getPublicCollectionById } from "../API/CollectionsAPI";
import { errorHandle } from "../Util/ErrorHandle";
import { getCampaignBySlug, getCampaignsUserCanAccess } from "../API/CampaignsAPI";
import { getPublicReward, getPublicRewards } from "../API/RewardsAPI";
import { getDefaultTheme } from "../API/ThemesAPI";
import {RewardPublic, RewardSummary} from "../Types/RewardsTypes";
import { getActivityByIdUserSide } from "../API/ActivitiesAPI";
import { Activity } from "../Types/QuestTypes";
import { getCollectionPoints } from "../API/UserAPI";
import { AuthUserContext } from "./AuthUserContext";

export interface PublicContextI {
  publicCollection: CollectionPublic | null;
  campaigns: Campaign[];
  perks: any[];
  theme: Theme | null;
  publicCampaign: CampaignPublic | null;
  publicReward: RewardPublic | null;
  publicActivity: Activity | null;
  userPoints: number;
  campaignLoading: boolean;
  rewardLoading: boolean;
  progress: CampaignProgress;
  fetchPublicCollection: (collection_slug: string) => void;
  fetchPublicCampaign: (campaign_slug: string, user_id?: string | null, isEnd?: boolean) => void;
  fetchPublicReward: (reward_id: string, user_id: string | null) => void;
  fetchActivityPublic: (activity_id: string) => void;
  fetchPublicCollectionById: (collection_id: string) => void;
  fetchUserPoints: (collection_id?: string) => void;
  setProgress: ({ total, completed, user_completed }: CampaignProgress) => void;
  fetchPerks: (collection_id: string) => void;
  fetchCampaigns: (collection_id: string, user_id: string | null) => void;
  setPublicReward: (reward: RewardPublic | null) => void;
}

const defaultState = {
  publicCollection: null,
  campaigns: [],
  perks: [],
  theme: null,
  publicReward: null,
  publicCampaign: null,
  publicActivity: null,
  userPoints: 0,
  campaignLoading: false,
  rewardLoading: false,
  progress: { total: 0, completed: 0, user_completed: false },
  fetchPublicCollection: (collection_slug: string) => {
  },
  fetchPublicCampaign: (campaign_slug: string, user_id?:string | null, isEnd?: boolean) => {
  },
  fetchPublicReward: (reward_id: string, user_id: string | null) => {
  },
  fetchActivityPublic: (activity_id: string) => { },
  fetchPublicCollectionById: (collection_id: string) => { },
  fetchUserPoints: (collection_id?: string) => { },
  setProgress: ({ total, completed }: CampaignProgress) => { },
  fetchPerks: (collection_id: string) => { },
  fetchCampaigns: (collection_id: string, user_id: string | null) => { },
  setPublicReward: (reward: RewardPublic | null) => { },
}


export const PublicContext = createContext<PublicContextI>(defaultState)

const PublicContextProvider = (props: any) => {
  const { isUserLoggedIn, user } = useContext(AuthUserContext);
  const [publicCollection, setPublicCollection] = useState<CollectionPublic | null>(null);
  const [publicCampaign, setPublicCampaign] = useState<CampaignPublic | null>(null);
  const [publicReward, setPublicReward] = useState<RewardPublic | null>(null);
  const [publicActivity, setPublicActivity] = useState<Activity | null>(null);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [perks, setPerks] = useState<RewardSummary[]>([]);
  const [theme, setTheme] = useState<Theme | null>(null);
  const [collectionLoading, setCollectionLoading] = useState<boolean>(false);
  const [campaignLoading, setCampaignLoading] = useState<boolean>(false);
  const [rewardLoading, setRewardLoading] = useState<boolean>(false);
  const [activityLoading, setActivityLoading] = useState<boolean>(false);
  const [userPoints, setUserPoints] = useState<number>(0);
  const [progress, setProgress] = useState<CampaignProgress>(defaultState.progress);

  useEffect(() => {
    if (publicCollection) {
      const user_id = isUserLoggedIn && user?.id ? user?.id : null;
      fetchCampaigns(publicCollection.id, user_id)
      fetchPerks(publicCollection.id)
    }
  }, [publicCollection?.id, isUserLoggedIn, user?.id])

  const fetchPublicCollection = async (slug: string) => {
    if (collectionLoading) {
      return;
    }
    setCollectionLoading(true);
    try {
      const response = await getCollectionBySlug(slug);
      const { collection, theme } = response
      setPublicCollection(collection)
      setTheme(theme)
    } catch (e) {
      errorHandle(e, "Error fetching collection")
    }

    setCollectionLoading(false);

  }

  const fetchPublicCollectionById = async (id: string) => {
    if (collectionLoading) {
      return;
    }
    setCollectionLoading(true);
    try {
      const response = await getPublicCollectionById(id);
      const { collection, theme } = response
      setPublicCollection(collection)
      setTheme(theme)
    } catch (e) {
      errorHandle(e, "Error fetching collection")
    }

    setCollectionLoading(false);

  }

  const fetchPublicCampaign = async (slug: string, user_id?: string | null, isEnd = false) => {
    if (campaignLoading) {
      return;
    }
    setCampaignLoading(true);
    try {
      const response = await getCampaignBySlug(slug, user_id, isEnd);
      const { campaign } = response
      setPublicCampaign(campaign)
      if (!theme) {
        const { theme } = await getDefaultTheme(campaign.collection_id);
        setTheme(theme)
      }
    } catch (e) {
      errorHandle(e, "Error fetching collection")
    }

    setCampaignLoading(false);
  }

  const fetchPublicReward = async (reward_id: string, user_id?: string | null) => {
    if (rewardLoading) {
      return;
    }
    setRewardLoading(true);
    try {
      const response = await getPublicReward(reward_id, user_id);
      setPublicReward(response.reward)
    } catch (e) {
      errorHandle(e, "Error fetching reward")
    }
    setRewardLoading(false)
  }

  const fetchCampaigns = async (collection_id: string, user_id: string | null) => {
    setCampaignLoading(true);
    try {
      const response = await getCampaignsUserCanAccess(collection_id, user_id);
      const sortedCampaigns = response.campaigns.sort((a:Campaign, b:Campaign) => Number(a.user_completed) - Number(b.user_completed));
      setCampaigns(sortedCampaigns);
    } catch (e) {
      errorHandle(e, "Error fetching campaigns")
    }
    setCampaignLoading(false);
  }

  const fetchPerks = async (collection_id: string) => {
    setRewardLoading(true);
    try {
      const user_id = isUserLoggedIn && user?.id ? user?.id : null;
      const response = await getPublicRewards(collection_id, user_id);
      const sortedPerks = response.rewards.sort((a:RewardSummary, b:RewardSummary) => Number(a.claimed) - Number(b.claimed));
      setPerks(sortedPerks)
    } catch (e) {
      errorHandle(e, "Error fetching perks")
    }
    setRewardLoading(false);
  }

  const fetchActivityPublic = async (id: string) => {
    if (activityLoading) {
      return;
    }
    setActivityLoading(true);
    try {
      const user_id = isUserLoggedIn && user?.id ? user?.id : null;
      const { activity: data } = await getActivityByIdUserSide(id, user_id);
      setPublicActivity(data)
      if (data.origin_collection_id !== publicCollection?.id) {
        await fetchPublicCollectionById(data.origin_collection_id);
      }
    } catch (e) {
      console.log(e)
      errorHandle(e, "Error Activity")
    }
    setActivityLoading(false)
  }

  const fetchUserPoints = async (collection_id?: string) => {
    let id = collection_id || publicCollection?.id;
    if (!id) {
      return
    }
    try {
      const { points } = await getCollectionPoints(id);
      setUserPoints(points)
    } catch (e) {
      errorHandle(e, "Error fetching user points")
    }
  }

  return (
    <PublicContext.Provider
      value={{
        publicCollection,
        campaigns,
        campaignLoading,
        rewardLoading,
        perks,
        theme,
        publicCampaign,
        publicReward,
        publicActivity,
        userPoints,
        progress,
        fetchPublicCollection,
        fetchPublicCampaign,
        fetchPublicReward,
        fetchActivityPublic,
        fetchPublicCollectionById,
        fetchUserPoints,
        setProgress,
        fetchPerks,
        fetchCampaigns,
        setPublicReward,
      }}
    >
      {props.children}
    </PublicContext.Provider>
  )
}

export default PublicContextProvider;
