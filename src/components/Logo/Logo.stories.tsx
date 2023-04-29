import Logo from "./Logo";

import type { Meta, StoryObj } from "@storybook/react";

import item6 from "../../assets/images/business-location/London.jpg"
// import avatar from '../../../assets/images/team3.jpg';

const metaLogo: Meta<typeof Logo> = {
    title: "Component/Header/Logo",
    component: Logo,
    argTypes: {},
    // args: {
    //     title: "Storybook"
    // },
};

export default metaLogo;
type Story = StoryObj<typeof metaLogo>;

export const BasicLogo: Story = {};
