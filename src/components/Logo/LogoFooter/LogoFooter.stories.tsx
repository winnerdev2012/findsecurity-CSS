import LogoFooter from "./LogoFooter";

import type { Meta, StoryObj } from "@storybook/react";

import item6 from "../../assets/images/business-location/London.jpg"
// import avatar from '../../../assets/images/team3.jpg';

const metaLogoFooter: Meta<typeof LogoFooter> = {
    title: "Component/Footer/LogoFooter",
    component: LogoFooter,
    argTypes: {},
    // args: {
    //     title: "Storybook"
    // },
};

export default metaLogoFooter;
type Story = StoryObj<typeof metaLogoFooter>;

export const BasicLogoFooter: Story = {};
