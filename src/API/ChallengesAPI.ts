import axios from "axios";
import {PConfig} from "../config/PConfig";
import {getAuthToken} from "../Integrations/LocalStorage";

export const getUserPoints: any = () => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/quest/user-points`,
        {
          headers: {
            Authorization: `${token}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};
