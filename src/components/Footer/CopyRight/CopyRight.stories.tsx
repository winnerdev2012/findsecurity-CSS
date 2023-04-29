import CopyRight from "./CopyRight";

import type { Meta, StoryObj } from "@storybook/react";

import item6 from "../../assets/images/business-location/London.jpg"
// import avatar from '../../../assets/images/team3.jpg';

const metaCopyRight: Meta<typeof CopyRight> = {
    title: "Component/Footer/CopyRight",
    component: CopyRight,
    argTypes: {},
    // args: {
    //     title: "Storybook"
    // },
};

export default metaCopyRight;
type Story = StoryObj<typeof metaCopyRight>;

export const BasicCopyRight: Story = {};
