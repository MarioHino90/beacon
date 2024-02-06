import React from "react";
import { action } from "@storybook/addon-actions";

import { BannerAlertIcon } from "../BannerAlertIcon";
import { BannerAlertAction } from "../BannerAlertAction";
import { BannerAlertLink } from "../BannerAlertLink";
import { BannerAlertAccordion } from "../BannerAlertAccordion";
import { BannerAlertAccordionHeader } from "../BannerAlertAccordionHeader";
import { BannerAlertAccordionBody } from "../BannerAlertAccordionBody";
import { BannerAlertAccordionFooter } from "../BannerAlertAccordionFooter";
import { BannerAlertBody } from "../BannerAlertBody";
import { BannerAlertTitle } from "../BannerAlertTitle";
import { BannerAlertDescription } from "../BannerAlertDescription";
import { BannerAlertDescriptionText } from "../BannerAlertDescriptionText";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { ModalBody } from "../ModalBody";
import { ModalFooter } from "../ModalFooter";
import { ModalHeading } from "../ModalHeading";
import { UntransitionedBannerAlert } from "../UntransitionedBannerAlert";
import { FieldLabel } from "../FieldLabel";
import { Input } from "../Input";

import page from "./BannerAlert.docs.mdx";

import { BannerAlert, BannerAlertProps } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Alerts/BannerAlert",
  component: BannerAlert,
  parameters: { docs: { page } },
};

interface BasicUseArgs {
  intent: BannerAlertProps["intent"];
  closeButton: boolean;
  description: boolean;
}

export const BasicUse = ({
  intent,
  closeButton,
  description,
}: BasicUseArgs) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <React.Fragment>
      <div style={{ marginBottom: "8px" }}>
        <Button
          className="open-banner"
          variant="primary"
          onClick={() => setIsOpen(true)}
        >
          Open Banner Alert
        </Button>
      </div>
      <BannerAlert isOpen={isOpen} intent={intent}>
        <BannerAlertBody
          onClose={
            closeButton
              ? () => {
                  action("click");

                  setIsOpen(false);
                }
              : undefined
          }
        >
          <BannerAlertTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BannerAlertTitle>
          {description ? (
            <BannerAlertDescription>
              <BannerAlertDescriptionText>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </BannerAlertDescriptionText>
              <BannerAlertLink
                onClick={() => {
                  action("click");

                  alert("link!!");
                }}
              >
                Reset
              </BannerAlertLink>
            </BannerAlertDescription>
          ) : (
            <BannerAlertLink
              onClick={() => {
                action("click");

                alert("link!!");
              }}
            >
              Reset
            </BannerAlertLink>
          )}
        </BannerAlertBody>
      </BannerAlert>
    </React.Fragment>
  );
};

BasicUse.argTypes = {
  closeButton: {
    control: "boolean",
  },
  description: {
    control: "boolean",
  },
};

BasicUse.args = {
  intent: "success",
  closeButton: true,
  description: true,
};

export const Multiline = () => {
  return (
    <BannerAlert isOpen intent="success">
      <BannerAlertBody
        onClose={() => {
          action("click");

          alert("close!!");
        }}
      >
        <BannerAlertTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </BannerAlertTitle>
        <BannerAlertLink
          onClick={() => {
            action("click");

            alert("link!!");
          }}
        >
          Move
        </BannerAlertLink>
      </BannerAlertBody>
    </BannerAlert>
  );
};

export const TitleAndDescription = () => {
  return (
    <BannerAlert isOpen intent="danger">
      <BannerAlertBody
        onClose={() => {
          action("click");

          alert("close!!");
        }}
      >
        <BannerAlertTitle>Here&apos;s a title for the banner</BannerAlertTitle>
        <BannerAlertDescription>
          <BannerAlertDescriptionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </BannerAlertDescriptionText>
          <BannerAlertLink
            onClick={() => {
              action("click");

              alert("link!!");
            }}
          >
            Retry Action
          </BannerAlertLink>
        </BannerAlertDescription>
      </BannerAlertBody>
    </BannerAlert>
  );
};

export const CustomLinkComponent = () => {
  return (
    <BannerAlert isOpen intent="warning">
      <BannerAlertBody
        onClose={() => {
          action("click");

          alert("close!!");
        }}
      >
        <BannerAlertTitle>Lorem ipsum dolor sit amet</BannerAlertTitle>
        <BannerAlertLink
          onClick={() => {
            action("click");

            alert("custom link!!");
          }}
          intent="success"
          as="a"
        >
          More Information
        </BannerAlertLink>
      </BannerAlertBody>
    </BannerAlert>
  );
};

export const OptionalLink = () => {
  return (
    <BannerAlert isOpen intent="info">
      <BannerAlertBody
        onClose={() => {
          action("click");

          alert("close!!");
        }}
      >
        <BannerAlertTitle>Lorem ipsum dolor sit amet</BannerAlertTitle>
      </BannerAlertBody>
    </BannerAlert>
  );
};

