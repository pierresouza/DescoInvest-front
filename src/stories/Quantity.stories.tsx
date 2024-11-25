import { Meta, StoryObj } from "@storybook/react";
import { Quantity } from "../components/ui/Quantity";

export default {
  title: "Quantity",
  component: Quantity,
  args: {
    onChange: () => console.log("foi"),
  },
  tags: ["autodocs"],
} as Meta<typeof Quantity>;

type Story = StoryObj<typeof Quantity>;

export const Default: Story = {
  render: () => {
    return (
      <div className=" flex flex-col w-[300px] ">
        <Quantity onChange={() => console.log("")} />
      </div>
    );
  },
};
