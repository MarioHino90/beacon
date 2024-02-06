import React, { useState, useRef, useMemo, ReactElement } from "react";
import { boolean, number, text, select } from "@storybook/addon-knobs";

import { Input } from "../Input";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Modal } from "../Modal";
import { ModalHeading } from "../ModalHeading";
import { ModalBody } from "../ModalBody";
import { AllowedTriggers, AllowedUnTriggers, placementTypes } from "../Popper";
import { PopoverBody } from "../PopoverBody";
import { PopoverHeading } from "../PopoverHeading";
import { BannerAlert } from "../BannerAlert";
import { BannerAlertBody } from "../BannerAlertBody";
import { BannerAlertDescription } from "../BannerAlertDescription";
import { BannerAlertDescriptionText } from "../BannerAlertDescriptionText";

import { Popover, usePopover } from "./Popover";
import page from "./Popover.docs.mdx";

// this is used to allow cypress tests to focus away from the popper without using realPress("Tab")
// it's invisible because it doesn't affect the story at all from an enduser perspective
const InvisibleButton = () => {
  return <button style={{ color: "transparent" }}>invisible button</button>;
};

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Overlay/Popover",
  component: Popover,
  parameters: {
    docs: { page },
  },
};

const MustBeCanvasMode = () => (
  <div style={{ width: 500 }}>
    <BannerAlert intent="warning" isOpen>
      <BannerAlertBody>
        <BannerAlertDescription>
          <BannerAlertDescriptionText>
            Warning: This story only works in Canvas mode, click on the
            &quot;Canvas&quot; tab to view it.
          </BannerAlertDescriptionText>
        </BannerAlertDescription>
      </BannerAlertBody>
    </BannerAlert>
  </div>
);

export const BasicUse = (): React.ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();

  return (
    <div>
      <Button ref={targetRef}>Click to open/close</Button>
      <Popover
        {...popoverState}
        targetRef={targetRef}
        defaultPlacement={select("Default Placement", placementTypes, "bottom")}
        placement={select("Placement", placementTypes, "auto")}
        isCloseEnabled={boolean("Enable close button", false)}
        distance={number("Distance", 10)}
        skidding={number("Skidding", 0)}
        interactive={boolean("Interactive", false)}
      >
        <PopoverHeading>{text("Heading text", "Heading")}</PopoverHeading>
        <PopoverBody>
          {text(
            "Body text",
            "Set the priority of this Canvas relative to other individual in-app message Campaigns."
          )}
        </PopoverBody>
      </Popover>
    </div>
  );
};

BasicUse.storyName = "basic use";

export const SmallTarget = (): React.ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();

  return (
    <div style={{ padding: 40 }}>
      <IconButton
        ref={targetRef}
        name="plus-circle"
        aria-label="select to open"
      />
      <Popover
        {...popoverState}
        targetRef={targetRef}
        defaultPlacement={select("Default Placement", placementTypes, "bottom")}
        placement={select("Placement", placementTypes, "auto")}
        isCloseEnabled={boolean("Enable close button", false)}
        distance={number("Distance", 10)}
        skidding={number("Skidding", 0)}
        interactive={boolean("Interactive", false)}
      >
        <PopoverHeading>{text("Heading text", "Heading")}</PopoverHeading>
        <PopoverBody>
          {text(
            "Body text",
            "Set the priority of this Canvas relative to other individual in-app message Campaigns. This will result in many important changes and things to consider, such as how to make this a really, really, really long sentence in order to ensure that the popover tip is pointing at the target button when it would be below if a static % was used to lay out the popover."
          )}
        </PopoverBody>
      </Popover>
    </div>
  );
};

SmallTarget.storyName = "small target";

export const TriggerOnFocus = (): React.ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();

  return (
    <div>
      <Button ref={targetRef}>Focus to open</Button>
      <Popover
        targetRef={targetRef}
        triggers={["focus"]}
        untriggers={["blur"]}
        placement={select("Placement", placementTypes, "right")}
        {...popoverState}
      >
        <PopoverHeading>{text("Heading text", "Heading")}</PopoverHeading>
        <PopoverBody>
          {text(
            "Body text",
            "Set the priority of this Canvas relative to other individual in-app message Campaigns."
          )}
        </PopoverBody>
      </Popover>
      <InvisibleButton />
    </div>
  );
};

TriggerOnFocus.storyName = "trigger on focus";

export const TriggerOnHover = (): ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();

  return (
    <div>
      <Button ref={targetRef}>
        <span>Hover to open</span>
      </Button>
      <Popover
        {...popoverState}
        targetRef={targetRef}
        triggers={["mouseenter"]}
        untriggers={["mouseleave"]}
        placement={select("Placement", placementTypes, "bottom-start")}
      >
        <PopoverHeading>{text("Heading text", "Heading")}</PopoverHeading>
        <PopoverBody>
          {text(
            "Body text",
            "Set the priority of this Canvas relative to other individual in-app message Campaigns."
          )}
        </PopoverBody>
      </Popover>
    </div>
  );
};

TriggerOnHover.storyName = "trigger on hover";

export const UseWithDomId = (): React.ReactElement => {
  const [popoverState] = usePopover();

  return (
    <div>
      <Button id="default-button">Click to open/close</Button>
      <Popover
        {...popoverState}
        target="default-button"
        placement={select("Placement", placementTypes, "bottom")}
      >
        <PopoverHeading>{text("Heading text", "Heading")}</PopoverHeading>
        <PopoverBody>
          {text(
            "Body text",
            "Set the priority of this Canvas relative to other individual in-app message Campaigns."
          )}
        </PopoverBody>
      </Popover>
    </div>
  );
};

