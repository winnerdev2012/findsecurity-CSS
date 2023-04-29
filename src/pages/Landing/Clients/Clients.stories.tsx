import Clients from "./Clients";

import type { Meta, StoryObj } from "@storybook/react";

const metaClients: Meta<typeof Clients> = {
    title: "Component/LandingPage/Clients",
    component: Clients,
    argTypes: {},
    args: {
        children: "Normal",
    },
};

export default metaClients;
type Story = StoryObj<typeof metaClients>;

export const BasicClients: Story = {};
