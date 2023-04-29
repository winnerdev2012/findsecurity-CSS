import Footer from "./Footer";

import type { Meta, StoryObj } from "@storybook/react";

import item6 from "../../assets/images/business-location/London.jpg"
// import avatar from '../../../assets/images/team3.jpg';

const metaFooter: Meta<typeof Footer> = {
    title: "Component/Footer",
    component: Footer,
    argTypes: {},
    // args: {
    //     title: "Storybook"
    // },
};

export default metaFooter;
type Story = StoryObj<typeof metaFooter>;

export const BasicFooter: Story = {};
