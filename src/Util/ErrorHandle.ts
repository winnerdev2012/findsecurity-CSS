import {Notify} from "./Notify";

export const errorHandle = (e: any, genericName: string, logout: any = null) => {
  if (logout) {
    const errorResponse = JSON.parse(JSON.stringify(e));
    const status = errorResponse.status;
    if (status === 401) {
      return logout()
    }
  }
  let errorMessage = null;

  if (e?.response?.data?.error) {
    console.log(e.response.data.error)
    errorMessage = e.response.data.error;
    console.log("1: ", errorMessage)
    Notify.error(`${errorMessage}`)
    return
  }

  if (e?.response?.data?.message) {
    errorMessage = e.response.data.message;
  }
  if (!errorMessage) {
    errorMessage = e.message;
  }
  if (!errorMessage) {
    errorMessage = `Error In ${genericName}: ${JSON.stringify(e)}`;
  }
  // Communicates with ToastWrapper to display the message
  Notify.error(errorMessage)
};

export const errorHandleAdmin = (e: any, genericName: string, logout: any = null) => {
  if (logout) {
    const errorResponse = JSON.parse(JSON.stringify(e));
    const status = errorResponse.status;
    if (status === 401) {
      return logout()
    }
  }
  let errorMessage;
  errorMessage = e?.response?.data?.error?.message;

  if (e?.response?.data?.message) {
    errorMessage = e.response.data.message;
  }
  if (!errorMessage) {
    errorMessage = e.message;
  }

  if (!errorMessage) {
    errorMessage = `${genericName}: ${JSON.stringify(e)}`;
  }
  // Communicates with ToastWrapper to display the message
  Notify.error(errorMessage)
};

/**
 * Parse custom error codes from backend
 * @param error
 */
export const getErrorContent = (error: any) => {
  return error?.response?.data
}
