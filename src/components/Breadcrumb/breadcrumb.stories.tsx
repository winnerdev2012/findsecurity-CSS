import breadcrumb from "./breadcrumb";

import type { Meta, StoryObj } from "@storybook/react";

import item6 from "../../assets/images/business-location/London.jpg"
// import avatar from '../../../assets/images/team3.jpg';

const metabreadcrumb: Meta<typeof breadcrumb> = {
    title: "Component/breadcrumb",
    component: breadcrumb,
    argTypes: {},
    args: {
        title: "Storybook"
    },
};

export default metabreadcrumb;
type Story = StoryObj<typeof metabreadcrumb>;

export const Basicbreadcrumb: Story = {};
