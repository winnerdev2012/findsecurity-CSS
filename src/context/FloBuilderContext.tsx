import { createContext, useContext, useEffect, useState } from "react";
import { FloThemeProps } from "Types/FloBuilderTypes";
import { getCollectionThemes } from "../API/ThemesAPI";
import { Campaign } from "../Types/CampaignsTypes";
import { getCampaignAdminData, saveCampaignChanges } from "../API/CampaignsAPI";
import { errorHandle } from "../Util/ErrorHandle";
import { Activity, ActivityEditorState, ActivityModule, QuestionEditorState } from "Types/QuestTypes";
import {
  adminCampaignActivities,
  getActivityAdminData,
  saveActivityChanges
} from "../API/ActivitiesAPI";
import { ACTIONS_KEYS } from "Util/StatusUtil";
import { getRewardsModules, saveCollectionChanges } from "../API/CollectionsAPI";
import { RewardModule, RewardPresentation } from "../Types/RewardsTypes";
import { AdminCollectionContext } from "./AdminCollectionContext";
import {isQuestionChanges, saveQuestionChanges} from "../API/QuestionsAPI";
import { DEFAULT_BUILDER } from "Util/Context/DefaultBuilderContext";

export interface CollectionHeaderState {
  title: string;
  description: string;
  header_button_text: string;
  isChanged: boolean;
  showPageStatistics: boolean;
  showSocialLinks: boolean;
  showDescription: boolean;
  showButton: boolean;
  main_campaign_id: string | null;
}

export interface EditorHeaderState {
  campaign: Campaign | null;
  campaign_name: string;
  campaign_description: string;
  isChanged: boolean;
  endTitle: string;
  endDescription: string;
  showEndSocialLinks: boolean;
  showEndDescription: boolean;
  showDescription: boolean;
  terms_and_conditions: string;
  end_button_text: string;
  end_campaign_id: string | null;
  end_website: string | null;
  endImageFile: File | null;
  end_page_type: string;
  perksToDisplay: RewardPresentation[];
  imageFile: File | null;
}

export interface ConditionBuilderState {
  type: string;
  collection_id: string | null;
  id?: string | undefined
}

export interface FloBuilderContextI {
  floThemes: FloThemeProps[] | null;
  activeTheme: FloThemeProps | null;
  openFloSpace: boolean;
  activityLoading: boolean;
  openDesignPanel: boolean;
  openFloAddModal: boolean;
  openPerkAddModal: boolean;
  conditionToEdit: ConditionBuilderState | null;
  activityEditingState: ActivityEditorState | null;
  modules: ActivityModule[] | null;
  perks: RewardModule[];
  setOpenFloSpace: Function;
  setFloThemes: Function;
  setOpenDesignPanel: Function;
  setActiveTheme: Function;
  updateFloThemeData: Function;
  headerState: CollectionHeaderState;
  autoSaveRunning: boolean;
  editorState: EditorHeaderState;
  setHeaderState: Function;
  setEditorState: Function;
  setConditionToEdit: Function;
  updateCampaignToEdit: Function;
  fetchActivityToEdit: Function;
  setActivityEditingState: Function;
  updateActivityModules: (campaign_id?: string) => void;
  questionEditingState: QuestionEditorState | null;
  setQuestionEditingState: Function;
  updateRewardData: Function;
  campaignLoading: boolean;
  onboardingState: onboardingStateI;
  onboardingLoadingMessg: string;
  combineOnboardingLoading: boolean;
  setOnboardingLoadingMessg: Function;
  setOnboardingState: Function;
  setOnboardingLoading: Function;
  setOpenFloAddModal: Function;
  setOpenPerkAddModal: Function;
  activity: Activity | null;
  setActivity: (activity: Activity | null) => void;
}

export interface onboardingStateI {
  [key: string]: any;
  spaceLoading: boolean;
  headerLoading: boolean;
  socialLoading: boolean;
  descriptionLoading: boolean;
  campaignLoading: boolean;
  perkLoading: boolean;
  success: boolean;
}


