import axios from "axios";
import {PConfig} from "../config/PConfig";
import {Theme} from "../Types/CollectionTypes";
import {getAuthToken} from "../Integrations/LocalStorage";

export const getCollectionThemes: any = (collection_id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/themes/get-themes?collection_id=${collection_id}`,
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
        console.log("err: ", error);
        reject({status: false, data: error});
      });
  });
}

export const updateTheme: any = (theme: Theme, logo: any | null, background: any | null) => {

  const formData = new FormData();
  formData.append("id", theme.id);
  formData.append("theme_name", theme.theme_name);
  formData.append("default", theme.default.toString());
  formData.append("card_text", theme.card_text);
  formData.append("card_tint", theme.card_tint);
  formData.append("card_background", theme.card_background);
  formData.append("page_background", theme.page_background);
  formData.append("button_text", theme.button_text);
  formData.append("button", theme.button);
  formData.append("answer", theme.answer);
  formData.append("text", theme.text)
  formData.append("incorrect_answer", theme.incorrect_answer);

  formData.append("collection_id", theme.collection_id);
  if (logo) {
    formData.append("logo", logo.file);
  }

  if (background) {
    formData.append("background", background.file);
  }

  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/themes/update-theme`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log("err: ", error);
        reject({status: false, data: error});
      });
  });
}

export const setThemeAsDefault: any = (theme_id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/themes/update-theme`, {id: theme_id, isDefault: true}, {
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log("err: ", error);
        reject({status: false, data: error});
      });
  });
}

export const deleteTheme: any = (theme_id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/themes/delete-theme`, {id: theme_id}, {
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log("err: ", error);
        reject({status: false, data: error});
      });
  });
}

export const createTheme: any = (theme: Theme) => {

  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/themes/create-theme`, theme, {
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log("err: ", error);
        reject({status: false, data: error});
      });
  });
}

export const deleteThemeLogo: any = (theme_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  const data = {
    theme_id,
  }
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/themes/delete-logo`, data, {
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

export const deleteThemeBackgroundImage: any = (theme_id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  const data = {
    theme_id,
  }
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/themes/delete-background`, data, {
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

export const updateThemeLogo: any = (theme_id: string, logo: any) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  const formData = new FormData();
  formData.append("theme_id", theme_id);
  formData.append("logo", logo);
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/themes/upload-theme-images`, formData, {
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

export const getDefaultTheme: any = (collection_id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/themes/default-theme?collection_id=${collection_id}`,
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
        console.log("err: ", error);
        reject({status: false, data: error});
      });
  });
}

