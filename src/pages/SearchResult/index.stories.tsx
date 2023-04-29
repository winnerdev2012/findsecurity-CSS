import SearchResult from "./LandingPage";

import type { Meta, StoryObj } from "@storybook/react";

const metaSearchResult: Meta<typeof SearchResult> = {
    title: "Pages/SearchResult",
    component: SearchResult,
    argTypes: {sort_type : Number},
    args: {
        sort_type: 0
    },
};

export default metaSearchResult;
type Story = StoryObj<typeof metaSearchResult>;

export const BasicSearchResult: Story = {};
