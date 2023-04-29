import {PConfig} from "../config/PConfig";

const KEYS = {
	TOKEN: `sc-token-`,
	USER_ADDRESS: `sc-user-address-`,
	USER_CODE: `sc-user-code-`,
	USER_ID: `sc-user-id-`,
	USER_STATUS: `sc-status-`,
	USER_WALLET: `sc-wallet-`,
	USER_EMAIL: `sc-email-`,
	USER_CONFIRMED: `sc-confirmed-`,
	DISCORD_CODE: `discord-code-`,
	HAS_TWITTER: `has-twitter-`,
	THRESHOLD_ID: `th-id-`,
	SHOW_NEXT_REWARD: `show-next-reward-`,
	BLOCK_NUMBER: `block-number-`,
	DISPLAYED_LISTING_TUTORIAL: `displayed-listing-tutorial-`,
	DISPLAYED_REWARD_TUTORIAL: `displayed-reward-tutorial-`,
	DISPLAYED_QUESTS_TUTORIAL: `displayed-quests-tutorial-`,
	DISPLAYED_GIVEAWAY_TUTORIAL: `displayed-giveaway-tutorial-`,
	DISPLAYED_COLLECTION_ADMIN_WELCOME: `displayed-collection-admin-welcome-`,
	FORCED_ADMIN_COLLECTION_ID: `forced-admin-collection-id-`,
	EMAIL_FOR_SIGN_IN: `email-for-sign-in-`,
	REDIRECT_TO: `redirect_to-`,
	MAILCHIMP_ORGANIZATION_ID: `mailchimp-organization-id-`,
}

const ORG_KEYS = {
	LABEL: `sc-org-label-`,
	ICON: `sc-org-icon-`,
	ID: `sc-org-id-`,
	PREFIX: `sc-org-prefix-`,
	DOMAIN_URL: `domain-`,
	DISCORD_OAUTH: `discord-oauth-`,
}

/**
 *
 * @param wallet
 * @param id
 * @param code
 * @param status
 * @param email
 * @param address
 * @param confirmed
 * @param hasTwitter
 * @param domain_url
 * @param discord_oauth_url
 * @param token
 * @param organizationId
 */
export const saveUserDataLocal = ({
	                                  wallet, id, code, status, email, address, confirmed, hasTwitter, domain_url,
	                                  discord_oauth_url
                                  }, token, organizationId) => {
	localStorage.setItem(`${KEYS.TOKEN}${organizationId}`, token)
	localStorage.setItem(`${KEYS.USER_WALLET}${organizationId}`, wallet)
	localStorage.setItem(`${KEYS.USER_ID}${organizationId}`, id)
	localStorage.setItem(`${KEYS.USER_CODE}${organizationId}`, code)
	localStorage.setItem(`${KEYS.USER_STATUS}${organizationId}`, status)
	localStorage.setItem(`${KEYS.USER_EMAIL}${organizationId}`, email)
	localStorage.setItem(`${KEYS.USER_ADDRESS}${organizationId}`, address)
	localStorage.setItem(`${KEYS.USER_CONFIRMED}${organizationId}`, confirmed)
	localStorage.setItem(`${KEYS.HAS_TWITTER}${organizationId}`, hasTwitter)
	localStorage.setItem(`${ORG_KEYS.DOMAIN_URL}${id}`, domain_url);
}

/**
 *
 * @return {{wallet: string, code: string, id: string, email: string, token: string, status: string}}
 */
export const getUserDataLocal = () => {
	const organizationId = PConfig.ORGANIZATION_ID
	const wallet = localStorage.getItem(`${KEYS.USER_WALLET}${organizationId}`)
	const token = localStorage.getItem(`${KEYS.TOKEN}${organizationId}`)
	const code = localStorage.getItem(`${KEYS.USER_CODE}${organizationId}`)
	const status = localStorage.getItem(`${KEYS.USER_STATUS}${organizationId}`)
	const id = localStorage.getItem(`${KEYS.USER_ID}${organizationId}`)
	const email = localStorage.getItem(`${KEYS.USER_EMAIL}${organizationId}`)
	return ({wallet, token: token?.length > 1 ? token : null, code, status, id, email,})
}

export const getAuthToken = (organizationId) => {
	return localStorage.getItem(`${KEYS.TOKEN}${organizationId}`)
}

export const cleanUserDataStorage = (organizationId) => {
	console.log("cleanUserDataStorage: ", organizationId)
	for (let key in KEYS) {
		if (KEYS.hasOwnProperty(key)) {
			localStorage.removeItem(`${KEYS[key]}${organizationId}`);
		}
	}
}

export const deleteDiscordServerCode = () => {
	const organizationId = PConfig.ORGANIZATION_ID;
	return localStorage.removeItem(`${KEYS.DISCORD_CODE}${organizationId}`)
}

export const setForcedAdminCollectionId = (collectionId) => {
	const organizationId = PConfig.ORGANIZATION_ID
	localStorage.setItem(`${KEYS.FORCED_ADMIN_COLLECTION_ID}${organizationId}`, collectionId)
}

export const getForcedAdminCollectionId = () => {
	const organizationId = PConfig.ORGANIZATION_ID
	return localStorage.getItem(`${KEYS.FORCED_ADMIN_COLLECTION_ID}${organizationId}`)
}

export const deleteForcedAdminCollectionId = () => {
	const organizationId = PConfig.ORGANIZATION_ID
	return localStorage.removeItem(`${KEYS.FORCED_ADMIN_COLLECTION_ID}${organizationId}`)
}

export const setEmailForSignIn = (email) => {
	const organizationId = PConfig.ORGANIZATION_ID
	localStorage.setItem(`${KEYS.EMAIL_FOR_SIGN_IN}${organizationId}`, email)
}

export const setDisplayingTutorialVisibility = (type, code) => {
	const organizationId = PConfig.ORGANIZATION_ID;
	localStorage.setItem(`${KEYS.DISPLAYED_LISTING_TUTORIAL}${type}-${organizationId}`, code);
}

export const getDisplayingTutorialVisibility = (type) => {
	const organizationId = PConfig.ORGANIZATION_ID;
	return localStorage.getItem(`${KEYS.DISPLAYED_LISTING_TUTORIAL}${type}-${organizationId}`);
}

export const getEmailForSignIn = () => {
	const organizationId = PConfig.ORGANIZATION_ID
	const email = localStorage.getItem(`${KEYS.EMAIL_FOR_SIGN_IN}${organizationId}`)
	const redirectTo = localStorage.getItem(`${KEYS.REDIRECT_TO}${organizationId}`)
	return {email, redirectTo}
}

export const setMailchimpOrganizationId = (id) => {
	const organizationId = PConfig.ORGANIZATION_ID
	localStorage.setItem(`${KEYS.MAILCHIMP_ORGANIZATION_ID}${organizationId}`, id)
}

export const getMailchimpOrganizationId = () => {
	const organizationId = PConfig.ORGANIZATION_ID
	return localStorage.getItem(`${KEYS.MAILCHIMP_ORGANIZATION_ID}${organizationId}`)
}

export const deleteMailchimpOrganizationId = () => {
	const organizationId = PConfig.ORGANIZATION_ID
	return localStorage.removeItem(`${KEYS.MAILCHIMP_ORGANIZATION_ID}${organizationId}`)
}
