export const  PConfig = {
	BACKEND_MAIN: process.env.REACT_APP_BASE_API_URL,
	BACKEND_API_KEY: process.env.REACT_APP_BACKEND_API_KEY,
	ORGANIZATION_ID: process.env.REACT_APP_ORGANIZATION_ID || "",
	ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT,
	STRIPE_KEY: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
	DISCORD_WEB_SOCKET: process.env.REACT_APP_DISCORD_WEBSOCKET,
	SMARTLOOK_KEY: process.env.REACT_APP_SMARTLOOK_KEY || "",
	IFRAMERLY_API_KEY: process.env.REACT_APP_IFRAMERLY_API_KEY || "",
};

