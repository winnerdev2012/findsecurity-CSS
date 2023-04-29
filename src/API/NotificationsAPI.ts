import axios from "axios";
import {PConfig} from "../config/PConfig";
import {getAuthToken} from "../Integrations/LocalStorage";

export const requestVerificationMail: any = (domain:string, email: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/notifications/email/verify-admin-email`,
        {domain_url: domain, email},
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

export const confirmUserEmail:any = (code: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PConfig.BACKEND_MAIN}/notifications/email/confirm-email`,
        {
          code,
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
