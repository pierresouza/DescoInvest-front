import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui/Button";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Click me",
  },
  argTypes: {
    asChild: {
      description:
        "asChild is used to make the component works like the children argument",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Outline: Story = {};
Outline.args = {
  variant: "outline",
};

export const Stretch: Story = {};
Stretch.args = {
  stretch: true,
};
Stretch.decorators = [(Story) => <div className="w-[600px]">{Story()}</div>];

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <input />,
  },
};

//export const Default = Story.bind({});
