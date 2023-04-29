import Pagearea from "./Page-area";

import type { Meta, StoryObj } from "@storybook/react";

const metaPagearea: Meta<typeof Pagearea> = {
    title: "Component/BusinessLocation",
    component: Pagearea,
    argTypes: {},
    args: {
        children: "Normal",
    },
};

export default metaPagearea;
type Story = StoryObj<typeof metaPagearea>;

export const BasicPagearea: Story = {};
