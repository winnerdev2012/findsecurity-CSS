import {PConfig} from "../config/PConfig";
import axios from "axios";
import {getAuthToken} from "../Integrations/LocalStorage";
import {EditorHeaderState} from "../context/FloBuilderContext";
import {PAGE_END_KEYS} from "../Util/StatusUtil";
import {sameMembers} from "../Util/ArraysUtil";

const TIMEOUT = 8000;

export const createCampaign: any = (
  collection_id: string,
  name: string,
  description: string
) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  const data = {
    collection_id,
    name,
    description,
    organization_id: PConfig.ORGANIZATION_ID,
  };

  const config = {
    method: "post",
    url: `${PConfig.BACKEND_MAIN}/campaigns/create-campaign`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    data: data,
  };

  return new Promise((resolve, reject) => {
    // @ts-ignore
    axios(config)
      .then(function (response: any) {
        resolve(response.data);
      })
      .catch(function (error: any) {
        reject(error);
      });
  });
};

export const getCollectionCampaigns: any = (collection_id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/campaigns/collection-campaigns?collection=${collection_id}`,
        {
          headers: {
            "x-api-key": `${PConfig.BACKEND_API_KEY}`,
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

export const deleteCampaign: any = (campaign_id: string) => {
  const data = {campaign_id};
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  const url = `${PConfig.BACKEND_MAIN}/campaigns/remove-campaign`;
  const config = {
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    data: data,
  };

  return new Promise((resolve, reject) => {
    // @ts-ignore
    axios(config)
      .then(function (response: any) {
        resolve(response.data);
      })
      .catch(function (error: any) {
        reject(error);
      });
  });
};

export const updateCampaignOrder: any = (
  campaign_id: string,
  order: number
) => {
  const data = {id: campaign_id, order};
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/campaigns/update-campaign-order`, data, {
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
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

export const updateCampaignStatus: any = (
  campaign_id: string,
  status: number
) => {
  const data = {id: campaign_id, status};
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/campaigns/update-campaign-status`, data, {
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
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

export const updateCampaignData: any = (data: FormData) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/campaigns/update-campaign-data`, data, {
        headers: {
          Authorization: `${token}`,
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

export const getCampaignAdminData: any = (campaign_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/campaigns/campaign-admin?id=${campaign_id}`,
        {
          headers: {
            Authorization: `${token}`,
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

export const setupCampaignEndPage = (
  campaign_id: string,
  end_page_type: string
) => {
  const data = new FormData();
  data.append("id", campaign_id);
  data.append("end_page_type", end_page_type);
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/campaigns/update-campaign-data`, data, {
        headers: {
          Authorization: `${token}`,
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

export const getCampaignsUserCanAccess: any = (
  collection_id: string,
  user_id?: string | null
) => {
  let url = `${PConfig.BACKEND_MAIN}/campaigns/campaigns?collection_id=${collection_id}`;
  if (user_id) {
    url = `${PConfig.BACKEND_MAIN}/campaigns/campaigns?collection_id=${collection_id}&user_id=${user_id}`;
  }

  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
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

export const getCampaignBySlug: any = (
  slug: string,
  user_id?: string | null,
  isEndPage?: boolean
) => {
  let url = `${PConfig.BACKEND_MAIN}/campaigns/campaign-by-slug?slug=${slug}`;
  if (user_id) {
    url = url + `&user_id=${user_id}`;

    if (isEndPage) {
      url = url + `&is_end_page=true`;
    }
  }

  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
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

export const getEndPageRewards: any = (campaign_id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/campaigns/end-page-rewards?id=${campaign_id}`,
        {
          headers: {
            "x-api-key": `${PConfig.BACKEND_API_KEY}`,
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

export const saveCampaignChanges: any = (state: EditorHeaderState) => {
  let isChanged = false;
  const campaign = state.campaign;
  if (!campaign) {
    return;
  }
  const data = new FormData();
  data.append("id", campaign.id);
  if (campaign.name !== state.campaign_name) {
    data.append("name", state.campaign_name);
    isChanged = true;
  }

  if (state.campaign_description !== campaign.description) {
    data.append("description", state.campaign_description);
    isChanged = true;
  }

  if (state.showDescription !== campaign.show_description) {
    data.append("show_description", state.showDescription ? "true" : "false");
    isChanged = true;
  }

  if (
    state.showEndSocialLinks?.toString() !== campaign.show_end_social.toString()
  ) {
    data.append("show_end_social", state.showEndSocialLinks ? "true" : "false");
    isChanged = true;
  }

  if (state.showEndDescription !== campaign.show_end_description) {
    data.append(
      "show_end_description",
      state.showEndDescription ? "true" : "false"
    );
    isChanged = true;
  }

  if (state.endTitle !== campaign.end_title) {
    data.append("end_title", state.endTitle);
    isChanged = true;
  }

  if (state.endDescription !== campaign.end_description) {
    data.append("end_description", state.endDescription);
    isChanged = true;
  }

  if (state.terms_and_conditions !== campaign.terms_and_conditions) {
    data.append("terms_and_conditions", state.terms_and_conditions);
    isChanged = true;
  }

  if (state.end_button_text !== campaign.end_button_text) {
    data.append("end_button_text", state.end_button_text);
    isChanged = true;
  }
  if (state.end_website !== campaign.end_website) {
    data.append("end_website", state.end_website ? state.end_website : "null");
    isChanged = true;
  }

  if (state.end_campaign_id !== campaign.end_campaign_id) {
    data.append(
      "end_campaign_id",
      state.end_campaign_id ? state.end_campaign_id : "null"
    );
    isChanged = true;
  }

  if (state.endImageFile) {
    data.append("end_image", state.endImageFile);
    isChanged = true;
  }

  if (state.end_page_type !== campaign.end_page_type) {
    if (
      state.end_page_type !== null &&
      state.end_page_type !== undefined &&
      state.end_page_type !== "" &&
      state.end_page_type !== "null"
    ) {
      data.append("end_page_type", state.end_page_type);
      isChanged = true;
    }
  }

  const arrData = [];
  const originalArr = [];
  if (state.end_page_type === PAGE_END_KEYS.PERKS_PAGE) {
    for (let item of state.campaign?.endPageRewards || []) {
      originalArr.push(item.reward_id);
    }
    for (let item of state.perksToDisplay) {
      arrData.push(item.reward_id);
    }
  }

  if (!sameMembers(originalArr, arrData)) {
    isChanged = true;
    data.append("end_page_rewards", JSON.stringify(arrData));
  }

  if (state.imageFile){
    data.append("image", state.imageFile);
    isChanged = true;
  }

  if (isChanged) {
    return updateCampaignData(data);
  } else {
    return;
  }
};

export const deleteCampaignEndImage: any = async (campaign_id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/campaigns/delete-campaign-end-image`,
        {
          campaign_id: campaign_id,
        },
        {
          headers: {
            "x-api-key": `${PConfig.BACKEND_API_KEY}`,
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

export const deleteCampaignImage: any = async (campaign_id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/campaigns/delete-campaign-image`,
        {
          campaign_id: campaign_id,
        },
        {
          timeout: TIMEOUT,
          headers: {
            "x-api-key": `${PConfig.BACKEND_API_KEY}`,
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

interface GetProgressParams {
  campaign_id?: string;
  activity_id: string;
}

export const getCampaignProgress: any = ({
                                           campaign_id,
                                           activity_id,
                                         }: GetProgressParams) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);

  if (!campaign_id && !activity_id) {
    return Promise.reject("No campaign_id or activity_id provided");
  }
  let url = "";

  if (activity_id) {
    url = `${PConfig.BACKEND_MAIN}/campaigns/campaign-progress?activity_id=${activity_id}`;
  }

  if (campaign_id) {
    url = `${PConfig.BACKEND_MAIN}/campaigns/campaign-progress?campaign_id=${campaign_id}`;
  }
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          Authorization: `${token}`,
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

export const getAvailableCampaign: any = (collection_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .get(`${PConfig.BACKEND_MAIN}/campaigns/available-campaign?collection_id=${collection_id}`, {
        timeout: 10000,
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
