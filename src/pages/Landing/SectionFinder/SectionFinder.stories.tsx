import SectionFinder from "./SectionFinder";

import type { Meta, StoryObj } from "@storybook/react";

const metaSectionFinder: Meta<typeof SectionFinder> = {
    title: "Component/LandingPage/SectionFinder",
    component: SectionFinder,
    argTypes: {},
    args: {
        children: "Normal",
    },
};

export default metaSectionFinder;
type Story = StoryObj<typeof metaSectionFinder>;

export const BasicSectionFinder: Story = {};
