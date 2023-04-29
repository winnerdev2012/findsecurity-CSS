import NavbarToggler from "./NavbarToggler";

import type { Meta, StoryObj } from "@storybook/react";

import item6 from "../../assets/images/business-location/London.jpg"
// import avatar from '../../../assets/images/team3.jpg';

const metaNavbarToggler: Meta<typeof NavbarToggler> = {
    title: "Component/Header/NavbarToggler",
    component: NavbarToggler,
    argTypes: {},
    // args: {
    //     title: "Storybook"
    // },
};

export default metaNavbarToggler;
type Story = StoryObj<typeof metaNavbarToggler>;

export const BasicNavbarToggler: Story = {};
