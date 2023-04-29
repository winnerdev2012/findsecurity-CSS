import {PConfig} from "config/PConfig";
import axios from "axios";
import {getAuthToken} from "../Integrations/LocalStorage";
import {QuestionEditorState} from "../Types/QuestTypes";
import {ACTIONS_KEYS} from "../Util/StatusUtil";
import {Question} from "../Types/FormTypes";

const TIMEOUT = 10000;

export const sendUserQuestionAnswer: any = (data: any, mode?: string) => {
  if (mode){
    data.append("mode", mode);
  }
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/questions/send-activity-answer`, data, {
        timeout: TIMEOUT,
        headers: {
          'x-api-key': `${PConfig.BACKEND_API_KEY}`,
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
};

export const updateQuestion: any = (data: FormData) => {
  const token = getAuthToken(PConfig.ORGANIZATION_ID);
  return new Promise((resolve, reject) => {
    axios
      .post(`${PConfig.BACKEND_MAIN}/questions/update-question`, data, {
        headers: {
          Authorization: `${token}`,
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

export const isQuestionChanges: any = (state: QuestionEditorState, question: Question, action_key: string, activity_id: string) => {
  let isChanged = false;

  const data = new FormData();
  data.append("activity_id", activity_id);
  if (state.showOther !== question?.show_other) {
    data.append("show_other", state?.showOther ? "true" : "false");
    isChanged = true;
  }

  if (state.multipleSelection !== question?.multiple_selection) {
    data.append("multiple_selection", state.multipleSelection ? "true" : "false");
    isChanged = true;
  }

  if (state.options !== question?.options) {
    data.append("options", JSON.stringify(state.options));
    isChanged = true;
  }

  if (state.answers !== question?.answers) {
    if (action_key === ACTIONS_KEYS.FILL_FORM_QUIZ) {
      if (!state.answers || state.answers.length === 0) {
        throw new Error("You must select at least one answer");
      }
    }
    data.append("answers", JSON.stringify(state.answers));
    isChanged = true;

  }
  return {isChanged, data}
}

interface SaveQuestionParams {
  state: QuestionEditorState,
  activity_id: string,
  action_key: string
}

export const saveQuestionChanges: any = ({
                                           state,
                                           activity_id,
                                           action_key
                                         }: SaveQuestionParams) => {
  const question = state.question;
  const {isChanged, data} = isQuestionChanges(state, question, action_key, activity_id);
  return updateQuestion(data)
}
