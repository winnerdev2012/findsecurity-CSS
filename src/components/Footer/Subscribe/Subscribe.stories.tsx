import Subscribe from "./Subscribe";

import type { Meta, StoryObj } from "@storybook/react";

import item6 from "../../assets/images/business-location/London.jpg"
// import avatar from '../../../assets/images/team3.jpg';

const metaSubscribe: Meta<typeof Subscribe> = {
    title: "Component/Footer/Subscribe",
    component: Subscribe,
    argTypes: {},
    // args: {
    //     title: "Storybook"
    // },
};

export default metaSubscribe;
type Story = StoryObj<typeof metaSubscribe>;

export const BasicSubscribe: Story = {};
