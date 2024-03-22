import type { Meta, StoryObj } from "@storybook/react";
import VoteNumberCreateForm from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof VoteNumberCreateForm> = {
  title: "client/vote/number/create-form",
  component: VoteNumberCreateForm,
  decorators: (Story) => (
    <div style={{ width: 500 }}>
      <Story />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof VoteNumberCreateForm>;

export const Sample: Story = {};
