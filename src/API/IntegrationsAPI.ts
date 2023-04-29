import {PConfig} from "../config/PConfig";
import axios from "axios";
import {getAuthToken} from "../Integrations/LocalStorage";

const TIMEOUT = 10000;

export const getMailchimpOauthUrl: any = () => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .get(`${PConfig.BACKEND_MAIN}/integrations/mailchimp-oauth-url`, {
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

export const mailchimpValidateCode: any = (code: string, collection_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/integrations/mailchimp-validate-code`,
        {
          code,
          collection_id,
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
      .catch((err) => reject(err));
  });
}

export const getCollectionIntegrations: any = (collection_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios.get(`${PConfig.BACKEND_MAIN}/integrations/collection-integrations?collection_id=${collection_id}`, {
      timeout: TIMEOUT,
      headers: {
        "Authorization": `${token}`,
        'Access-Control-Allow-Origin': '*',
      }
    }).then((res) => {
      const data = res.data;

      resolve(data);
    }).catch((err) => reject(err));
  })
}

export const deleteMailchimpIntegration: any = (collection_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios.post(`${PConfig.BACKEND_MAIN}/integrations/delete-mailchimp`, {
        collection_id
      },
      {
        timeout: TIMEOUT,
        headers: {
          "Authorization": `${token}`,
          'Access-Control-Allow-Origin': '*',
        }
      }).then((res) => {
      const data = res.data;

      resolve(data);
    }).catch((err) => reject(err));
  })
}

export const getMailchimpLists: any = (collection_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios.get(`${PConfig.BACKEND_MAIN}/integrations/mailchimp-lists?collection_id=${collection_id}`, {
      timeout: TIMEOUT,
      headers: {
        "Authorization": `${token}`,
        'Access-Control-Allow-Origin': '*',
      }
    }).then((res) => {
      const data = res.data;

      resolve(data);
    }).catch((err) => reject(err));
  })
}

export const updateMailchimpList: any = (collection_id: string, list_id: string, list_name: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios.post(`${PConfig.BACKEND_MAIN}/integrations/update-mailchimp-list`,
      {
        collection_id,
        list_id,
        list_name
      }, {
        timeout: TIMEOUT,
        headers: {
          "Authorization": `${token}`,
          'Access-Control-Allow-Origin': '*',
        }
      }).then((res) => {
      const data = res.data;
      resolve(data);
    }).catch((err) => reject(err));
  })
}
