import {Question} from "./FormTypes";

export interface Activity {
  activity_id: string;
  action_key: string;
  points: number;
  order: number;
  name: string;
  description: string;
  tweet_id: string | null;
  activity_url: string | null;
  status: number;
  text_content: string | null;
  twitter_username: string | null;
  twitter_user_id?: string;
  activity_slug: string;
  collection_name?: string | null;
  discord_server_id?: string | null;
  secondary_image_url: string | null;
  show_secondary_image: boolean;
  image_tint_color: string | null;
  question: Question | null;
  interactions_limit_reached: boolean;
  completed: boolean;
  origin_collection_id: string | null;
  gamified: boolean;
}

export interface ActivityEditorState {
  activity_id: string;
  name: string;
  description: string;
  text_content: string | null;
  isChangesToSave: boolean;
  showSecondaryImage: boolean;
  points: number;
  secondaryImageFile: File | null;
  activity_url: string | null;
  file: File | null;
  image_tint_color: string | null;
}

export interface QuestionEditorState {
  question: Question | null;
  options: string[];
  answers: number[];
  showOther: boolean;
  multipleSelection: boolean;
  isChangesToSave: boolean;
}

//Data object for the Flo Modules section
export interface ActivityModule {
  activity_id: string;
  order: number;
  name: string;
  action_key: string;
  points: number;
}

