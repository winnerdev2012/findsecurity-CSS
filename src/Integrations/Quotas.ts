import {
  PAYMENT_PLANS,
} from "../Util/StatusUtil";

export const getTeamLimit = (plan?: string | null) => {
  switch (plan) {
    case PAYMENT_PLANS.FREE:
      return 1;
    default:
      return 7;
  }
}

/**
 * Returns the number of interactions allowed for the plan, 0 mean infinite
 * @param plan
 */
export const interactionsLimit = (plan?: string) => {
  switch (plan) {
    case PAYMENT_PLANS.FREE:
      return 100;
    default:
      return 0;
  }
}

/**
 * Returns the number of campaigns allowed for the plan, 0 mean infinite
 * @param plan
 */
export const campaignsLimit = (plan?: string) => {
  switch (plan) {
    case PAYMENT_PLANS.FREE:
      return 3;
    default:
      return 0;
  }
}

/**
 * Returns the number of perks allowed for the plan, 0 mean infinite
 * @param plan
 */
export const perksLimit = (plan?: string) => {
  switch (plan) {
    case PAYMENT_PLANS.FREE:
      return 3;
    default:
      return 0;
  }
}

/**
 * Returns the number of actions allowed for the plan, 0 mean infinite
 * @param plan
 */
export const actionsPerCampaignLimit = (plan?: string) => {
  switch (plan) {
    case PAYMENT_PLANS.FREE:
      return 5;
    default:
      return 0;
  }
}

export const themesLimit = (plan?: string) => {
  switch (plan) {
    case PAYMENT_PLANS.FREE:
      return 3;
    default:
      return 0;
  }
}

export const hidePoweredBy = (plan?: string) => {
  return plan !== PAYMENT_PLANS.FREE;
}

export const customDomain = (plan?: string) => {
  return plan !== PAYMENT_PLANS.FREE;
}

export const fileUploadLimit = (plan?: string) => {
  switch (plan) {
    case PAYMENT_PLANS.FREE:
      return {enabled: false, size: 0};
    default:
      return {enabled: true, size: 10000000};
  }
}

export const acceptPayments = (plan?: string) => {
  return plan !== PAYMENT_PLANS.FREE;
}

export const customEndScreen = (plan?: string) => {
  return plan !== PAYMENT_PLANS.FREE;
}

export const redirectToCustomUrl = (plan?: string) => {
  return plan !== PAYMENT_PLANS.FREE;
}

export const supportChannels = (plan?: string) => {
  switch (plan) {
    case PAYMENT_PLANS.FREE:
      return ["email"];
    default:
      return ["email", "chat", "phone"];

  }
}

export const customMetaData = (plan?: string) => {
  return plan !== PAYMENT_PLANS.FREE;
}


export const QUOTA_REACHED_BUTTON_TEXT = "CLOSED";
