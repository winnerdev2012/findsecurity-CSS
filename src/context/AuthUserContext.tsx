import React, { createContext, useEffect, useState } from "react";
import { getUserDataLocal, saveUserDataLocal } from "../Integrations/LocalStorage";
import { getUserSessionData } from "../API/AuthAPI";
import { getUserPoints } from "../API/ChallengesAPI";
import { errorHandle } from "../Util/ErrorHandle";
import { User } from "../Types/UserTypes";
import { addSessionCrisp } from "../Integrations/Crisp";
import { WorkSpace } from "Types/CollectionTypes";
import {PConfig} from "../config/PConfig";
import { identifyUser } from "Integrations/Analytics";

const emptyFunction = () => {
}

export interface AuthUserContextI {
  user: User | null;
  doSetUser: Function;
  userPoints: number | null;
  updateSession: (token: string) => void;
  updatePointsData: Function;
  isUserLoggedIn: boolean;
  firstDataLoaded: boolean;
  adminCollections: any[] | null
  isOpenBandModal: boolean;
  setIsOpenBrandModal: Function;
  showLoginModal: boolean;
  setShowLoginModal: (value: boolean) => void;
}

const defaultState = {
  user: null,
  userPoints: null,
  doSetUser: emptyFunction,
  updatePointsData: emptyFunction,
  updateSession: (token: string) => { },
  isUserLoggedIn: false,
  adminCollections: null,
  firstDataLoaded: false,
  setIsOpenBrandModal: emptyFunction,
  isOpenBandModal: false,
  showLoginModal: false,
  setShowLoginModal: (value: boolean) => { },
}

export const AuthUserContext = createContext<AuthUserContextI>(defaultState);

const AuthUserContextProvider = (props: any) => {
  const [user, setUser] = useState<User | null>({
    confirmed: false,
    hasTwitter: false,
    user_name: "", ...getUserDataLocal(),
    email_confirmed: true,
  });
  const [adminCollections, setAdminCollections] = useState<WorkSpace[] | null>(null);
  const [userPoints, setUserPoints] = useState(null);
  const [isOpenBandModal, setIsOpenBrandModal] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [firstDataLoaded, setFirstDataLoaded] = useState<boolean>(defaultState.firstDataLoaded);

  useEffect(() => {
    if (user && user.token && !adminCollections) {
      updateSession(user.token)
      identifyUser(user)
      addSessionCrisp(user, null)
    }
  }, [user, adminCollections])

  const doSetUser = (user: any) => {
    setUser(user);
  };

  const updateSession = async (user_token?: string) => {
    try {
      const { user, token, workspaces } = await getUserSessionData(user_token);
      setAdminCollections(workspaces)
      doSetUser({ ...user, token })
      setUserPoints(user.points)
      saveUserDataLocal({ ...user }, token, PConfig.ORGANIZATION_ID)
      setFirstDataLoaded(true)
    } catch (e) {
      errorHandle(e, "Error while getting session", null)
      console.log("Error, updateSession: ", e)
    }
  }

  async function updatePointsData() {
    if (!user?.token) {
      return
    }

    try {
      const response = await getUserPoints();
      setUserPoints(response.points)
    } catch (e) {
      console.log("ChallengesUserContextProvider | error: ", e)
      errorHandle(e, "Error getting user points", null);
    }
  }

  return (
    <AuthUserContext.Provider
      value={{
        user: user,
        isUserLoggedIn: !!user?.token,
        updatePointsData,
        userPoints,
        isOpenBandModal,
        showLoginModal,
        firstDataLoaded,
        doSetUser,
        updateSession,
        setIsOpenBrandModal,
        adminCollections,
        setShowLoginModal,
      }}
    >
      {props.children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContextProvider;
