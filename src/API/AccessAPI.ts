import {getAuthToken} from "../Integrations/LocalStorage";
import {PConfig} from "../config/PConfig";
import axios from "axios";

const TIMEOUT = 5000;

export const addCollectionAdmin: any = (collection_id: string, email: string, role: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  const data = {collection_id, email, role}
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/access/add-collection-admin`,
        data,
        {
          timeout: (3 * TIMEOUT),
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
}

export const updateAdminRole: any = (collection_id:string, user_id: string, role: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  const data = {collection_id, user_id, role}
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/access/update-admin-role`,
        data,
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
}

export const getCollectionAdmins: any = (collection_id: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/access/get-collection-admins?collection_id=${collection_id}`,
        {
          headers: {
            timeout: TIMEOUT,
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
}

export const removeCollectionAdmin: any = (user_id: string, collection_id: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  const data = {user_id, collection_id}
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/access/remove-collection-admin`,
        data,
        {
          headers: {
            timeout: TIMEOUT,
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
}
