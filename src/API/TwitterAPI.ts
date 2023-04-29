import axios from "axios";
import {getAuthToken} from "../Integrations/LocalStorage";
import {PConfig} from "../config/PConfig";



/**
 *  Oauth Step 1
 * @return {Promise<unknown>}
 */
export const requestTwitterToken: any = (origin?: string|null) => {
  const url = PConfig.BACKEND_MAIN + "/twitter/oauth/request_token";
  const token = getAuthToken(PConfig.ORGANIZATION_ID);

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url,
        method: "POST",
        data: {organizationId: PConfig.ORGANIZATION_ID, origin},
        headers: {
          "Authorization": `${token}`,
          'Access-Control-Allow-Origin': '*',
        }
      });

      const {oauth_token} = response.data;

      const authenticateUrl = `https://api.twitter.com/oauth/authenticate?oauth_token=${oauth_token}`;

      resolve({authenticateUrl});
    } catch (e) {
      reject(e);
    }
  });
};

// Step 3
export const requestTwitterAccessToken: any = (oauth_token: string, oauth_verifier: string) => {
  const url = PConfig.BACKEND_MAIN + "/twitter/oauth/access_token";
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url,
        method: "POST",
        data: {
          oauth_token,
          oauth_verifier,
          organizationId: PConfig.ORGANIZATION_ID,
        },
        headers: {
          "Authorization": `${token}`,
          'Access-Control-Allow-Origin': '*',
        }
      });
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

//Authenticated resource access
export const authenticateResourceAccess: any = (oauth_token: string, user_id: string) => {
  const url = PConfig.BACKEND_MAIN + "/twitter/users/twitter_verify";
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url,
        method: "POST",
        data: {
          token: oauth_token,
          id: user_id,
          organizationId: PConfig.ORGANIZATION_ID,
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      });
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

export const followTwitter = (twitterUserId: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  const url = PConfig.BACKEND_MAIN + "/twitter/users/follow-user-id";
  return new Promise(async (resolve, reject) => {
    try {
      // @ts-ignore
      const response = await axios({
        url,
        method: "POST",
        data: {twitterUserId},
        headers: {Authorization: token, 'Access-Control-Allow-Origin': '*',},
      });
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  })
}

export const retweetPost = (tweetId: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  const url = PConfig.BACKEND_MAIN + "/twitter/users/retweet";
  return new Promise(async (resolve, reject) => {
    try {
      // @ts-ignore
      const response = await axios({
        url,
        method: "POST",
        data: {tweetId, organizationId: PConfig.ORGANIZATION_ID},
        headers: {Authorization: token, 'Access-Control-Allow-Origin': '*',},
      });
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

export const likePostApiV1 = (tweetId: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  const url = PConfig.BACKEND_MAIN + "/twitter/give-like-to-tweet";
  return new Promise(async (resolve, reject) => {
    try {
      // @ts-ignore
      const response = await axios({
        url,
        method: "POST",
        data: {tweet_id: tweetId},
        headers: {Authorization: token, 'Access-Control-Allow-Origin': '*',},
      });
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
}
