import Preloader from "./Preloader";

import type { Meta, StoryObj } from "@storybook/react";

import item6 from "../../assets/images/business-location/London.jpg"
// import avatar from '../../../assets/images/team3.jpg';

const metaPreloader: Meta<typeof Preloader> = {
    title: "Component/Preloader",
    component: Preloader,
    argTypes: {},
    // args: {
    //     title: "Storybook"
    // },
};

export default metaPreloader;
type Story = StoryObj<typeof metaPreloader>;

export const BasicPreloader: Story = {};
