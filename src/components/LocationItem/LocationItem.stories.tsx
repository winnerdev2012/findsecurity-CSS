import LocationItem from "./LocationItem";

import type { Meta, StoryObj } from "@storybook/react";

import item6 from "../../assets/images/business-location/London.jpg"
// import avatar from '../../../assets/images/team3.jpg';

const metaLocationItem: Meta<typeof LocationItem> = {
    title: "Component/BusinessLocation/LocationItem",
    component: LocationItem,
    argTypes: {},
    args: {
        id: "",
        className: "",
        itemarray: [{
            Imgurl: item6+'',
            vcount: 15,
            name: 'BusinessItem for storybook',
        }
        ],
        sort_type: 0
    },
};

export default metaLocationItem;
type Story = StoryObj<typeof metaLocationItem>;

export const BasicLocationItem: Story = {};
