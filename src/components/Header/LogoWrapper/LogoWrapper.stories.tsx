import LogoWrapper from "./LogoWrapper";

import type { Meta, StoryObj } from "@storybook/react";

import item6 from "../../assets/images/business-location/London.jpg"
// import avatar from '../../../assets/images/team3.jpg';

const metaLogoWrapper: Meta<typeof LogoWrapper> = {
    title: "Component/Header/LogoWrapper",
    component: LogoWrapper,
    argTypes: {},
    args: {}

};

export default metaLogoWrapper;
type Story = StoryObj<typeof metaLogoWrapper>;

export const BasicLogoWrapper: Story = {};
