import React, {createContext, useState} from "react";
import { Collection } from "Types/CollectionTypes";
import {getPartnerProjects} from "../API/CollectionsAPI";

export interface CollectionContextI {
  collections: Collection[] | null;
  loading: boolean;
  updateData: Function;
}

const defaultState = {
  collections: [],
  loading: true,
  updateData: () => {
  },
}

export const CollectionsContext = createContext<CollectionContextI>(defaultState)

const CollectionsContextProvider = (props: any) => {
  const [loading, setLoading] = useState(false)
  const [collections, setCollections] = useState<Collection[] | null>(null)

  async function updateData() {
    if (loading) {
      return
    }
    setLoading(true)
    try {
      const response: any = await getPartnerProjects();
      if (response.status) {
        setCollections(response.data.projects)
      }
    } catch (e) {
      console.log("updateCollections Data | error: ", e)
    }
    setLoading(false)
  }

  return (
    <CollectionsContext.Provider
      value={{
        collections,
        loading,
        updateData
      }}
    >
      {props.children}
    </CollectionsContext.Provider>
  )
}

export default CollectionsContextProvider;
