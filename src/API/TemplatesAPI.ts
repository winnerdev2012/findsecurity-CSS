import {PConfig} from "../config/PConfig";
import axios from "axios";
import {getAuthToken} from "../Integrations/LocalStorage";

const TIMEOUT = 10000;

export const getCategoryTemplates:any = async () => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const url = `${PConfig.BACKEND_MAIN}/templates/categories?organization_id=${organizationId}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        timeout: TIMEOUT,
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
        },
      })
      .then((res) => {
        const data = res.data;

        resolve(data);
      })
      .catch((err) => reject(err));
  });
}

export const getTemplatesAll:any = async () => {
  const url = `${PConfig.BACKEND_MAIN}/templates/templates-categories`;
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        timeout: TIMEOUT,
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
        },
      })
      .then((res) => {
        const data = res.data;

        resolve(data);
      })
      .catch((err) => reject(err));
  });
}

export const deleteSubCategory:any = async (id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID)
  const url = `${PConfig.BACKEND_MAIN}/templates/delete-subcategory`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, {
        id,
      },{
        timeout: TIMEOUT,
        headers: {
          "Authorization": `${token}`,
        },
      })
      .then((res) => {
        const data = res.data;

        resolve(data);
      })
      .catch((err) => reject(err));
  });
}

export const deleteCategory:any = async (id: string) => {
  const url = `${PConfig.BACKEND_MAIN}/templates/delete-category`;
  const token = getAuthToken(PConfig.ORGANIZATION_ID)
  return new Promise((resolve, reject) => {
    axios
      .post(url, {
        id,
      },{
        timeout: TIMEOUT,
        headers: {
          "Authorization": `${token}`,
        },
      })
      .then((res) => {
        const data = res.data;

        resolve(data);
      })
      .catch((err) => reject(err));
  });
}

export const createCategory: any = (name: string, description: string) => {
  const data = new FormData();
  data.append("name", name);
  data.append("description", description);
  data.append("organization_id", PConfig.ORGANIZATION_ID);

  const url = `${PConfig.BACKEND_MAIN}/templates/create-category`;

  const token = getAuthToken(PConfig.ORGANIZATION_ID)

  return new Promise((resolve, reject) => {
    axios
      .post(url, data,{
        timeout: TIMEOUT,
        headers: {
          "Authorization": `${token}`,
        },
      })
      .then((res) => {
        const data = res.data;

        resolve(data);
      })
      .catch((err) => reject(err));
  });
}

export const createSubcategory: any = (name: string, description: string, category_id: string) => {
  const data = new FormData();
  data.append("name", name);
  data.append("description", description);
  data.append("category_id", category_id);

  const url = `${PConfig.BACKEND_MAIN}/templates/create-subcategory`;

  const token = getAuthToken(PConfig.ORGANIZATION_ID)

  return new Promise((resolve, reject) => {
    axios
      .post(url, data,{
        timeout: TIMEOUT,
        headers: {
          "Authorization": `${token}`,
        },
      })
      .then((res) => {
        const data = res.data;

        resolve(data);
      })
      .catch((err) => reject(err));
  });
}

export const createTemplate: any = (data: FormData) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID)
  const url = `${PConfig.BACKEND_MAIN}/templates/create-template`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, data,{
        timeout: TIMEOUT,
        headers: {
          "Authorization": `${token}`,
        },
      })
      .then((res) => {
        const data = res.data;

        resolve(data);
      })
      .catch((err) => reject(err));
  });
}

export const updateTemplate: any = (data: FormData) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID)
  const url = `${PConfig.BACKEND_MAIN}/templates/update-template`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, data,{
        timeout: TIMEOUT,
        headers: {
          "Authorization": `${token}`,
        },
      })
      .then((res) => {
        const data = res.data;

        resolve(data);
      })
      .catch((err) => reject(err));
  });
}

export const deleteTemplate: any = (id: string) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID)
  const url = `${PConfig.BACKEND_MAIN}/templates/delete-template`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, {
        id,
      },{
        timeout: TIMEOUT,
        headers: {
          "Authorization": `${token}`,
        },
      })
      .then((res) => {
        const data = res.data;

        resolve(data);
      })
      .catch((err) => reject(err));
  });
}

export const createFromTemplate: any = (collection_id:string, template_id:string) => {
  const url = `${PConfig.BACKEND_MAIN}/templates/create-from-template`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, {
        collection_id,
        template_id,
      },{
        timeout: TIMEOUT,
        headers: {
          "x-api-key": `${PConfig.BACKEND_API_KEY}`,
        },
      })
      .then((res) => {
        const data = res.data;

        resolve(data);
      })
      .catch((err) => reject(err));
  })
}
