import type { Meta, StoryObj } from "@storybook/react";

import Avatar from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Avatar> = {
  title: "client/avatar",
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const AvatarItem: Story = {
  args: {},
};
