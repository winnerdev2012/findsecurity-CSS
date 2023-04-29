import BusinessProviders from "./BusinessProviders";

import type { Meta, StoryObj } from "@storybook/react";

const metaBusinessProviders: Meta<typeof BusinessProviders> = {
    title: "Component/LandingPage/BusinessProviders",
    component: BusinessProviders,
    argTypes: {},
    args: {
        children: "Normal",
    },
};

export default metaBusinessProviders;
type Story = StoryObj<typeof metaBusinessProviders>;

export const BasicBusinessProviders: Story = {};
