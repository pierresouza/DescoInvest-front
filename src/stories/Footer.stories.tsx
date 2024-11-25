import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import Footer from "../components/Footer";

export default {
  title: "Footer",
  component: Footer,
} as Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      );
    },
  ],
};
