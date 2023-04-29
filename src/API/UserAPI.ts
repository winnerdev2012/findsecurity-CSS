import axios from "axios";
import {PConfig} from "../config/PConfig";
import {getAuthToken} from "../Integrations/LocalStorage";

const TIMEOUT = 10000;

export const updateProfile: any = async (data: any) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);

  if (!token) {
    return
  }

  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/users/update-profile`,
        data,
        {
          headers: {
            Authorization: token,
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

export const verifyEmailExists: any = async (email: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/users/verify-email-exists`,
        {
          email: email,
          organization_id: PConfig.ORGANIZATION_ID,
        },
        {
          timeout: TIMEOUT,
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
      .catch((err) => reject(err));
  });
}

export const getCollectionPoints: any = async (collection_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/users/collection-points?collection=${collection_id}`,
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
  })

}
