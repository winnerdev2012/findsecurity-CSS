import TagManager from "react-gtm-module"

const GtmConfig = {
	gtmId: process.env.REACT_APP_GTM_TOKEN || '',
};

export function GTM_Init({params = {}}) {
	// noinspection JSUnresolvedFunction
	TagManager.initialize({
		...GtmConfig,
		...params,
	});
}

export const GTM_DATA_LAYER = (params) => {
	console.log('> Data Layer =>', params);
	// noinspection JSUnresolvedFunction
	TagManager.dataLayer({
		...GtmConfig,
		...params,
	});
}

