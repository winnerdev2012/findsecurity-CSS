import React, { createContext, useEffect, useState } from "react";
import {RewardEditor} from "../Types/RewardsTypes";
import {saveRewardChanges} from "../API/RewardsAPI";
import {errorHandle} from "../Util/ErrorHandle";
import {useParams} from "react-router-dom";

export interface RewardEditorContextProps {
  rewardSettings: RewardEditor;
  setRewardSettings: Function;
  autoSaveRunning: boolean;
}

const DEFAULT_REWARD_EDITOR_CONTEXT: RewardEditorContextProps = {
  rewardSettings: {
    reward: null,
    isChangesToSave: false,
    name: "",
    description: "",
    redemptionTitle: "",
    redemptionDescription: "",
    show_redemption_description: true,
    redemption_button_text: "",
    redemptionImageFile: null,
    downloadFile: null,
    endTitle: "",
    endDescription: "",
    showEndDescription: true,
    showEndSocialLinks: true,
    points: 0,
    requires_verification: false,
    show_description: true,
    start_date: null,
    end_date: null,
    requisites: [],
    quantity: 0,
    button_text: "",
    redirect_campaign_id: null,
    imageFile: null,
    codes: "",
    reward_type: "",
    reward_url: null,
    end_page_type: "",
    perksToDisplay: [],
    endImageFile: null,
    end_campaign_id: null,
    end_website: null,
    end_button_text: "",
  },
  setRewardSettings: () => {},
  autoSaveRunning: false
}

const AUTO_SAVE_INTERVAL = 700

export const RewardEditorContext = createContext<RewardEditorContextProps>(DEFAULT_REWARD_EDITOR_CONTEXT);

const RewardEditorContextProvider = (props:any) => {
  const {reward_id} = useParams<{ reward_id: string }>();
  const [rewardSettings, setRewardSettings] = useState<RewardEditor>(DEFAULT_REWARD_EDITOR_CONTEXT.rewardSettings)
  const [autoSaveRunning, setAutoSaveRunning] = useState<boolean>(false)

  useEffect(() => {
    let timer = setTimeout(async () => {
      try {
        if (!autoSaveRunning) {
          if (rewardSettings.isChangesToSave) {
            await saveRewardEdition()
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
  }, [rewardSettings])

  const saveRewardEdition = async () => {
    setAutoSaveRunning(true)
    try {
      const response = await saveRewardChanges(rewardSettings)


      if (reward_id === rewardSettings.reward?.reward_id){
        const isValid = response && response.reward
        if (isValid){
          setRewardSettings((prevState: RewardEditor) => {
            return {
              ...prevState,
              reward: response.reward,
              isChangesToSave: false
            }
          })
          setAutoSaveRunning(false)
          return
        }

        if (!response){
          setRewardSettings((prevState: RewardEditor) => {
            return {
              ...prevState,
              isChangesToSave: false
            }
          })
          setAutoSaveRunning(false)
          return
        }
      } else {
        console.log("Reward id is not the same")
      }

    } catch (e) {
      console.log(e)
      errorHandle(e, "Error saving reward")
    }
    setAutoSaveRunning(false)
  }

  return (
    <RewardEditorContext.Provider value={{rewardSettings, setRewardSettings, autoSaveRunning}}>
      {props.children}
    </RewardEditorContext.Provider>
  );
}

export default RewardEditorContextProvider;
