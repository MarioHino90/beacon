import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@braze/beacon-core";

import { AlertModalHeading } from "../AlertModalHeading";
import { AlertModalButton } from "../AlertModalButton";
import { AlertModalBody } from "../AlertModalBody";
import { AlertModalFooter } from "../AlertModalFooter";

import page from "./AlertModal.docs.mdx";

import { AlertModal, AlertModalProps, useAlertModal } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Commons/Alerts/AlertModal",
  component: AlertModal,
  parameters: {
    docs: { page },
  },
};

export const BasicUse = (
  args: AlertModalProps & { modalHeading: string; modalButtonText: string }
) => {
  const [isOpen, setState] = React.useState(false);
  const toggle = () => setState(!isOpen);

  return (
    <React.Fragment>
      <Button onClick={toggle}>Click to open modal</Button>
      <AlertModal {...args} isOpen={isOpen} toggle={toggle}>
        <AlertModalHeading>{args.modalHeading}</AlertModalHeading>
        <AlertModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AlertModalBody>
        <AlertModalFooter>
          <AlertModalFooter aligner side="right">
            <AlertModalButton onClick={action("Modal button click")}>
              {args.modalButtonText}
            </AlertModalButton>
          </AlertModalFooter>
        </AlertModalFooter>
      </AlertModal>
    </React.Fragment>
  );
};

BasicUse.storyName = "basic use";

BasicUse.argTypes = {
  modalHeading: {
    label: "Modal alert heading",
  },
  modalButtonText: {
    label: "Modal button text",
  },
};

BasicUse.args = {
  intent: "info",
  size: "md",
  modalHeading: "Some heading",
  modalButtonText: "Click me",
};

export const WithHook = (
  args: AlertModalProps & { modalHeading: string; modalButtonText: string }
) => {
  const [isOpen, toggle] = useAlertModal();

  return (
    <React.Fragment>
      <Button onClick={toggle}>Click to open modal</Button>
      <AlertModal {...args} isOpen={isOpen} toggle={toggle}>
        <AlertModalHeading>{args.modalHeading}</AlertModalHeading>
        <AlertModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AlertModalBody>
        <AlertModalFooter>
          <AlertModalFooter aligner side="right">
            <AlertModalButton onClick={action("Modal button click")}>
              {args.modalButtonText}
            </AlertModalButton>
          </AlertModalFooter>
        </AlertModalFooter>
      </AlertModal>
    </React.Fragment>
  );
};

WithHook.storyName = "with hook";

WithHook.argTypes = {
  modalHeading: {
    label: "Modal alert heading",
  },
  modalButtonText: {
    label: "Modal button text",
  },
};

WithHook.args = {
  intent: "info",
  modalHeading: "Some heading",
  modalButtonText: "Click me",
};

export const MultipleActionsUse = () => {
  const [isOpen, setState] = React.useState(false);
  const toggle = () => setState(!isOpen);

  return (
    <React.Fragment>
      <Button intent="warning" onClick={toggle}>
        Click to open modal
      </Button>
      <AlertModal isOpen={isOpen} toggle={toggle} intent="warning">
        <AlertModalHeading>Crunchy Toast</AlertModalHeading>
        <AlertModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AlertModalBody>
        <AlertModalFooter>
          <AlertModalButton
            variant="quaternary"
            onClick={action("Modal quartenary button click")}
          >
            Nutella
          </AlertModalButton>
          <AlertModalFooter aligner side="right">
            <AlertModalButton
              variant="secondary"
              onClick={action("Modal secondary button click")}
            >
              Peanut Butter
            </AlertModalButton>
            <AlertModalButton onClick={action("Modal button click")}>
              Jelly
            </AlertModalButton>
          </AlertModalFooter>
        </AlertModalFooter>
      </AlertModal>
    </React.Fragment>
  );
};

MultipleActionsUse.storyName = "multiple actions use";

export const DifferentSizes = (args: AlertModalProps) => {
  const [isOpen, setState] = React.useState(false);
  const toggle = () => setState(!isOpen);

  return (
    <React.Fragment>
      <Button intent="success" onClick={toggle}>
        Click to open modal
      </Button>
      <AlertModal {...args} isOpen={isOpen} toggle={toggle} intent="success">
        <AlertModalHeading>Crunchy Toast</AlertModalHeading>
        <AlertModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AlertModalBody>
        <AlertModalFooter>
          <AlertModalButton
            variant="quaternary"
            onClick={action("Modal quaternary button click")}
          >
            Nutella
          </AlertModalButton>
          <AlertModalFooter aligner side="right">
            <AlertModalButton
              variant="secondary"
              onClick={action("Modal secondary button click")}
            >
              Peanut Butter
            </AlertModalButton>
            <AlertModalButton onClick={action("Modal button click")}>
              Jelly
            </AlertModalButton>
          </AlertModalFooter>
        </AlertModalFooter>
      </AlertModal>
    </React.Fragment>
  );
};

DifferentSizes.storyName = "different sizes";

DifferentSizes.args = {
  size: "lg",
};

export const DangerUse = () => {
  const [isOpen, setState] = React.useState(false);
  const toggle = () => setState(!isOpen);

  return (
    <React.Fragment>
      <Button intent="danger" onClick={toggle}>
        Click to open danger modal
      </Button>
      <AlertModal isOpen={isOpen} toggle={toggle} intent="danger">
        <AlertModalHeading>Some heading</AlertModalHeading>
        <AlertModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AlertModalBody>
        <AlertModalFooter>
          <AlertModalFooter aligner side="right">
            <AlertModalButton onClick={action("Modal button click")}>
              Click me
            </AlertModalButton>
          </AlertModalFooter>
        </AlertModalFooter>
      </AlertModal>
    </React.Fragment>
  );
};

DangerUse.storyName = "danger use";

export const SuccessUse = () => {
  const [isOpen, setState] = React.useState(false);
  const toggle = () => setState(!isOpen);

  return (
    <React.Fragment>
      <Button intent="success" onClick={toggle}>
        Click to open success modal
      </Button>
      <AlertModal isOpen={isOpen} toggle={toggle} intent="success">
        <AlertModalHeading>Some heading</AlertModalHeading>
        <AlertModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AlertModalBody>
        <AlertModalFooter>
          <AlertModalFooter aligner side="right">
            <AlertModalButton onClick={action("Modal button click")}>
              Click me
            </AlertModalButton>
          </AlertModalFooter>
        </AlertModalFooter>
      </AlertModal>
    </React.Fragment>
  );
};

SuccessUse.storyName = "success use";

export const WarningUse = () => {
  const [isOpen, setState] = React.useState(false);
  const toggle = () => setState(!isOpen);

  return (
    <React.Fragment>
      <Button intent="warning" onClick={toggle}>
        Click to open warning modal
      </Button>
      <AlertModal isOpen={isOpen} toggle={toggle} intent="warning">
        <AlertModalHeading>Some heading</AlertModalHeading>
        <AlertModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AlertModalBody>
        <AlertModalFooter>
          <AlertModalFooter aligner side="right">
            <AlertModalButton onClick={action("Modal button click")}>
              Click me
            </AlertModalButton>
          </AlertModalFooter>
        </AlertModalFooter>
      </AlertModal>
    </React.Fragment>
  );
};

WarningUse.storyName = "warning use";
