import type { Meta, StoryObj } from "@storybook/react";

import Input from "./input";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Input> = {
  title: "design-system/input/default",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const DefaultInput: Story = {
  args: {
    placeholder: "일단은 머리를 둥글게",
  },
};
