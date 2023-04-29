import PrimaryButton from "./PrimaryButton";

import type { Meta, StoryObj } from "@storybook/react";

import item6 from "../../assets/images/business-location/London.jpg"
// import avatar from '../../../assets/images/team3.jpg';

const metaPrimaryButton: Meta<typeof PrimaryButton> = {
    title: "Component/Button/PrimaryButton",
    component: PrimaryButton,
    argTypes: {},
    args: {
        children: "Storybook"
    },
};

export default metaPrimaryButton;
type Story = StoryObj<typeof metaPrimaryButton>;

export const BasicPrimaryButton: Story = {};
