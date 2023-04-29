import axios from "axios";
import {PConfig} from "config/PConfig";
import {getAuthToken} from "../Integrations/LocalStorage";
import {CollectionHeaderState} from "../context/FloBuilderContext";
import {Collection} from "../Types/CollectionTypes";

export const getPartnerProjects = () => {
  const organizationId = PConfig.ORGANIZATION_ID;
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/partners/featured-projects?organization_id=${organizationId}&limit=100&offset=0`,
        {
          headers: {
            "x-api-key": `${PConfig.BACKEND_API_KEY}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        resolve({status: true, data: response.data});
      })
      .catch((error) => {
        console.log("errr: ", error);
        reject({status: false, data: error});
      });
  });
};

export const getCollectionBySlug: any = (collection_slug: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/collections/collection-by-slug?key=${collection_slug}`,
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
        reject(error)
      });
  });
};

export const getPublicCollectionById: any = (collection_id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/collections/collection-by-id?id=${collection_id}`,
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
        reject(error)
      });
  });
}

export const getCollectionsAdmin: any = (collection_id?: string | null) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/collections/admin-collections?collection=${collection_id}`,
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

export const getRewardsModules: any = (collection_id: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/rewards/admin-collection-rewards?collection=${collection_id}`,
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

export const addUserBrandMarketingData: any = (objective: string, attracted_by: string, collection_id: string) => {
  const data = {
    objective,
    attracted_by,
    collection_id
  }

  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/collections/add-user-brand-marketing-data`,
        data,
        {
          headers: {
            "x-api-key": `${PConfig.BACKEND_API_KEY}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch(function (error) {
        reject(error);
      });
  })
}

export const builderCreateCollection: any = (data: FormData) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/collections/builder-create-brand`, data, {
        headers: {
          "Authorization": `${token}`,
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
}

export const builderUpdateCollection: any = (data: FormData) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/collections/update-collection`, data, {
        headers: {
          "Authorization": `${token}`,
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
}

export const builderRemoveBanner: any = (collection_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  const data = {
    collection_id,
  }
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/collections/delete-banner`, data, {
        headers: {
          "Authorization": `${token}`,
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
}

export const deleteCollectionLink: any = (collection_id: string, link_key: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/collections/delete-collection-link`,
        {
          collection_id,
          link_key,
        },
        {
          headers: {
            "Authorization": `${token}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch(function (error) {
        reject(error);
      });
  })
}

export const updateCollectionLink: any = (collection_id: string, value: string, link_key: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/collections/update-collection-link`,
        {
          collection_id,
          value,
          link_key
        },
        {
          headers: {
            "Authorization": `${token}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch(function (error) {
        reject(error);
      });
  })
}

export const deleteCollection: any = (collection_id: string) => {
  const data = {collection_id}
  return new Promise((resolve, reject) => {
    axios.post(`${PConfig.BACKEND_MAIN}/collections/delete-collection`, data, {
      headers: {
        "x-api-key": `${PConfig.BACKEND_API_KEY}`,
        'Access-Control-Allow-Origin': '*',
      }
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const updateCollectionPermissions: any = (email: boolean, collection_id: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/collections/update-collection-permissions`,
        {
          collection_id,
          email,
        },
        {
          headers: {
            "Authorization": `${token}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export const saveCollectionChanges: any = (collection: Collection,  state: CollectionHeaderState) => {

  const data = new FormData();
  let isChangesToSave = false;
  data.append("collection_id", collection.id);
  if (collection.header_name !== state.title){
    data.append("header_name", state.title);
    isChangesToSave = true;
  }

  if (collection.description !== state.description){
    data.append("description", state.description);
    isChangesToSave = true;
  }

  if (state.header_button_text !== collection.header_button_text){
    data.append("header_button_text", state.header_button_text);
    if (state.header_button_text === ""){
      data.append("delete_header_button_text", "true");
    }
    isChangesToSave = true;
  }

  if (state.showDescription.toString() !== collection.show_description.toString()){
    data.append("show_description", state.showDescription.toString());
    isChangesToSave = true;
  }

  if (state.showPageStatistics.toString() !== collection.show_stats.toString()){
    data.append("show_stats", state.showPageStatistics.toString());
    isChangesToSave = true;
  }

  if (state.showSocialLinks.toString() !== collection.show_urls.toString()){
    data.append("show_urls", state.showSocialLinks.toString());
    isChangesToSave = true;
  }

  if (state.showButton.toString() !== collection.show_button.toString()){
    data.append("show_button", state.showButton.toString());
    isChangesToSave = true;
  }

  if (state.main_campaign_id !== collection.main_campaign_id){
    data.append("main_campaign_id", state.main_campaign_id || "null");
    isChangesToSave = true;
  }

  if (isChangesToSave){
    return builderUpdateCollection(data);
  }
  return Promise.resolve();

}

