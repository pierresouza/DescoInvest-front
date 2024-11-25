import { Meta, StoryObj } from "@storybook/react";
import { PatrimonyInfo } from "../components/PatrimonytInfo";

export default {
  title: "PatrimonyInfo",
  component: PatrimonyInfo,
} as Meta<typeof PatrimonyInfo>;

type Story = StoryObj<typeof PatrimonyInfo>;

export const Default: Story = {
  args: {
    data: {
      patrimony_current: 321456.76,
      patrimony_in_3_months: 334892.03,
      patrimony_in_6_months: 310503.65,
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="max-w-sm">
          <Story />
        </div>
      );
    },
  ],
};
