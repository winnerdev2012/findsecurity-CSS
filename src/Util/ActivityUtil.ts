import { ACTIONS_KEYS } from "./StatusUtil";
import {User} from "../Types/UserTypes";
import {ActivityMenu} from "../Types/ActivityTypes";

export const getActivityButtonText = (action_key?: string, user?: User | null) => {
  switch (action_key) {
    case ACTIONS_KEYS.JOIN_TELEGRAM:
      return "Join the Conversation"
    case ACTIONS_KEYS.FOLLOW_TWITTER:
      return "Retweet"
    case ACTIONS_KEYS.DISCORD_JOIN_COLLECTION_SERVER:
      return "Join Discord"
    case ACTIONS_KEYS.LIKE_INSTAGRAM:
      return "Like Post"
    case ACTIONS_KEYS.CONNECT_LINKEDIN:
      return "Like Post"
    case ACTIONS_KEYS.TWITTER_LIKE_POST:
      return !user?.hasTwitter ? "Connect Twitter" : "Like Post"
    case ACTIONS_KEYS.TWITTER_RETWEET:
      return !user?.hasTwitter ? "Connect Twitter" : "Retweet"
    case ACTIONS_KEYS.TWITTER_COMMENT_POST:
      return "Comment"
    case ACTIONS_KEYS.TWITTER_UPDATE_STATUS:
      return "Post"
    case ACTIONS_KEYS.SHARE_EMAIL_WITH_COLLECTION:
      return "Share"
    case ACTIONS_KEYS.DOWNLOAD_FILE:
      return "Download"
    case ACTIONS_KEYS.REFERRAL:
      return "Invite"
    case ACTIONS_KEYS.TWITTER_JOIN_SPACE:
      return "Join"
    case ACTIONS_KEYS.SPOTIFY:
      return "Continue";
    case ACTIONS_KEYS.SOUNDCLOUD:
      return "Continue";
    case ACTIONS_KEYS.APPLE_MUSIC:
      return "Continue";
    case ACTIONS_KEYS.VISIT_WEBSITE:
      return "Visit Website";
    case ACTIONS_KEYS.CALENDLY:
      return "Continue";
    default:
      return "View";
  }
}

export const AVAILABLE_ACTIVITIES: ActivityMenu[] = [
  {
    groupTitle: "Twitter",
    actions: [
      {
        icon: "twitter_follow",
        key: ACTIONS_KEYS.FOLLOW_TWITTER,
        name: "Follow",
      },
      {
        key: ACTIONS_KEYS.TWITTER_LIKE_POST,
        name: "Like",
        icon: "twitter_like",
      },
      {
        key: ACTIONS_KEYS.TWITTER_COMMENT_POST,
        name: "Comment",
        icon: "twitter_comment",
      },
      {
        key: ACTIONS_KEYS.TWITTER_RETWEET,
        name: "Retweet",
        icon: "twitter_retweet",
      },
      {
        key: ACTIONS_KEYS.TWITTER_UPDATE_STATUS,
        name: "Post",
        icon: "twitter_post",
      },
      {
        key: ACTIONS_KEYS.TWITTER_JOIN_SPACE,
        name: "Join Space",
        icon: "twitter_join",
      },
    ],
  },
  {
    groupTitle: "Discord",
    actions: [
      {
        key: ACTIONS_KEYS.DISCORD_JOIN_COLLECTION_SERVER,
        name: "Join Discord",
        icon: "discord",
      },
    ],
  },
  {
    groupTitle: "Telegram",
    actions: [
      {
        key: ACTIONS_KEYS.JOIN_TELEGRAM,
        name: "Join Conversation",
        icon: "telegram",
      },
    ],
  },
  {
    groupTitle: "Linkedin",
    actions: [
      {
        key: ACTIONS_KEYS.CONNECT_LINKEDIN,
        name: "Add/Connect",
        icon: "linkedin",
      },
    ],
  },
  {
    groupTitle: "Instagram",
    actions: [
      {
        key: ACTIONS_KEYS.LIKE_INSTAGRAM,
        name: "Follow",
        icon: "instagram",
      },
    ],
  },
  {
    groupTitle: "Email",
    actions: [
      {
        key: ACTIONS_KEYS.SHARE_EMAIL_WITH_COLLECTION,
        name: "Email Capture",
        icon: "email",
      },
    ],
  },
  {
    groupTitle: "Media Upload",
    actions: [
      {
        key: ACTIONS_KEYS.UPLOAD_FILE,
        name: "Upload",
        icon: "upload",
      },
    ],
  },
  {
    groupTitle: "Web",
    actions: [
      {
        key: ACTIONS_KEYS.VISIT_WEBSITE,
        name: "Website",
        icon: "link_icon",
      },
    ],
  },
  {
    groupTitle: "Media Consumption",
    actions: [
      {
        key: ACTIONS_KEYS.PLAY_AUDIO,
        name: "Audio Listen",
        icon: "audio",
      },
      {
        key: ACTIONS_KEYS.PLAY_VIDEO,
        name: "Video Watch",
        icon: "video",
      },
      {
        key: ACTIONS_KEYS.DISPLAY_IMAGE,
        name: "Image Reveal",
        icon: "image",
      },
    ],
  },
  {
    groupTitle: "Written Content",
    actions: [
      {
        key: ACTIONS_KEYS.TEXT_LONG,
        name: "Long Post Read",
        icon: "long_post",
      },
    ],
  },
  {
    groupTitle: "Forms",
    actions: [
      {
        key: ACTIONS_KEYS.FILL_FORM_QUIZ,
        name: "Quiz",
        icon: "checkbox",
      },
      {
        key: ACTIONS_KEYS.FILL_FORM_POLL,
        name: "Poll",
        icon: "poll",
      },
      {
        key: ACTIONS_KEYS.FILL_FORM_SHORT_ANSWER,
        name: "Short Answer",
        icon: "short_answer",
      },
      {
        key: ACTIONS_KEYS.FILL_FORM_LONG_ANSWER,
        name: "Long Answer",
        icon: "long_answer",
      },
    ],
  },
  {
    groupTitle: "File Download",
    actions: [
      {
        key: ACTIONS_KEYS.DOWNLOAD_FILE,
        name: "Download",
        icon: "download",
      },
    ],
  },
  {
    groupTitle: "New",
    actions: [
      {
        key: ACTIONS_KEYS.SPOTIFY,
        name: "Spotify",
        icon: "spotify",
      },
      {
        key: ACTIONS_KEYS.SOUNDCLOUD,
        name: "Soundcloud",
        icon: "soundcloud",
      },
      {
        key: ACTIONS_KEYS.CALENDLY,
        name: "Calendly",
        icon: "long_post",
      },
      {
        key: ACTIONS_KEYS.APPLE_MUSIC,
        name: "Apple Music",
        icon: "audio",
      }
    ],
  }
];
