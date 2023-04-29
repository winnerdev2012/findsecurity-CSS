import Itemlist from "./Itemlist";

import type { Meta, StoryObj } from "@storybook/react";

const metaItemlist: Meta<typeof Itemlist> = {
    title: "Component/SearchResult",
    component: Itemlist,
    argTypes: {sort_type : Number},
    args: {
    },
};

export default metaItemlist;
type Story = StoryObj<typeof metaItemlist>;

export const BasicItemlist: Story = {};
