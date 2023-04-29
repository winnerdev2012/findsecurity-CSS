import {PConfig} from "../config/PConfig";
import axios from "axios";
import {getAuthToken} from "../Integrations/LocalStorage";
import {RewardEditor} from "../Types/RewardsTypes";
import {parseCodes} from "../Util/TextUtils";
import {PAGE_END_KEYS} from "../Util/StatusUtil";
import {sameMembers} from "../Util/ArraysUtil";

export const createReward: any = (collection_id: string, reward_type: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/rewards/create-reward`,
        {
          collection_id,
          reward_type,
        },
        {
          headers: {
            Authorization: `${token}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getAdminReward: any = (reward_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .get(`${PConfig.BACKEND_MAIN}/rewards/admin-reward?id=${reward_id}`, {
        headers: {
          Authorization: `${token}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

export const updateReward: any = (data: FormData) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/rewards/update-reward`, data, {
        headers: {
          Authorization: `${token}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteReward = (reward_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/rewards/delete-reward`,
        {reward_id},
        {
          headers: {
            Authorization: `${token}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const setupRewardEndPage = (reward_id: string, end_page_type: string) => {
  const data = new FormData();
  data.append("reward_id", reward_id);
  data.append("end_page_type", end_page_type);
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/rewards/update-reward`, data, {
        headers: {
          Authorization: `${token}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getPublicRewards: any = (collection_id: string, user_id: string | null) => {
  const url = user_id
    ? `${PConfig.BACKEND_MAIN}/rewards/rewards?collection=${collection_id}&user=${user_id}`
    : `${PConfig.BACKEND_MAIN}/rewards/rewards?collection=${collection_id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        const data = res.data;

        resolve(data);
      })
      .catch((err) => reject(err));
  });
};

export const getPublicReward: any = (reward_id: string, user_id: string | null) => {
  const url = user_id
    ? `${PConfig.BACKEND_MAIN}/rewards/reward-detail?id=${reward_id}&user=${user_id}`
    : `${PConfig.BACKEND_MAIN}/rewards/reward-detail?id=${reward_id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        const data = res.data;

        resolve(data);
      })
      .catch((err) => reject(err));
  });
};

export const getRewardPreview: any = (reward_id: string) => {
  const url = `${PConfig.BACKEND_MAIN}/rewards/reward-preview?id=${reward_id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        const data = res.data;

        resolve(data);
      })
      .catch((err) => reject(err));
  });
};

export const claimReward: any = (reward_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/rewards/claim-reward`,
        {
          reward_id,
        },
        {
          headers: {
            Authorization: `${token}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((res) => {
        const data = res.data;

        resolve(data);
      })
      .catch((err) => reject(err));
  });
};

export const getEndPageRewardsForRewardsPage: any = (reward_id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${PConfig.BACKEND_MAIN}/rewards/rewards-end-page?id=${reward_id}`, {
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateClaimInfo: any = (data: FormData) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/rewards/update-claim-info`, data, {
        headers: {
          Authorization: `${token}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const saveRewardChanges: any = (state: RewardEditor) => {
  const reward = state.reward;

  if (!reward) return;

  let isChangesToSave = false;

  const data = new FormData();

  data.append("reward_id", reward.reward_id);

  if (state.name !== reward.name) {
    data.append("name", state.name);
    isChangesToSave = true;
  }

  if (state.description !== reward.description) {
    data.append("description", state.description);
    isChangesToSave = true;
  }

  if (state.points !== reward.points) {
    data.append("points", state.points.toString());
    isChangesToSave = true;
  }

  if (state.requires_verification !== reward.requires_verification) {
    data.append("requires_verification", state.requires_verification.toString());
    isChangesToSave = true;
  }

  if (state.show_description !== reward.show_description) {
    data.append("show_description", state.show_description.toString());
    isChangesToSave = true;
  }

  let newReqArray = [];
  let originalReqArray = [];
  for (let req in state.requisites) {
    const item = state.requisites[req];
    newReqArray.push(item.id);
  }

  for (let req in reward.requisites) {
    const item = reward.requisites[req];
    originalReqArray.push(item.id);
  }

  if (!sameMembers(newReqArray, originalReqArray)) {
    isChangesToSave = true;
    data.append("requisites", JSON.stringify(newReqArray));
  }

  if (state.start_date !== reward.start_date) {
    if (state.start_date === null || state.start_date === undefined) {
      data.append("start_date", "null");
    } else {
      data.append("start_date", new Date(state.start_date).toISOString());
    }
  }

  if (state.end_date !== reward.end_date) {
    isChangesToSave = true;
    if (state.end_date === null || state.end_date === undefined) {
      data.append("end_date", "null");
    } else {
      console.log(state.end_date);
      data.append("end_date", new Date(state.end_date).toISOString());
    }
  }

  if (state.quantity !== reward.quantity) {
    isChangesToSave = true;
    data.append("quantity", state.quantity.toString());
  }

  if (state.button_text !== reward.button_text) {
    isChangesToSave = true;
    data.append("button_text", state.button_text);
  }

  if (state.redirect_campaign_id !== reward.redirect_campaign_id) {
    isChangesToSave = true;
    if (state.redirect_campaign_id === null || state.redirect_campaign_id === undefined) {
      data.append("redirect_campaign_id", "null");
    } else {
      data.append("redirect_campaign_id", state.redirect_campaign_id);
    }
  }

  if (state.imageFile) {
    isChangesToSave = true;
    data.append("image", state.imageFile);
  }

  if (state.show_redemption_description !== reward.show_redemption_description) {
    isChangesToSave = true;
    if (state.show_redemption_description === null || state.show_redemption_description === undefined) {
      data.append("show_redemption_description", "null");
    } else {
      data.append("show_redemption_description", state.show_redemption_description.toString());
    }
  }

  if (state.redemption_button_text !== reward.redemption_button_text) {
    isChangesToSave = true;
    data.append("redemption_button_text", state.redemption_button_text);
  }

  if (state.codes !== parseCodes(reward.codes)) {
    isChangesToSave = true;
    data.append("codes", state.codes || "null");
  }

  if (state.redemptionImageFile) {
    isChangesToSave = true;
    data.append("redemption_image", state.redemptionImageFile);
  }

  if (state.downloadFile) {
    data.append("file", state.downloadFile);
    isChangesToSave = true;
  }

  if (state.reward_type !== reward.reward_type) {
    isChangesToSave = true;
    data.append("reward_type", state.reward_type);
  }

  if (state.reward_url !== reward.reward_url) {
    isChangesToSave = true;
    data.append("reward_url", state.reward_url || "null");
  }

  if (state.end_page_type !== reward.end_page_type) {
    if (
      state.end_page_type !== null &&
      state.end_page_type !== undefined &&
      state.end_page_type !== "" &&
      state.end_page_type !== "null"
    ) {
      isChangesToSave = true;
      data.append("end_page_type", state.end_page_type);
    }
  }

  let newRewardsArr = [];
  let originalRewardsArr = [];
  if (state.end_page_type === PAGE_END_KEYS.PERKS_PAGE) {
    for (let item of reward?.endPageRewards || []) {
      originalRewardsArr.push(item.reward_id);
    }
    for (let item of state.perksToDisplay) {
      newRewardsArr.push(item.reward_id);
    }
  }

  if (!sameMembers(originalRewardsArr, newRewardsArr)) {
    data.append("end_page_rewards", JSON.stringify(newRewardsArr));
    isChangesToSave = true;
  }


  if (state.endImageFile) {
    isChangesToSave = true;
    data.append("end_image", state.endImageFile);
  }

  if (state.end_campaign_id !== reward.end_campaign_id) {
    isChangesToSave = true;
    if (state.end_campaign_id === null || state.end_campaign_id === undefined) {
      data.append("end_campaign_id", "null");
    } else {
      data.append("end_campaign_id", state.end_campaign_id);
    }
  }

  if (state.end_website !== reward.end_website) {
    isChangesToSave = true;
    if (state.end_website === null || state.end_website === undefined) {
      data.append("end_website", "null");
    } else {
      data.append("end_website", state.end_website);
    }
  }

  if (state.end_button_text !== reward.end_button_text) {
    isChangesToSave = true;
    data.append("end_button_text", state.end_button_text || "");
  }

  if (state.endTitle !== reward.end_title) {
    isChangesToSave = true;
    data.append("end_title", state.endTitle);
  }

  if (state.endDescription !== reward.end_description) {
    isChangesToSave = true;
    data.append("end_description", state.endDescription);
  }

  if (state.showEndSocialLinks !== reward.show_end_social) {
    isChangesToSave = true;
    data.append("show_end_social", state.showEndSocialLinks ? "true" : "false");
  }

  if (state.showEndDescription !== reward.show_end_description) {
    isChangesToSave = true;
    data.append("show_end_description", state.showEndDescription ? "true" : "false");
  }

  if (isChangesToSave){
    return updateReward(data);
  } else {
    return null
  }
};

export const deleteRewardImage: any = async (reward_id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/rewards/delete-reward-image`,
        {
          reward_id: reward_id,
        },
        {
          headers: {
            "x-api-key": `${PConfig.BACKEND_API_KEY}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteRedemptionImage: any = async (reward_id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/rewards/delete-redemption-image`,
        {
          reward_id: reward_id,
        },
        {
          headers: {
            "x-api-key": `${PConfig.BACKEND_API_KEY}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteRewardEndImage: any = async (reward_id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/rewards/delete-end-image`,
        {
          reward_id: reward_id,
        },
        {
          headers: {
            "x-api-key": `${PConfig.BACKEND_API_KEY}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateRewardOrder: any = async (reward_id: string, order: number) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/rewards/update-reward-order`,
        {
          reward_id: reward_id,
          order: order,
        },
        {
          headers: {
            "x-api-key": `${PConfig.BACKEND_API_KEY}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

}
