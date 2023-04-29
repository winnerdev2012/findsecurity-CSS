import {ACTIONS_KEYS} from "../Util/StatusUtil";

export const DISABLE_IMAGE_SIZE_CHECK = true;

export const displayIframerly = (action_key: string) => {
  switch (action_key) {
    case ACTIONS_KEYS.SPOTIFY:
    case ACTIONS_KEYS.SOUNDCLOUD:
    case ACTIONS_KEYS.APPLE_MUSIC:
    case ACTIONS_KEYS.VISIT_WEBSITE:
    case ACTIONS_KEYS.CALENDLY:
      return true;
    default:
      return false;

  }
}
