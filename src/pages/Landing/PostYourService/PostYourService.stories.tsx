import PostYourService from "./PostYourService";

import type { Meta, StoryObj } from "@storybook/react";

const metaPostYourService: Meta<typeof PostYourService> = {
    title: "Component/LandingPage/PostYourService",
    component: PostYourService,
    argTypes: {},
    args: {
        children: "Normal",
    },
};

export default metaPostYourService;
type Story = StoryObj<typeof metaPostYourService>;

export const BasicPostYourService: Story = {};
