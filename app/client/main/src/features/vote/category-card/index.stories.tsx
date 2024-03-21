import type { Meta, StoryObj } from "@storybook/react";

import VoteCategoryCard from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof VoteCategoryCard> = {
  title: "client/vote/category-card",
  component: VoteCategoryCard,
  decorators: (Story) => {
    return (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof VoteCategoryCard>;

export const CardNormal: Story = {
  args: {
    imageUrl:
      "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg",
    category: "테스트 카테고리",
    description: (
      <>
        "테스트 설명 이지롱"
        <br />이 편지는 영국에서부터 시작해서 지금까지 전설의 산물로 내려오는 것
        같아보이는데 사실 그런거 다 개구라고 집에 가고 싶은 나의 마음을
        아십니까. 집 하니까 제가 살았던 LA가 생각나는데 말이죠...
      </>
    ),
  },
};
