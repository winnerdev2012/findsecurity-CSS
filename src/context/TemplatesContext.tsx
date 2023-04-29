import React, {createContext, useState} from "react";
import {TemplateCategory} from "../Types/TemplatesTypes";
import {getCategoryTemplates, getTemplatesAll} from "../API/TemplatesAPI";

export interface TemplatesContextI {
  templatesData: TemplateCategory[];
  categories: TemplateCategory[];
  fetchCategories: () => void;
  fetchTemplatesData: () => void;
}

const defaultState = {
  templatesData: [],
  categories: [],
  fetchCategories: () => {
  },
  fetchTemplatesData: () => {
  },
}

export const TemplatesContext = createContext<TemplatesContextI>(defaultState);

const TemplatesContextProvider = ({children}: any) => {
  const [categories, setCategories] = useState<TemplateCategory[]>([]);
  const [templatesData, setTemplatesData] = useState<TemplateCategory[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [loadingTemplates, setLoadingTemplates] = useState(false);

  const fetchCategories = async () => {
    if (loadingCategories) {
      return;
    }
    setLoadingCategories(true);
    try {
      const {categories: data} = await getCategoryTemplates();
      setCategories(data)
    } catch (e) {
      console.log("fetchCategories | error: ", e);
    }
    setLoadingCategories(false);
  }

  const fetchTemplatesData = async () => {
    if (loadingTemplates) {
      return;
    }
    setLoadingTemplates(true);
    try {
      const {categories: data} = await getTemplatesAll();
      setTemplatesData(data)
    } catch (e) {
      console.log("fetchTemplatesData | error: ", e);
    }
    setLoadingTemplates(false);
  }


  return (
    <TemplatesContext.Provider value={{
      categories,
      templatesData,
      fetchCategories,
      fetchTemplatesData,
    }}
    >
      {children}
    </TemplatesContext.Provider>
  );
};

export default TemplatesContextProvider;