export const OptionalCloseButton = () => {
  return (
    <BannerAlert isOpen intent="warning">
      <BannerAlertBody>
        <BannerAlertTitle>Lorem ipsum dolor sit amet</BannerAlertTitle>
        <BannerAlertLink
          onClick={() => {
            action("click");

            alert("link!!");
          }}
        >
          More Information
        </BannerAlertLink>
      </BannerAlertBody>
    </BannerAlert>
  );
};

export const IconOverride = () => {
  return (
    <BannerAlert isOpen intent="success">
      <BannerAlertBody
        Icon={<BannerAlertIcon intent="danger" />}
        onClose={() => {
          action("click");

          alert("close!!");
        }}
      >
        <BannerAlertTitle>Lorem ipsum dolor sit amet</BannerAlertTitle>
        <BannerAlertLink
          onClick={() => {
            action("click");

            alert("link!!");
          }}
        >
          More Information
        </BannerAlertLink>
      </BannerAlertBody>
    </BannerAlert>
  );
};

interface AccordionArgs {
  intent: BannerAlertProps["intent"];
  isOpen: boolean;
}

export const Accordion = ({ intent, isOpen }: AccordionArgs) => {
  return (
    <BannerAlert isOpen intent={intent}>
      <BannerAlertBody
        onClose={() => {
          action("click");

          alert("close!!");
        }}
      >
        <BannerAlertTitle>Lorem ipsum dolor sit amet</BannerAlertTitle>
        <BannerAlertLink
          onClick={() => {
            action("click");

            alert("link!!");
          }}
          caret={isOpen ? "up" : "down"}
        >
          More Information
        </BannerAlertLink>
      </BannerAlertBody>
      <BannerAlertAccordion isOpen={isOpen}>
        <BannerAlertAccordionHeader>
          Some Title Here with Information
        </BannerAlertAccordionHeader>
        <BannerAlertAccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </BannerAlertAccordionBody>
        <BannerAlertAccordionFooter>
          <BannerAlertAction
            onClick={() => {
              action("click");

              alert("action!!");
            }}
          >
            Click Me!
          </BannerAlertAction>
        </BannerAlertAccordionFooter>
      </BannerAlertAccordion>
    </BannerAlert>
  );
};

Accordion.argTypes = {
  isOpen: {
    control: "boolean",
  },
};

Accordion.args = {
  intent: "success",
  isOpen: true,
};

export const AccordionWithDifferentIntent = () => {
  return (
    <BannerAlert isOpen intent="danger">
      <BannerAlertBody
        onClose={() => {
          action("click");

          alert("close!!");
        }}
      >
        <BannerAlertTitle>Lorem ipsum dolor sit amet</BannerAlertTitle>
        <BannerAlertLink
          onClick={() => {
            action("click");

            alert("link!!");
          }}
          caret="up"
        >
          More Information
        </BannerAlertLink>
      </BannerAlertBody>
      <BannerAlertAccordion intent="info" isOpen>
        <BannerAlertAccordionHeader>
          Some Title Here with Information
        </BannerAlertAccordionHeader>
        <BannerAlertAccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </BannerAlertAccordionBody>
        <BannerAlertAccordionFooter>
          <BannerAlertAction
            onClick={() => {
              action("click");

              alert("action!!");
            }}
          >
            More Information
          </BannerAlertAction>
        </BannerAlertAccordionFooter>
      </BannerAlertAccordion>
    </BannerAlert>
  );
};

export const AccordionWithoutTitle = () => {
  return (
    <BannerAlert isOpen intent="warning">
      <BannerAlertBody
        onClose={() => {
          action("click");

          alert("close!!");
        }}
      >
        <BannerAlertTitle>Lorem ipsum dolor sit amet</BannerAlertTitle>
        <BannerAlertLink
          onClick={() => {
            action("click");

            alert("link!!");
          }}
          caret="up"
        >
          More Information
        </BannerAlertLink>
      </BannerAlertBody>
      <BannerAlertAccordion isOpen>
        <BannerAlertAccordionHeader>
          Some Title Here with Information
        </BannerAlertAccordionHeader>
        <BannerAlertAccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </BannerAlertAccordionBody>
        <BannerAlertAccordionFooter>
          <BannerAlertAction
            onClick={() => {
              action("click");

              alert("action!!");
            }}
          >
            More Information
          </BannerAlertAction>
        </BannerAlertAccordionFooter>
      </BannerAlertAccordion>
    </BannerAlert>
  );
};

export const AccordionWithoutAction = () => {
  return (
    <BannerAlert isOpen intent="danger">
      <BannerAlertBody
        onClose={() => {
          action("click");

          alert("close!!");
        }}
      >
        <BannerAlertTitle>Lorem ipsum dolor sit amet</BannerAlertTitle>
        <BannerAlertLink
          onClick={() => {
            action("click");

            alert("link!!");
          }}
          caret="up"
        >
          More Information
        </BannerAlertLink>
      </BannerAlertBody>
      <BannerAlertAccordion isOpen>
        <BannerAlertAccordionHeader>
          Some Title Here with Information
        </BannerAlertAccordionHeader>
        <BannerAlertAccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </BannerAlertAccordionBody>
      </BannerAlertAccordion>
    </BannerAlert>
  );
};

