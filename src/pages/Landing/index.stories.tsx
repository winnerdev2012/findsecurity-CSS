import LandingPage from "./LandingPage";

import type { Meta, StoryObj } from "@storybook/react";

const metaLandingPage: Meta<typeof LandingPage> = {
    title: "Pages/LandingPage",
    component: LandingPage,
    argTypes: {},
    args: {
        children: "Normal",
    },
};

export default metaLandingPage;
type Story = StoryObj<typeof metaLandingPage>;

export const BasicLandingPage: Story = {};
