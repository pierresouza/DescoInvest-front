import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/ui/Input";

export default {
  title: "Input",
  component: Input,
  args: {
    placeholder: "Exemplo de placeholder",
  },
  tags: ["autodocs"],
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};