export const AccordionWithCustomAction = () => {
  return (
    <BannerAlert isOpen intent="info">
      <BannerAlertBody
        onClose={() => {
          action("click");

          alert("close!!");
        }}
      >
        <BannerAlertTitle>Lorem ipsum dolor sit amet</BannerAlertTitle>
        <BannerAlertLink
          onClick={() => {
            action("click");

            alert("link!!");
          }}
          caret="up"
        >
          More Information
        </BannerAlertLink>
      </BannerAlertBody>
      <BannerAlertAccordion isOpen>
        <BannerAlertAccordionHeader>
          Some Title Here with Information
        </BannerAlertAccordionHeader>
        <BannerAlertAccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </BannerAlertAccordionBody>
        <BannerAlertAccordionFooter>
          <BannerAlertAction
            intent="danger"
            onClick={() => {
              action("click");

              alert("danger action!!");
            }}
          >
            Cancel
          </BannerAlertAction>
          <span style={{ marginLeft: "8px" }}>
            <BannerAlertAction
              onClick={() => {
                action("click");

                alert("info action!!");
              }}
            >
              More Info
            </BannerAlertAction>
          </span>
        </BannerAlertAccordionFooter>
      </BannerAlertAccordion>
    </BannerAlert>
  );
};

export const MultipleAccordionBodies = ({ intent, isOpen }: AccordionArgs) => {
  return (
    <BannerAlert isOpen intent={intent}>
      <BannerAlertBody
        onClose={() => {
          action("click");

          alert("close!!");
        }}
      >
        <BannerAlertTitle>Lorem ipsum dolor sit amet</BannerAlertTitle>
        <BannerAlertLink
          onClick={() => {
            action("click");

            alert("link!!");
          }}
          caret={isOpen ? "up" : "down"}
        >
          More Information
        </BannerAlertLink>
      </BannerAlertBody>
      <BannerAlertAccordion isOpen={isOpen}>
        <BannerAlertAccordionHeader>
          First Accordion Item
        </BannerAlertAccordionHeader>
        <BannerAlertAccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </BannerAlertAccordionBody>
        <BannerAlertAccordionHeader>
          Second Accordion Item
        </BannerAlertAccordionHeader>
        <BannerAlertAccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </BannerAlertAccordionBody>
        <BannerAlertAccordionFooter>
          <BannerAlertAction
            onClick={() => {
              action("click");

              alert("action!!");
            }}
          >
            Click Me!
          </BannerAlertAction>
        </BannerAlertAccordionFooter>
      </BannerAlertAccordion>
    </BannerAlert>
  );
};

MultipleAccordionBodies.argTypes = {
  isOpen: {
    control: "boolean",
  },
};

MultipleAccordionBodies.args = {
  intent: "success",
  isOpen: true,
};

export const WithoutTransition = () => {
  return (
    <UntransitionedBannerAlert intent="info">
      <BannerAlertBody>
        <BannerAlertTitle>Lorem ipsum dolor sit amet</BannerAlertTitle>
        <BannerAlertLink
          onClick={() => {
            action("click");

            alert("link!!");
          }}
        >
          Action On Click!
        </BannerAlertLink>
      </BannerAlertBody>
    </UntransitionedBannerAlert>
  );
};

export const InsideAModal = () => {
  const [isOpen, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal size="md" isOpen={isOpen} toggle={toggle}>
        <ModalHeading>You have unsaved changes!</ModalHeading>
        <ModalBody>
          <BannerAlert isOpen intent="warning">
            <BannerAlertBody onClose={action("close")}>
              <BannerAlertTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </BannerAlertTitle>
              <BannerAlertLink onClick={action("click")}>Move</BannerAlertLink>
            </BannerAlertBody>
          </BannerAlert>
          <br />
          <div>What do you think you&apos;re doing?</div>
        </ModalBody>
        <ModalFooter>
          <ModalFooter aligner side="left">
            <Button variant="quaternary">Don&apos;t save</Button>
          </ModalFooter>
          <ModalFooter aligner side="right">
            <Button variant="secondary" onClick={toggle}>
              Keep Editing
            </Button>
            <Button>Save Draft</Button>
          </ModalFooter>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

InsideAModal.storyName = "Inside a Modal";

export const InsideAForm = () => {
  const [isOpen, setOpen] = React.useState(true);
  const [formWasSubmitted, setFormWasSubmitted] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormWasSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <BannerAlert isOpen={isOpen} intent="warning">
        <BannerAlertBody onClose={() => setOpen(false)}>
          <BannerAlertTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </BannerAlertTitle>
          <BannerAlertLink onClick={action("click")}>Move</BannerAlertLink>
        </BannerAlertBody>
      </BannerAlert>
      {!isOpen && <Button onClick={() => setOpen(true)}>Re-open alert</Button>}
      <br />
      <FieldLabel label="Some Field" htmlFor="some-field">
        <Input id="some-field" />
      </FieldLabel>
      <span className="submission-status">
        The form has {formWasSubmitted ? "" : "not"} been submitted.
      </span>
    </form>
  );
};

InsideAForm.storyName = "Inside a Form";
