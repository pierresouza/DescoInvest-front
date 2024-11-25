import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/CardTeam";

import image from "../assets/image 21.png";

export default {
  title: "Card",
  component: Card,
  args: {
    photo: image,
    office: "Desenvolvedor Front-end",
    name: "Jonathan Rodrigo",
    techs: ["TypeScript", "TailwindCSS", "React", "Firebase", "Radix UI"],
    description:
      "Conheça Jonathan, a mente por trás da criação deste projeto inovador e também um desenvolvedor front-end excepcional. Sua visão e habilidades combinadas tornam o projeto um sucesso.",
    options: {
      highlight: true,
      title: "Founder",
      isDev: true,
    },
    links: {
      github: "https://github.com/",
      linkedIn: "https://www.linkedin.com/",
      behance: "https://www.behance.net/",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
