import WidgetSocial from "./WidgetSocial";

import type { Meta, StoryObj } from "@storybook/react";

import item6 from "../../assets/images/business-location/London.jpg"
// import avatar from '../../../assets/images/team3.jpg';

const metaWidgetSocial: Meta<typeof WidgetSocial> = {
    title: "Component/Footer/WidgetSocial",
    component: WidgetSocial,
    argTypes: {},
    // args: {
    //     title: "Storybook"
    // },
};

export default metaWidgetSocial;
type Story = StoryObj<typeof metaWidgetSocial>;

export const BasicWidgetSocial: Story = {};
