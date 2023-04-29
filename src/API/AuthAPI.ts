import axios from "axios";
import {PConfig} from "../config/PConfig";
import {getAuthToken} from "../Integrations/LocalStorage";

const TIMEOUT = 10000;

interface SignInInput {
  email?: string;
  firebase_uid?: string;
  source?: string;
}

interface SignInBrandInput {
  website: string;
  brand_name: string;
  username: string;
  email: string;
  organization_id: string;
}

/**
 *
 * @param wallet
 * @param email
 * @param firebase_uid
 */
export const signInUser: any = ({email, firebase_uid, source}: SignInInput) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const data = {
    email,
    firebase_uid,
    organizationId: organizationId,
    source: source,
  };
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/auth/signin`, data, {
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
          'Access-Control-Allow-Origin': '*',
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
};

export const signUpUser: any = (email:string, source:string) => {
  const params = {
    email: email,
    organization_id: PConfig.ORGANIZATION_ID,
    source: source,
  }
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/auth/signup`, params, {
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
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

export const getUserSessionData: any = (user_token?: string) => {
  const token = user_token || getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .get(`${PConfig.BACKEND_MAIN}/auth/user-session`, {
        timeout: TIMEOUT,
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
}

export const signUpBrand: any = (params: SignInBrandInput) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/auth/signup-brand`, params, {
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
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
