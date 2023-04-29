import TopBusinessCategory from "./TopBusinessCategory";

import type { Meta, StoryObj } from "@storybook/react";

const metaTopBusinessCategory: Meta<typeof TopBusinessCategory> = {
    title: "Component/LandingPage/TopBusinessCategory",
    component: TopBusinessCategory,
    argTypes: {},
    args: {
        children: "Normal",
    },
};

export default metaTopBusinessCategory;
type Story = StoryObj<typeof metaTopBusinessCategory>;

export const BasicTopBusinessCategory: Story = {};
