import { Meta, StoryObj } from "@storybook/react";
import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/Input";

export default {
  title: "Label",
  component: Label,

  tags: ["autodocs"],
} as Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Label htmlFor="name">Nome completo</Label>
        <Input id="name" placeholder="Digite seu nome" variant="simulation" />
      </>
    );
  },
};
