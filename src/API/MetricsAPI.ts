import {PConfig} from "../config/PConfig";
import axios from "axios";
import {getAuthToken} from "../Integrations/LocalStorage";

const TIMEOUT = 10000;

export const getCollectionMetrics: any = (collection_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .get(`${PConfig.BACKEND_MAIN}/metrics/collection-metrics?collection_id=${collection_id}`, {
        timeout: TIMEOUT,
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch(function (error) {
        reject(error)
      });
  });
}

interface CollectionUsersParams {
  limit?: number;
  offset?: number;
  start?: string;
  end?: string;
  collection_id: string;
}

export const getCollectionUsers: any = ({
                                          limit = 10, offset = 0, start, end, collection_id
                                        }: CollectionUsersParams) => {
  let url = `${PConfig.BACKEND_MAIN}/metrics/collection-users?collection_id=${collection_id}&limit=${limit}&offset=${offset}`;
  if (start) {
    url += `&start=${start}`
  }

  if (end) {
    url += `&end=${end}`
  }
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .get(
        url,
        {
          headers: {
            "Authorization": `${token}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error)
      });
  });
};

export const getCampaignMetrics: any = (campaign_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .get(`${PConfig.BACKEND_MAIN}/metrics/campaign-stats?campaign_id=${campaign_id}`, {
        timeout: TIMEOUT,
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch(function (error) {
        reject(error)
      });
  });
}

export const getCampaignUsers: any = ({campaign_id, limit = 10, offset = 0, start, end}: { campaign_id: string, limit?: number, offset?: number, start?: string, end?: string }) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/metrics/campaign-users?campaign_id=${campaign_id}&limit=${limit}&offset=${offset}${start ? `&start=${start}&end=${end}` : ''}`,
        {
          headers: {
            "Authorization": `${token}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error)
      });
  });
}

export const getRewardMetrics: any = (reward_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .get(`${PConfig.BACKEND_MAIN}/metrics/reward-stats?reward_id=${reward_id}`, {
        timeout: TIMEOUT,
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch(function (error) {
        reject(error)
      });
  });
}

interface RewardUsersParams {
  limit?: number;
  offset?: number;
  start?: string;
  end?: string;
  reward_id: string;
}

export const getRewardUsers: any = ({reward_id, limit = 10, offset=0, start, end}: RewardUsersParams) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/metrics/reward-users?reward_id=${reward_id}&limit=${limit}&offset=${offset}${start ? `&start=${start}&end=${end}` : ''}`,
        {
          headers: {
            "Authorization": `${token}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error)
      });
  })
}
