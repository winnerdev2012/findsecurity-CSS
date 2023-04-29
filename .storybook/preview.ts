import type { Preview } from "@storybook/react";
// import '../src/assets/index.scss';
import './base.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/lib/owl.carousel.min.css';
import '../src/assets/lib/directorist-icon.css';
import '../src/assets/lib/frontend-lite.min.css';
import '../src/assets/lib/directorist.css';
import '../src/assets/lib/post-37.css';
import '../src/assets/lib/style.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
