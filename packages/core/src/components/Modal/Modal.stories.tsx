import React, { useCallback } from "react";
import { ComponentMeta } from "@storybook/react";

import { Box } from "../Box";
import { Button } from "../Button";
import { FieldLabel } from "../FieldLabel";
import { Input } from "../Input";
import { LoremIpsum } from "../LoremIpsum";
import { Popover, usePopover } from "../Popover";
import { PopoverBody } from "../PopoverBody";
import { PopoverHeading } from "../PopoverHeading";
import { Portal } from "../Portal";
import { RadioButton } from "../RadioButton";
import { RadioButtonGroup } from "../RadioButtonGroup";
import { Tooltip, useTooltip } from "../Tooltip";
import { ModalBody } from "../ModalBody";
import { ModalFooter } from "../ModalFooter";
import { ModalHeading, ModalHeadingProps } from "../ModalHeading";

import page from "./Modal.docs.mdx";

import { Modal, ModalProps } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Overlay/Modal",
  component: Modal,
  parameters: {
    docs: { page },
  },
  argTypes: {
    level: {
      options: [3, 2],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Modal>;

interface Args extends ModalProps {
  level: ModalHeadingProps["level"];
}

const defaultArgs: Args = {
  level: 3,
  size: "sm",
};

export const SizeSmallWoIcon = ({
  level,
  ...args
}: Args): React.ReactElement => {
  const [isOpen, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal {...args} isOpen={isOpen} toggle={toggle}>
        <ModalHeading level={level}>You have unsaved changes!</ModalHeading>
        <ModalBody>What do you think you&apos;re doing?</ModalBody>
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

SizeSmallWoIcon.storyName = "size: small (w/o icon)";

SizeSmallWoIcon.args = defaultArgs;

export const SizeSmallWIcon = (): React.ReactElement => {
  const [isOpen, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal size="sm" isOpen={isOpen} toggle={toggle}>
        <ModalHeading iconType="warning">
          You have unsaved changes!
        </ModalHeading>
        <ModalBody>What do you think you&apos;re doing?</ModalBody>
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

SizeSmallWIcon.storyName = "size: small (w/ icon)";

export const SizeMedium = (): React.ReactElement => {
  const [isOpen, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal size="md" isOpen={isOpen} toggle={toggle}>
        <ModalHeading>Add New App to Stopwatch &amp; Droidboy</ModalHeading>
        <ModalBody>
          <FieldLabel label="App name">
            <Input id="exampleInput" />
          </FieldLabel>
          <FieldLabel label="Platform">
            <select
              id="exampleInput2"
              style={{
                height: 40,
                width: 300,
                paddingLeft: 10,
                border: "1px solid #A8B3B8",
              }}
            >
              <option>Android</option>
              <option>FireOS</option>
              <option>iOS</option>
              <option>Windows</option>
              <option>Web</option>
              <option>tvOS</option>
              <option>Roku</option>
            </select>
          </FieldLabel>
          <FieldLabel label="Push Provider">
            <RadioButtonGroup name="radios">
              <RadioButton id="radioButton1" value="Firebase (FCM)">
                Firebase (FCM)
              </RadioButton>
              <RadioButton id="radioButton2" value="Huawei (HMS)">
                Huawei (HMS)
              </RadioButton>
              <RadioButton id="radioButton3" value="Baidu">
                Baidu
              </RadioButton>
            </RadioButtonGroup>
          </FieldLabel>
        </ModalBody>
        <ModalFooter>
          <ModalFooter aligner side="right">
            <Button id="cancelButton" variant="secondary" onClick={toggle}>
              Cancel
            </Button>
            <Button id="addButton">Add App</Button>
          </ModalFooter>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

SizeMedium.storyName = "size: medium";

export const SizeLarge = (): React.ReactElement => {
  const [isOpen, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal size="lg" isOpen={isOpen} toggle={toggle}>
        <ModalHeading>Add New App to Stopwatch &amp; Droidboy</ModalHeading>
        <ModalBody>
          <FieldLabel label="App name">
            <Input id="exampleInput" />
          </FieldLabel>
          <FieldLabel label="Platform">
            <select
              id="exampleInput2"
              style={{
                height: 40,
                width: 300,
                paddingLeft: 10,
                border: "1px solid #A8B3B8",
              }}
            >
              <option>Android</option>
              <option>FireOS</option>
              <option>iOS</option>
              <option>Windows</option>
              <option>Web</option>
              <option>tvOS</option>
              <option>Roku</option>
            </select>
          </FieldLabel>
          <FieldLabel label="Push Provider">
            <RadioButtonGroup name="radios">
              <RadioButton id="radioButton1" value="Firebase (FCM)">
                Firebase (FCM)
              </RadioButton>
              <RadioButton id="radioButton2" value="Huawei (HMS)">
                Huawei (HMS)
              </RadioButton>
              <RadioButton id="radioButton3" value="Baidu">
                Baidu
              </RadioButton>
            </RadioButtonGroup>
          </FieldLabel>
        </ModalBody>
        <ModalFooter>
          <ModalFooter aligner side="right">
            <Button id="cancelButton" variant="secondary" onClick={toggle}>
              Cancel
            </Button>
            <Button id="addButton">Add App</Button>
          </ModalFooter>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

SizeLarge.storyName = "size: large";

export const SizeExtraLarge = (): React.ReactElement => {
  const [isOpen, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal size="xl" isOpen={isOpen} toggle={toggle}>
        <ModalHeading>Add New App to Stopwatch &amp; Droidboy</ModalHeading>
        <ModalBody>
          <FieldLabel label="App name">
            <Input id="exampleInput" />
          </FieldLabel>
          <FieldLabel label="Platform">
            <select
              id="exampleInput2"
              style={{
                height: 40,
                width: 300,
                paddingLeft: 10,
                border: "1px solid #A8B3B8",
              }}
            >
              <option>Android</option>
              <option>FireOS</option>
              <option>iOS</option>
              <option>Windows</option>
              <option>Web</option>
              <option>tvOS</option>
              <option>Roku</option>
            </select>
          </FieldLabel>
          <FieldLabel label="Push Provider">
            <RadioButtonGroup name="radios">
              <RadioButton id="radioButton1" value="Firebase (FCM)">
                Firebase (FCM)
              </RadioButton>
              <RadioButton id="radioButton2" value="Huawei (HMS)">
                Huawei (HMS)
              </RadioButton>
              <RadioButton id="radioButton3" value="Baidu">
                Baidu
              </RadioButton>
            </RadioButtonGroup>
          </FieldLabel>
        </ModalBody>
        <ModalFooter>
          <ModalFooter aligner side="right">
            <Button id="cancelButton" variant="secondary" onClick={toggle}>
              Cancel
            </Button>
            <Button id="addButton">Add App</Button>
          </ModalFooter>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

SizeExtraLarge.storyName = "size: extra large";

export const HeadingSizeWithH3 = ({
  level,
  ...args
}: Args): React.ReactElement => {
  const [isOpen, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal {...args} isOpen={isOpen} toggle={toggle}>
        <ModalHeading level={level}>
          Add New App to Stopwatch &amp; Droidboy
        </ModalHeading>
        <ModalBody>
          <FieldLabel label="App name">
            <Input id="exampleInput" />
          </FieldLabel>
          <FieldLabel label="Platform">
            <select
              id="exampleInput2"
              style={{
                height: 40,
                width: 300,
                paddingLeft: 10,
                border: "1px solid #A8B3B8",
              }}
            >
              <option>Android</option>
              <option>FireOS</option>
              <option>iOS</option>
              <option>Windows</option>
              <option>Web</option>
              <option>tvOS</option>
              <option>Roku</option>
            </select>
          </FieldLabel>
          <FieldLabel label="Push Provider">
            <RadioButtonGroup name="radios">
              <RadioButton id="radioButton1" value="Firebase (FCM)">
                Firebase (FCM)
              </RadioButton>
              <RadioButton id="radioButton2" value="Huawei (HMS)">
                Huawei (HMS)
              </RadioButton>
              <RadioButton id="radioButton3" value="Baidu">
                Baidu
              </RadioButton>
            </RadioButtonGroup>
          </FieldLabel>
        </ModalBody>
        <ModalFooter>
          <ModalFooter aligner side="right">
            <Button id="cancelButton" variant="secondary" onClick={toggle}>
              Cancel
            </Button>
            <Button id="addButton">Add App</Button>
          </ModalFooter>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

HeadingSizeWithH3.storyName = "heading size (with h3)";

HeadingSizeWithH3.args = defaultArgs;

export const NestedModals = (): React.ReactElement => {
  const [isOpen, setOpen] = React.useState(false);
  const [isInnerOpen, setInnerOpen] = React.useState(false);

  const toggle = () => {
    // only close the parent modal if the child modal is closed
    if (!isInnerOpen) {
      setOpen(!isOpen);
    }
  };

  const toggleInner = () => {
    setInnerOpen(!isInnerOpen);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal size="xl" isOpen={isOpen} toggle={toggle} className="outer">
        <ModalHeading>You have unsaved changes!</ModalHeading>
        <ModalBody>
          <Button onClick={() => setInnerOpen(true)}>Show modal</Button>
          <Modal
            size="xl"
            isOpen={isInnerOpen}
            toggle={toggleInner}
            className="inner"
          >
            <ModalHeading>A HEADER. NEW THINGS. WHATEVER!</ModalHeading>
            <ModalBody>
              <LoremIpsum paragraphs={2} />
            </ModalBody>
            <ModalFooter>
              <ModalFooter aligner side="left">
                <Button variant="quaternary">Don&apos;t save</Button>
              </ModalFooter>
              <ModalFooter aligner side="right">
                <Button variant="secondary" onClick={toggleInner}>
                  Keep Editing
                </Button>
                <Button>Save Draft</Button>
              </ModalFooter>
            </ModalFooter>
          </Modal>
          <LoremIpsum paragraphs={7} />
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

NestedModals.storyName = "nested modals";

export const NestedModalsWithCustomZIndex = (): React.ReactElement => {
  const [isOpen, setOpen] = React.useState(false);
  const [isInnerOpen, setInnerOpen] = React.useState(false);

  const toggle = () => {
    // only close the parent modal if the child modal is closed
    if (!isInnerOpen) {
      setOpen(!isOpen);
    }
  };

  const toggleInner = () => {
    setInnerOpen(!isInnerOpen);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal
        size="xl"
        isOpen={isOpen}
        toggle={toggle}
        className="outer"
        zIndex={605}
      >
        <ModalHeading>You have unsaved changes!</ModalHeading>
        <ModalBody>
          <Button onClick={() => setInnerOpen(true)}>Show modal</Button>
          <Modal
            size="xl"
            isOpen={isInnerOpen}
            toggle={toggleInner}
            className="inner"
          >
            <ModalHeading>A HEADER. NEW THINGS. WHATEVER!</ModalHeading>
            <ModalBody>
              <LoremIpsum paragraphs={2} />
            </ModalBody>
            <ModalFooter>
              <ModalFooter aligner side="left">
                <Button variant="quaternary">Don&apos;t save</Button>
              </ModalFooter>
              <ModalFooter aligner side="right">
                <Button variant="secondary" onClick={toggleInner}>
                  Keep Editing
                </Button>
                <Button>Save Draft</Button>
              </ModalFooter>
            </ModalFooter>
          </Modal>
          <LoremIpsum paragraphs={7} />
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

NestedModalsWithCustomZIndex.storyName = "nested modals with custom z-index";

export const NonDismissableModal = (): React.ReactElement => {
  const [isOpen, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal isOpen={isOpen}>
        <ModalHeading>You could mess stuff up!</ModalHeading>
        <ModalBody>What do you think you&apos;re doing?</ModalBody>
        <ModalFooter>
          <ModalFooter aligner side="right">
            <Button intent="danger" onClick={toggle}>
              I Accept
            </Button>
          </ModalFooter>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

NonDismissableModal.storyName = "non-dismissable modal";

export const NonDismissableModalWithNoExit = (): React.ReactElement => {
  const [seconds, setSeconds] = React.useState(10);
  const [isOpen, setOpen] = React.useState(false);

  const toggle = useCallback(() => {
    setOpen(!isOpen);

    setSeconds(10);
  }, [isOpen]);

  React.useEffect(() => {
    let interval;

    if (isOpen) {
      interval = setInterval(() => {
        setSeconds((seconds) => (seconds > 0 ? seconds - 1 : seconds));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isOpen]);

  React.useEffect(() => {
    if (seconds === 0) {
      toggle();
    }
  }, [seconds, toggle]);

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal isOpen={isOpen}>
        <ModalHeading>You could mess stuff up!</ModalHeading>
        <ModalBody>{seconds} second(s) until Modal close</ModalBody>
      </Modal>
    </React.Fragment>
  );
};

NonDismissableModalWithNoExit.storyName = "non-dismissable modal with no exit";

export const ModalWithOutsideContent = (): React.ReactElement => {
  const [isOpen, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal size="lg" isOpen={isOpen} toggle={toggle}>
        <ModalHeading>You have unsaved changes!</ModalHeading>
        <ModalBody>
          <Portal style={{ zIndex: 2400 }}>
            <div
              className="bcl-ignore-click-outside clickMeExample"
              style={{
                zIndex: 2400,
                position: "absolute",
                padding: "20px",
                background: "pink",
              }}
            >
              Click Me
            </div>
          </Portal>
          <Portal style={{ zIndex: 2400 }}>
            <div
              className="clickMeCloseExample"
              style={{
                zIndex: 2400,
                position: "absolute",
                top: "300px",
                padding: "20px",
                background: "pink",
              }}
            >
              Click Me To Close
            </div>
          </Portal>
          <LoremIpsum paragraphs={5} />
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

ModalWithOutsideContent.storyName = "modal with outside content";

export const ModalWithPopovers = (): React.ReactElement => {
  const [isOpen, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();
  const [tooltipState, targetTooltipRef] = useTooltip<HTMLButtonElement>();

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal size="lg" isOpen={isOpen} toggle={toggle}>
        <ModalHeading>You have unsaved changes!</ModalHeading>
        <ModalBody>
          <Button className="popoverOpen" ref={targetRef}>
            Click to open/close
          </Button>
          <Popover
            {...popoverState}
            targetRef={targetRef}
            defaultPlacement="bottom"
          >
            <PopoverHeading>Heading</PopoverHeading>
            <PopoverBody>
              We need to let the user know something in this tooltip!
            </PopoverBody>
          </Popover>
          <Box boxPadding={{ vertical: "md" }}>
            <span id="test_text">Some text should be covered</span>
          </Box>
          <LoremIpsum paragraphs={1} />
          <Button className="tooltipOpen" ref={targetTooltipRef}>
            Click to open/close tooltip
          </Button>
          <Tooltip
            targetRef={targetTooltipRef}
            triggers={["click"]}
            untriggers={["click"]}
            placement="bottom"
            {...tooltipState}
          >
            Tooltip with some info in it...
          </Tooltip>
          <Box boxPadding={{ vertical: "sm" }}>
            <span id="test_text2">Some text should be covered</span>
          </Box>
          <LoremIpsum paragraphs={1} />
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

ModalWithPopovers.storyName = "modal with popovers";