const AUTO_SAVE_INTERVAL = 900

export const FloBuilderContext = createContext<FloBuilderContextI>(DEFAULT_BUILDER)

const FloBuilderContextProvider = (props: any) => {
  const { collection, updateCollectionData } = useContext(AdminCollectionContext)

  const [activityEditingState, setActivityEditingState] = useState<ActivityEditorState>(DEFAULT_BUILDER.activityEditingState)
  const [activity, setActivity] = useState<Activity | null>(DEFAULT_BUILDER.activity)
  const [questionEditingState, setQuestionEditingState] = useState<QuestionEditorState>(DEFAULT_BUILDER.questionEditingState)
  const [editorState, setEditorState] = useState<EditorHeaderState>(DEFAULT_BUILDER.editorState)

  const [openFloSpace, setOpenFloSpace] = useState<boolean>(false);
  const [openDesignPanel, setOpenDesignPanel] = useState<boolean>(false);
  const [openFloAddModal, setOpenFloAddModal] = useState<boolean>(false);
  const [openPerkAddModal, setOpenPerkAddModal] = useState<boolean>(false);
  const [activeTheme, setActiveTheme] = useState<FloThemeProps | null>(null);
  const [floThemes, setFloThemes] = useState<FloThemeProps[] | null>(null);
  const [headerState, setHeaderState] = useState<CollectionHeaderState>(DEFAULT_BUILDER.headerState)
  const [conditionToEdit, setConditionToEdit] = useState<ConditionBuilderState | null>(null)

  const [campaignLoading, setCampaignLoading] = useState<boolean>(false)
  const [activityLoading, setActivityLoading] = useState<boolean>(false)
  const [modules, setModules] = useState<ActivityModule[] | null>(null)
  const [perks, setPerks] = useState<RewardModule[]>([]);
  const [autoSaveRunning, setAutoSaveRunning] = useState<boolean>(false)

  const [onboardingState, setOnboardingState] = useState<onboardingStateI>(DEFAULT_BUILDER.onboardingState)
  const [onboardingLoadingMessg, setOnboardingLoadingMessg] = useState<string>("");
  const [combineOnboardingLoading, setOnboardingLoading] = useState<boolean>(false);

  useEffect(() => {
    if (editorState.campaign) {
      updateActivityModules(editorState.campaign.id)
    }
  }, [editorState.campaign?.id])

  useEffect(() => {

    let timer = setTimeout(async () => {
      if (!autoSaveRunning) {
        const isChanges = headerState.isChanged
        if (isChanges) {
          await saveCollectionEdition()
        }

      } else {
        console.log("autoSaveRunning")
      }
    }, AUTO_SAVE_INTERVAL)

    return () => {
      clearTimeout(timer)
    }
  }, [headerState])

  useEffect(() => {

    let timer = setTimeout(async () => {
      if (campaignLoading) {
        return
      }

      try {
        if (!autoSaveRunning) {
          const isChanges = editorState.isChanged
          if (isChanges) {
            await saveCampaignEdition()
          }

        } else {
          console.log("autoSaveRunning")
        }
      } catch (e) {
        console.log(e)
      }

    }, AUTO_SAVE_INTERVAL)

    return () => {
      clearTimeout(timer)
    }
  }, [editorState, campaignLoading])

  useEffect(() => {
    let timer = setTimeout(async () => {
      try {
        if (!autoSaveRunning) {
          if (activityEditingState.isChangesToSave) {
            await saveActivityEdition()
          }

        } else {
          console.log("autoSaveRunning: activityEditingState")
        }
      } catch (e) {
        console.log(e)
      }

    }, AUTO_SAVE_INTERVAL)

    return () => {
      clearTimeout(timer)
    }
  }, [activityEditingState, activity])

  useEffect(() => {
    let timer = setTimeout(async () => {
      try {
        if (!autoSaveRunning) {
          if (questionEditingState.isChangesToSave) {
            await saveQuestionEdition()
          }

        } else {
          console.log("autoSaveRunning")
        }
      } catch (e) {
        console.log(e)
      }

    }, AUTO_SAVE_INTERVAL)

    return () => {
      clearTimeout(timer)
    }
  }, [questionEditingState])


  const saveQuestionEdition = async () => {
    if (!activity) {
      return
    }

    try {
      const { activity_id, action_key } = activity
      const {isChanged} = isQuestionChanges(questionEditingState, questionEditingState.question, action_key, activity_id)
      if (!isChanged) {
        return
      }
      setAutoSaveRunning(true)
      const { question } = await saveQuestionChanges({state: questionEditingState, activity_id, action_key})
      setQuestionEditingState((prevState: QuestionEditorState) => {
        return {
          ...prevState, question, isChangesToSave: false
        }
      })
    } catch (e) {
      console.log(e)
      errorHandle(e, "Error saving question")
    }
    setAutoSaveRunning(false)
  }

  const updateModules = (_activity: Activity) => {
    const index = modules?.findIndex((item: ActivityModule) => item.activity_id === _activity.activity_id)
    if (!index || index < 0 || !modules) {
      return
    }
    let newModules = modules
    newModules[index] = { ...modules[index], points: _activity.points }
    setModules(newModules)
  }

  const saveActivityEdition = async () => {
    if (!activity || autoSaveRunning) {
      return
    }
    setAutoSaveRunning(true)
    try {
      const {activity:data} = await saveActivityChanges(activity, activityEditingState)
      setActivityEditingState((prevState) => {
        return {
          ...prevState,
          isChangesToSave: false,
          file: null,
          secondaryImageFile: null,
        }
      })
      setActivity(data)
      updateModules(data)
    } catch (e) {
      console.log(e)
      errorHandle(e, "Error saving activity")
    }
    setAutoSaveRunning(false)
  }

  const updateActivityModules = async (campaign_id?: string) => {
    try {
      const id = campaign_id || editorState.campaign?.id
      const { activities } = await adminCampaignActivities(id)
      setModules(activities)
    } catch (e) {
      errorHandle(e, "Error updating modules")
    }
  }

  const updateFloThemeData = async (collection_id: string, forceUpload: false) => {
    try {
      const { themes } = await getCollectionThemes(collection_id);
      setFloThemes(themes);
      if (!activeTheme || forceUpload) {
        const defaultTheme = themes.find((theme: FloThemeProps) => theme.default);
        if (defaultTheme) {
          setActiveTheme(defaultTheme);
        } else {
          setActiveTheme(themes[0]);
        }
      }
    } catch (e) {
      console.log("FloBuilderContextProvider | error: ", e)
    }
  }

  const updateCampaignToEdit = async (campaign_id: string) => {
    if (campaignLoading) {
      return
    }

    setCampaignLoading(true)
    try {
      const { campaign } = await getCampaignAdminData(campaign_id)
      setEditorState(prevState => {
        return {
          ...prevState,
          campaign,
          isChanged: false,
          campaign_name: campaign.name,
          campaign_description: campaign.description,
          endTitle: campaign.end_title,
          endDescription: campaign.end_description,
          showEndDescription: campaign.show_end_description,
          showEndSocialLinks: campaign.show_end_social,
          showDescription: campaign.show_description,
          terms_and_conditions: campaign.terms_and_conditions || "",
          end_button_text: campaign.end_button_text || "",
          end_campaign_id: campaign.end_campaign_id,
          end_website: campaign.end_website,
          endImageFile: null,
          end_page_type: campaign.end_page_type,
          perksToDisplay: campaign.endPageRewards || [],
          header_button_text: campaign.header_button_text || "",
        }
      })
    } catch (e) {
      errorHandle(e, "FloBuilderContextProvider | updateCampaignToEdit")
    }
    setCampaignLoading(false)
  }

  const saveCollectionEdition = async () => {
    setAutoSaveRunning(true)
    try {
      await saveCollectionChanges(collection, headerState)
      await updateCollectionData()
      setHeaderState(prevState => {
        return { ...prevState, isChanged: false }
      })
    } catch (e) {
      errorHandle(e, "FloBuilderContextProvider | saveCollectionEdition")
    }

    setAutoSaveRunning(false)
  }

  const saveCampaignEdition = async () => {
    setAutoSaveRunning(true)
    try {
      await saveCampaignChanges(editorState)
      const { campaign } = await getCampaignAdminData(editorState.campaign?.id || "")
      setEditorState(prevState => {
        return { ...prevState, campaign, isChanged: false }
      })
    } catch (e) {
      console.log(e)
      errorHandle(e, "FloBuilderContextProvider | saveCampaignEdition")
    }

    setAutoSaveRunning(false)
  }

  const fetchActivityToEdit = async (activity_id: string) => {
    setActivityLoading(true)
    try {
      const { activity: item } = await getActivityAdminData(activity_id)
      const _activity = item as Activity
      const isTextContentInline = [ACTIONS_KEYS.TEXT_SHORT, ACTIONS_KEYS.TEXT_LONG].includes(_activity.action_key)
      const textContent = isTextContentInline ? _activity?.text_content : null
      const question = _activity?.question || null
      setActivityEditingState((prevState: ActivityEditorState) => {
        return {
          activity_id: _activity.activity_id,
          name: _activity.name,
          description: _activity.description,
          isChangesToSave: false,
          showSecondaryImage: _activity.show_secondary_image,
          text_content: textContent,
          points: _activity.points || 0,
          secondaryImageFile: null,
          activity_url: _activity.activity_url,
          file: null,
          image_tint_color: _activity.image_tint_color,
        }
      })

      setActivity(_activity)

      if (question) {
        let answers = question.answers

        if (_activity.action_key === ACTIONS_KEYS.FILL_FORM_QUIZ) {
          if (question.answers?.length === 0) {
            answers = [0]
          } else {
            answers = question.answers
          }
        }

        setQuestionEditingState((prevState: QuestionEditorState) => {
          return {
            options: question.options,
            answers: answers,
            showOther: question.show_other,
            question: question,
            isChangesToSave: false,
            multipleSelection: question.multiple_selection,
          }
        })

      } else {
        setQuestionEditingState((prevState: QuestionEditorState) => {
          return {
            ...DEFAULT_BUILDER.questionEditingState,
          }
        })
      }
    } catch (e) {
      errorHandle(e, "FloBuilderContextProvider | fetchActivityToEdit")
    }

    setActivityLoading(false)
  }

  const updateRewardData = async (collection_id: string) => {
    try {
      const { rewards } = await getRewardsModules(collection_id);
      setPerks(rewards);
    } catch (e) {
      console.log("updateRewardData | error: ", e)
    }
  }

  return (
    <FloBuilderContext.Provider
      value={{
        floThemes,
        activeTheme,
        openFloSpace,
        openDesignPanel,
        openFloAddModal,
        openPerkAddModal,
        headerState,
        conditionToEdit,
        editorState,
        modules,
        activityEditingState,
        questionEditingState,
        perks,
        activityLoading,
        campaignLoading,
        autoSaveRunning,
        onboardingState,
        onboardingLoadingMessg,
        combineOnboardingLoading,
        activity,
        setFloThemes,
        setOpenFloSpace,
        setOpenDesignPanel,
        updateFloThemeData,
        setActiveTheme,
        setHeaderState,
        setConditionToEdit,
        updateCampaignToEdit,
        setEditorState,
        fetchActivityToEdit,
        setActivityEditingState,
        updateActivityModules,
        setQuestionEditingState,
        updateRewardData,
        setOnboardingState,
        setOnboardingLoadingMessg,
        setOnboardingLoading,
        setActivity,
        setOpenFloAddModal,
        setOpenPerkAddModal,
      }}
    >
      {props.children}
    </FloBuilderContext.Provider>
  )
}

export default FloBuilderContextProvider;
