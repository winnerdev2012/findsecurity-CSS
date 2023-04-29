import {Collection} from "Types/CollectionTypes";

export const initCrisp = (_window: any) => {
  _window.$crisp = [];
  _window.CRISP_WEBSITE_ID = process.env.REACT_APP_CRISP_ID;
  (function () {
    const d = document;
    const s = d.createElement('script');

    s.src = 'https://client.crisp.chat/l.js';
    s.async = true;
    d.getElementsByTagName('head')[0].appendChild(s);
    _window.$crisp.push(['set', 'session:segments', [['webpage']]]);
  })();
}

export const openCrispChat = (_window: any) => {
  _window.$crisp?.push(['do', 'chat:open']);
}

export const addSessionCrisp = (user?: any | null, collection?: Collection | null) => {
  try {
    if (user) {
      window.$crisp.push(["set", "user:email", [user.email]]);
      window.$crisp.push(["set", "session:data", [[["user_id", user.id]]]]);
      window.$crisp.push(["set", "session:data", [[["username", user.username]]]]);
    }

    if (collection) {
      window.$crisp.push(["set", "session:data", [[["collection", collection.collection_slug]]]]);
    }
  } catch (e) {
    console.log("Error adding session crisp: ", e);
  }


};
