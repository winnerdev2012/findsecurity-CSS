import axios from "axios";
import {PConfig} from "../config/PConfig";
import {getAuthToken} from "../Integrations/LocalStorage";

export const requestDiscordAccess: any = (code: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId);
  const url = PConfig.BACKEND_MAIN + `/discord/get-access-token?code=${code}`;
  return new Promise((resolve, reject) => {
    axios
      .get(
        url,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
}

