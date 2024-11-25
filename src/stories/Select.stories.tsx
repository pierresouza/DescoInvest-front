import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components/ui/Select";

export default {
  title: "Select",
  component: Select,
  args: {
    options: [
      { value: "Ação", option: "Ação" },
      { value: "Fundo Imobiliarios", option: "Fundo Imobiliarios" },
    ],
  },
  tags: ["autodocs"],
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};