UseWithDomId.storyName = "use with DOM id";

export const Interactive = (): React.ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();

  return (
    <div>
      <Button ref={targetRef}>Click to open/close</Button>
      <Popover
        {...popoverState}
        targetRef={targetRef}
        placement={select("Placement", placementTypes, "bottom")}
        isCloseEnabled={boolean("Enable close button", false)}
        interactive
      >
        <PopoverHeading>{text("Heading text", "Heading")}</PopoverHeading>
        <PopoverBody>
          {text(
            "Body text",
            "Set the priority of this Canvas relative to other individual in-app message Campaigns."
          )}
        </PopoverBody>
      </Popover>
    </div>
  );
};

Interactive.storyName = "interactive";

export const WithCloseButton = (): React.ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();

  return (
    <div>
      <Button ref={targetRef}>Click to open/close</Button>
      <Popover
        {...popoverState}
        targetRef={targetRef}
        placement={select("Placement", placementTypes, "bottom")}
        isCloseEnabled
        interactive
      >
        <PopoverHeading>{text("Heading text", "Heading")}</PopoverHeading>
        <PopoverBody>
          {text(
            "Body text",
            "Set the priority of this Canvas relative to other individual in-app message Campaigns."
          )}
        </PopoverBody>
      </Popover>
    </div>
  );
};

WithCloseButton.storyName = "with close button";

export const AutoPlacement = (): React.ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();
  const portalRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{ width: "100%", height: "100vh", overflow: "scroll" }}
      id="scroll"
    >
      <MustBeCanvasMode />
      (scroll down and right inside the red box and click the button to see
      popover placement change)
      <div
        style={{
          border: "1px solid red",
          width: "200%",
          height: "200%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
        ref={portalRef}
      >
        <Button ref={targetRef}>Click to open/close</Button>
        <Popover
          {...popoverState}
          targetRef={targetRef}
          isCloseEnabled={boolean("Enable close button", false)}
          defaultPlacement={select(
            "Default placement",
            placementTypes,
            undefined
          )}
          interactive
          portalRef={portalRef}
        >
          <PopoverHeading>{text("Heading text", "Heading")}</PopoverHeading>
          <PopoverBody>
            {text(
              "Body text",
              "Set the priority of this Canvas relative to other individual in-app message Campaigns."
            )}
          </PopoverBody>
        </Popover>
      </div>
    </div>
  );
};

AutoPlacement.storyName = "auto-placement";

export const ModalUse = (): React.ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Click to open/close</Button>
      <Modal isOpen={isOpen} zIndex={2400} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeading>Popover Inside!</ModalHeading>
        <ModalBody>
          <Button ref={targetRef}>Click to open/close</Button>
          <Popover {...popoverState} targetRef={targetRef} placement="right">
            <PopoverHeading>Heading</PopoverHeading>
            <PopoverBody>
              Set the priority of this Canvas relative to other individual
              in-app message Campaigns.
            </PopoverBody>
          </Popover>
        </ModalBody>
      </Modal>
    </div>
  );
};

ModalUse.storyName = "modal use";

export const PreventCloseOnOutsideClickForElementWithClass =
  (): React.ReactElement => {
    const [popoverState, targetRef] = usePopover<HTMLButtonElement>();

    return (
      <div>
        <Button ref={targetRef}>This button opens the popover</Button>
        <Button
          className="bcl-popper-ignore-click"
          style={{ marginLeft: "1rem" }}
        >
          This button does NOT close the popover
        </Button>
        <Popover
          {...popoverState}
          targetRef={targetRef}
          placement="bottom"
          interactive
        >
          <PopoverBody>
            This is a bunch of content inside the popover
          </PopoverBody>
        </Popover>
      </div>
    );
  };

PreventCloseOnOutsideClickForElementWithClass.storyName =
  "prevent close on outside click for element with class";

export const PreventCloseOnOutsideClickForElementWithCustomClass =
  (): React.ReactElement => {
    const [popoverState, targetRef] = usePopover<HTMLButtonElement>();

    return (
      <div>
        <Button ref={targetRef}>This button opens the popover</Button>
        <Button
          className="custom-popper-ignore-click"
          style={{ marginLeft: "1rem" }}
        >
          This button does NOT close the popover
        </Button>
        <Popover
          {...popoverState}
          targetRef={targetRef}
          placement="bottom"
          ignoreCloseOnClickOutsideClassName="custom-popper-ignore-click"
          interactive
        >
          This is a bunch of content inside the popover
        </Popover>
      </div>
    );
  };

PreventCloseOnOutsideClickForElementWithCustomClass.storyName =
  "prevent close on outside click for element with custom class";

export const KeyboardAccessibility = (): React.ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLInputElement>();
  const triggers = useMemo<AllowedTriggers[]>(() => ["focus", "click"], []);
  const untriggers = useMemo<AllowedUnTriggers[]>(() => ["blur", "click"], []);
  const [saved, setSaved] = useState(false);

  return (
    <div>
      <Button type="button">
        Does nothing, here for testing purposes only
      </Button>
      <Input ref={targetRef} placeholder="focus to show popover" />
      <Popover
        {...popoverState}
        targetRef={targetRef}
        triggers={triggers}
        untriggers={untriggers}
        interactive
        popperStyle={{ maxWidth: "none", maxHeight: "none" }}
      >
        <div id="boring">
          Here is a div that is not interactive that is nested in the popover
        </div>
        Here is a form you can tab into
        <Input placeholder="internal form" />
        <Button variant="primary" type="button" onClick={() => setSaved(true)}>
          Save
        </Button>
        {saved && "content saved"}
      </Popover>
    </div>
  );
};

KeyboardAccessibility.storyName = "keyboard accessibility";
