import {PConfig} from "../config/PConfig";
import {getAuthToken} from "../Integrations/LocalStorage";
import axios from "axios";
import {Activity, ActivityEditorState} from "../Types/QuestTypes";

const TIMEOUT = 10000;

export const getActivityAdminData: any = (activity_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .get(`${PConfig.BACKEND_MAIN}/activities/activity-admin?id=${activity_id}`, {
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

export const adminCampaignActivities: any = (campaign_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .get(`${PConfig.BACKEND_MAIN}/activities/admin-campaign-activities?campaign=${campaign_id}`, {
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

export const createActivityTemplate: any = (action_key: string, collection_id: string, campaign_id: string) => {
  const data = new FormData();
  data.append("action_key", action_key);
  data.append("collection_id", collection_id);
  data.append("campaign_id", campaign_id);
  data.append("organization_id", PConfig.ORGANIZATION_ID || "");
  return createActivity(data);
};

const createActivity: any = (data: FormData) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  data.append("organization_id", organizationId || "");
  const token = getAuthToken(organizationId);
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/activities/create-activity`, data, {
        headers: {
          Authorization: `${token}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const updateActivityData: any = (data: FormData) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/activities/update-activity`, data, {
        headers: {
          Authorization: `${token}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const deleteSecondaryImage: any = (activity_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  const data = {activity_id};
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/activities/remove-secondary-image`, data, {
        headers: {
          Authorization: `${token}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const deleteActivity: any = (activity_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  const data = {activity_id};
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/activities/delete-activity`, data, {
        headers: {
          Authorization: `${token}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const updateActivityOrder: any = (activity_id: string, campaign_id: string, order: number) => {
  const data = {activity_id, campaign_id, order};
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/activities/update-activity-order`, data, {
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

export const getNextActivity: any = (campaign_slug: string) => {
	const token = getAuthToken(PConfig.ORGANIZATION_ID);
	return new Promise((resolve, reject) => {
		axios
			.get(`${PConfig.BACKEND_MAIN}/activities/next-activity?campaign_slug=${campaign_slug}`, {
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

export const getPreviousActivity: any = (activity_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  let url = `${PConfig.BACKEND_MAIN}/activities/previous-activity?activity_id=${activity_id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        timeout: TIMEOUT,
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
}

export const getNextActivityByActivityId: any = (activity_id: string, mode?: string | null) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  let url = `${PConfig.BACKEND_MAIN}/activities/next-activity?activity_id=${activity_id}`;
  if (mode) {
    url = url + `&mode=${mode}`;
  }
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        timeout: TIMEOUT,
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

export const getActivityByIdUserSide: any = (activity_id: string, user_id?: string | null) => {
  const url = user_id
    ? `${PConfig.BACKEND_MAIN}/activities/activity?id=${activity_id}&user_id=${user_id}`
    : `${PConfig.BACKEND_MAIN}/activities/activity?id=${activity_id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
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

export const claimUserAction: any = (activity_id: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  const data = new FormData();
  data.append("activity_id", activity_id);
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/activities/claim-activity`, data, {
        headers: {
          Authorization: `${token}`,
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

export const claimFileActivity: any = (activity_id: string, file: any) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  const data = new FormData();
  data.append("file", file);
  data.append("activity_id", activity_id);
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/activities/claim-activity`, data, {
        headers: {
          Authorization: `${token}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const activityChanged: any = (activity: Activity, state: ActivityEditorState) => {

  let isChangesToSave = false;
  const data = new FormData();
  if (!activity || (activity.activity_id !== state.activity_id)) {
    return {isChangesToSave, data};
  }
  data.append("activity_id", state.activity_id);
  if (Number(state.points) !== Number(activity.points)) {
    data.append("points", state.points.toString());
    isChangesToSave = true;
  }

  if (state.showSecondaryImage !== activity.show_secondary_image) {
    data.append("show_secondary_image", state.showSecondaryImage ? "true" : "false");
    isChangesToSave = true;
  }

  if (state.secondaryImageFile) {
    data.append("secondary", state.secondaryImageFile);
    isChangesToSave = true;
  }

  if (state.activity_url !== activity.activity_url) {
    console.log("activity_url", state.activity_url, activity.activity_url);
    if (
      !state.activity_url ||
      state.activity_url === "" ||
      state.activity_url === null ||
      state.activity_url === undefined
    ) {
      data.append("activity_url", "null");
    } else {
      data.append("activity_url", state.activity_url);
    }
    isChangesToSave = true;
  }

  if (state.text_content !== activity.text_content) {
    data.append("text_content", state.text_content || "");
    isChangesToSave = true;
  }

  if (state.file) {
    data.append("file", state.file);
    isChangesToSave = true;
  }

  if (state.image_tint_color !== activity.image_tint_color) {
    data.append("image_tint_color", state.image_tint_color || "#00000");
    isChangesToSave = true;
  }

  if (state.name !== activity.name) {
    data.append("name", state.name);
    isChangesToSave = true;
  }

  if (state.description !== activity.description) {
    data.append("description", state.description);
    isChangesToSave = true;
  }

  return {isChangesToSave, data};
}

export const saveActivityChanges: any = (activity: Activity, state: ActivityEditorState) => {
  if (!activity) {
    return;
  }
  let {isChangesToSave, data} = activityChanged(activity, state);

  if (isChangesToSave) {
    return updateActivityData(data);
  } else {
    return Promise.resolve({activity: activity});
  }
};
