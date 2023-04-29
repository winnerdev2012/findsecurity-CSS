import PrimaryButtonLink from "./PrimaryButtonLink";

import type { Meta, StoryObj } from "@storybook/react";

import item6 from "../../assets/images/business-location/London.jpg"
// import avatar from '../../../assets/images/team3.jpg';

const metaPrimaryButtonLink: Meta<typeof PrimaryButtonLink> = {
    title: "Component/Button/PrimaryButtonLink",
    component: PrimaryButtonLink,
    argTypes: {},
    args: {
        children: "Storybook"
    },
};

export default metaPrimaryButtonLink;
type Story = StoryObj<typeof metaPrimaryButtonLink>;

export const BasicPrimaryButtonLink: Story = {};
