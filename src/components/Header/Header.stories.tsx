import Header from "./Header";

import type { Meta, StoryObj } from "@storybook/react";

import item6 from "../../assets/images/business-location/London.jpg"
// import avatar from '../../../assets/images/team3.jpg';

const metaHeader: Meta<typeof Header> = {
    title: "Component/Header",
    component: Header,
    argTypes: {},
    // args: {
    //     title: "Storybook"
    // },
};

export default metaHeader;
type Story = StoryObj<typeof metaHeader>;

export const BasicHeader: Story = {};
