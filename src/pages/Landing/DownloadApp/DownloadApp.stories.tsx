import DownloadApp from "./DownloadApp";

import type { Meta, StoryObj } from "@storybook/react";

const metaDownloadApp: Meta<typeof DownloadApp> = {
    title: "Component/LandingPage/DownloadApp",
    component: DownloadApp,
    argTypes: {},
    args: {
        children: "Normal",
    },
};

export default metaDownloadApp;
type Story = StoryObj<typeof metaDownloadApp>;

export const BasicDownloadApp: Story = {};
