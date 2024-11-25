import { Meta, StoryFn } from "@storybook/react";
import * as Modal from "../components/ui/Modal";
import { Button } from "../components/ui/Button";

export default {
  title: "Modal",
  component: Modal.Root,
} as Meta<typeof Modal.Root>;

export const Default: StoryFn = () => {
  return (
    <Modal.Root>
      <Modal.Trigger asChild>
        <Button>Abrir modal</Button>
      </Modal.Trigger>
      <Modal.Content>
        <h1>Meu conteudo</h1>
        <Modal.Close asChild>
          <Button variant="danger">Fechar</Button>
        </Modal.Close>
      </Modal.Content>
    </Modal.Root>
  );
};
