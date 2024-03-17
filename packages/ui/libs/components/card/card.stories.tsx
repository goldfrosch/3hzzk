import type { Meta, StoryObj } from "@storybook/react";

import Card from "./card";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Card> = {
  title: "design-system/card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const CardNormal: Story = {
  args: {
    children: "123123",
  },
};
