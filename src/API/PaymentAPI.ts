import axios from "axios";
import {PConfig} from "config/PConfig";
import {getAuthToken} from "../Integrations/LocalStorage";

export const getUserPaymentMethods: any = () => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId)
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/payments/get-payment-methods`,

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
};

export const getPaymentSecret = () => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId)
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/payments/get-secret`,

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

export const getCollectionPaymentSecret: any = (collectionId: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId)
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/payments/collection-client-secret?collection=${collectionId}`,

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

interface ICreatePaymentMethod {
  payment_method: string,
  collection_id: string,
}
export const addCollectionPaymentMethod: any = ({payment_method, collection_id}:ICreatePaymentMethod) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId)
  const url = `${PConfig.BACKEND_MAIN}/payments/add-collection-payment-method`
  const data = new FormData();
  data.append('payment_method', payment_method);
  data.append('collection_id', collection_id);

  const config = {
    method: 'post',
    url: url,
    headers: {
      'Authorization': `${token}`,
      'Access-Control-Allow-Origin': '*',
    },
    data: data
  };

  return new Promise((resolve, reject) => {
    // @ts-ignore
    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error)
      });
  })
}

export const createSubscription: any = (data: FormData) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId)
  const url = `${PConfig.BACKEND_MAIN}/payments/create-subscription`
  const config = {
    method: 'post',
    url: url,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${token}`
    },
    data: data
  };

  return new Promise((resolve, reject) => {
    // @ts-ignore
    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error)
      });
  })
}

export const getCollectionBillingInfo: any = (collection_id: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId)
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/payments/collection-billing-info?collection=${collection_id}`,

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

export const getInvoices: any = (collection_id: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId)
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/payments/get-invoices?collection_id=${collection_id}`,
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

export const validateCoupon: any = (code: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${PConfig.BACKEND_MAIN}/payments/validate-coupon?code=${code}`,
        {
          headers: {
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

export const updateCollectionCoupon: any = (collection_id: string, code: string) => {
  const organizationId = PConfig.ORGANIZATION_ID;
  const token = getAuthToken(organizationId)
  const url = `${PConfig.BACKEND_MAIN}/payments/update-collection-coupon`
  const data = {
    collection_id,
    code
  }
  const config = {
    method: 'post',
    url: url,
    headers: {
      'Authorization': `${token}`,
      'Access-Control-Allow-Origin': '*',
    },
    data: data
  };

  return new Promise((resolve, reject) => {
    // @ts-ignore
    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error)
      });
  })
}

