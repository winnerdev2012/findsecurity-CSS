import SearchItem from "./SearchItem";

import type { Meta, StoryObj } from "@storybook/react";
import item6 from "../../assets/images/CompanyItems/4-1.jpg"
import avatar from '../../assets/images/team3.jpg';

const metaSearchItem: Meta<typeof SearchItem> = {
    title: "Component/SearchResult/SearchItem",
    component: SearchItem,
    argTypes: {},
    args: {
        id: "",
        className: "",
        itemarray: [{
            Imgurl: item6+'',
            avatar: avatar+'',
            name: 'Item for Storybook',
        }
        ],
        sort_type: 0
    },
};

export default metaSearchItem;
type Story = StoryObj<typeof metaSearchItem>;

export const BasicSearchItem: Story = {};
