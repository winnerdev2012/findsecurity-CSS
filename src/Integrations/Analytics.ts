import smartlookClient from 'smartlook-client'
import {PConfig} from "../config/PConfig";
import {User} from "../Types/UserTypes";

export const initSmartlook = () => {
  try {
    if (PConfig.ENVIRONMENT === "PROD") {
      smartlookClient.init(`${PConfig.SMARTLOOK_KEY}`)
    }
  } catch (e) {
    console.log("Error in initSmartlook: ", e)
  }

}


export const identifyUser = (user: User) =>  {
  try {
    smartlookClient.identify(user.id, {
      email: user?.email || "",
    })

  } catch (e) {
    console.log("Error in identifyUser: ", e)
  }

}
