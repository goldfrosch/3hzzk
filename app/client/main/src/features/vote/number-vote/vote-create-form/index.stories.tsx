import type { Meta, StoryObj } from "@storybook/react";
import { VoteCreateForm } from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof VoteCreateForm> = {
  title: "client/vote/number-vote/vote-create-form",
  component: VoteCreateForm,
  decorators: (Story) => {
    return (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof VoteCreateForm>;

export const CardNormal: Story = {};
