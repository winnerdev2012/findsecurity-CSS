/**
 *
 * @param _window
 * @param windowWidth
 * @param windowHeight
 * @param url
 */
export const openAuthPopup = (_window: any, windowWidth: number, windowHeight: number, url: string | undefined) => {
  if (!url) {
    return
  }

  const w = windowWidth * 0.4;
  const h = windowHeight * 0.9
  // Fixes dual-screen position                             Most browsers      Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = windowWidth;
  const height = windowHeight;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft
  const top = (height - h) / 2 / systemZoom + dualScreenTop

  return _window.open(
    url,
    "_blank",
    `
      scrollbars=yes,
      width=${w / systemZoom}, 
      height=${h / systemZoom}, 
      top=${top}, 
      left=${left}
      `,
  );
}

/**
 *
 * @param _window
 * @param windowWidth
 * @param windowHeight
 * @param url
 */
export const openCheckoutPopup = (_window: any, windowWidth: number, windowHeight: number, url: string | undefined) => {
  if (!url) {
    return
  }

  const w = windowWidth * 0.9;
  const h = windowHeight * 0.9
  // Fixes dual-screen position                             Most browsers      Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = windowWidth;
  const height = windowHeight;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft
  const top = (height - h) / 2 / systemZoom + dualScreenTop

  return _window.open(
    url,
    "_blank",
    `
      scrollbars=yes,
      width=${w / systemZoom}, 
      height=${h / systemZoom}, 
      top=${top}, 
      left=${left}
      `,
  );
}

