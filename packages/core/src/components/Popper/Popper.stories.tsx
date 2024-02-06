import React, {
  useState,
  useLayoutEffect,
  useContext,
  createContext,
  useCallback,
} from "react";

import { Button } from "../Button";
import { UncontrolledTooltip } from "../UncontrolledTooltip";
import { Tooltip, useTooltip } from "../Tooltip";
import { Popover, usePopover } from "../Popover";
import { LoremIpsum } from "../LoremIpsum";

import page from "./Popper.docs.mdx";
import { PlacementType } from "./types";

import { AllowedUnTriggers, Popper, PopperProps } from ".";

// this is used to allow cypress tests to focus away from the popper without using realPress("Tab")
// it's invisible because it doesn't affect the story at all from an enduser perspective
const InvisibleButton = () => {
  return <button style={{ color: "transparent" }}>invisible button</button>;
};

const SampleContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addButton: (_children?: React.ReactNode) => {},
});

const RenderTooltipButton = ({ children }: { children: React.ReactNode }) => {
  const { addButton } = useContext(SampleContext);

  useLayoutEffect(() => {
    addButton(children);
  }, [addButton, children]);

  return null;
};

interface DelayedRenderOfChildrenwithTooltipsProps {
  mouseLeaveUntrigger: boolean;
  placement: PlacementType;
  children: React.ReactNode;
}

const DelayedRenderOfChildrenwithTooltips = ({
  mouseLeaveUntrigger = false,
  placement = "auto",
  children,
}: DelayedRenderOfChildrenwithTooltipsProps) => {
  const [buttons, setButtons] = useState(new Set<string>());
  const addButton = useCallback(
    (buttonText) =>
      setButtons((oldState) => new Set<string>([...oldState, buttonText])),
    [setButtons]
  );

  return (
    <SampleContext.Provider value={{ addButton }}>
      <div>
        {[...buttons].map((toolTip) => (
          <span key={toolTip}>
            <UncontrolledTooltip
              label={toolTip}
              placement={placement}
              triggers={["click"]}
              untriggers={
                ["click"].concat(
                  mouseLeaveUntrigger ? ["mouseleave"] : []
                ) as AllowedUnTriggers[]
              }
            >
              <Button>Hover over me</Button>
            </UncontrolledTooltip>
            &nbsp;
          </span>
        ))}
      </div>
      {children}
    </SampleContext.Provider>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Overlay/Popper",
  component: Popper,
  parameters: {
    docs: { page },
  },
  argTypes: {
    placement: {
      label: "Placement",
      control: {
        type: "select",
        options: [
          "auto",
          "top-start",
          "top",
          "top-end",
          "right-start",
          "right",
          "right-end",
          "bottom-end",
          "bottom",
          "bottom-start",
          "left-end",
          "left",
          "left-start",
        ],
      },
    },
  },
};

export const AdvancedExample = (
  props: DelayedRenderOfChildrenwithTooltipsProps
): React.ReactElement => {
  return (
    <DelayedRenderOfChildrenwithTooltips {...props}>
      <RenderTooltipButton>Hi!</RenderTooltipButton>
      <RenderTooltipButton>There!</RenderTooltipButton>
    </DelayedRenderOfChildrenwithTooltips>
  );
};

AdvancedExample.argTypes = {
  mouseLeaveUntrigger: {
    name: "mouse leave untrigger",
    type: "boolean",
  },
};

AdvancedExample.args = {
  mouseLeaveUntrigger: false,
  placement: "auto",
};

AdvancedExample.storyName = "advanced example";

export const ElementNotFound = (): React.ReactElement => {
  const [tooltipState] = useTooltip();

  return (
    <div>
      <Button id="right">This button has the wrong ID</Button>
      <Tooltip {...tooltipState} target="wrong">
        This won&apos;t show
      </Tooltip>
    </div>
  );
};

ElementNotFound.storyName = "element not found";

export const LargePopperContent = (props: PopperProps): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);
  const portalRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      style={{ width: "100%", height: "100vh", overflow: "scroll" }}
      id="scroll"
    >
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
        <Button id="right" onClick={() => setIsOpen((open) => !open)}>
          Click to open/close
        </Button>
        <Popper
          isOpen={isOpen}
          target="right"
          noArrow
          popperStyle={{ maxWidth: "none", maxHeight: "none" }}
          portalRef={portalRef}
          {...props}
          onOpen={() => {}}
          onClose={() => {}}
        >
          <div
            style={{
              width: 600,
              height: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "pink",
            }}
          >
            <div>Large Popper</div>
          </div>
        </Popper>
      </div>
    </div>
  );
};

LargePopperContent.args = {
  placement: "auto",
};

LargePopperContent.storyName = "large popper content";

export const PreventCloseOnOutsideClickForElementWithClass = (
  props: PopperProps
): React.ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();

  return (
    <div>
      <Button className="popper-open-btn" ref={targetRef}>
        This button opens the popover
      </Button>
      <Button
        className="bcl-popper-ignore-click"
        style={{ marginLeft: "1rem" }}
      >
        This button does NOT close the popover
      </Button>
      <Popover {...popoverState} targetRef={targetRef} {...props}>
        This is a bunch of content inside the popover
      </Popover>
    </div>
  );
};

PreventCloseOnOutsideClickForElementWithClass.args = {
  placement: "bottom",
};

PreventCloseOnOutsideClickForElementWithClass.storyName =
  "prevent close on outside click for element with class";

export const PreventCloseOnOutsideClickForElementWithCustomClass = (
  props: PopperProps
): React.ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();

  return (
    <div>
      <Button className="popper-open-btn" ref={targetRef}>
        This button opens the popover
      </Button>
      <Button
        className="custom-popper-ignore-click"
        style={{ marginLeft: "1rem" }}
      >
        This button does NOT close the popover
      </Button>
      <Popover
        {...popoverState}
        targetRef={targetRef}
        ignoreCloseOnClickOutsideClassName="custom-popper-ignore-click"
        {...props}
      >
        This is a bunch of content inside the popover
      </Popover>
    </div>
  );
};

PreventCloseOnOutsideClickForElementWithCustomClass.args = {
  placement: "bottom",
};

PreventCloseOnOutsideClickForElementWithCustomClass.storyName =
  "prevent close on outside click for element with custom class";

export const PreventCloseOnAnyOutsideInteraction = (): React.ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();

  return (
    <div>
      <Button ref={targetRef}>This button toggles the popover</Button>
      <Button type="button" style={{ marginLeft: "1rem" }}>
        Click this to not close the popover
      </Button>
      <div>
        Nothing except a click on the button will open/close the popover
      </div>
      <Popover
        {...popoverState}
        targetRef={targetRef}
        placement="bottom"
        closeOnClickOutside={false}
        triggers={["click"]}
        untriggers={["click"]}
      >
        This is a bunch of content inside the popper
      </Popover>
    </div>
  );
};

PreventCloseOnAnyOutsideInteraction.storyName =
  "prevent close on any outside interaction";

export const NoCrashOnOutsideClickForElementWithEmptyIgnoreClass =
  (): React.ReactElement => {
    const [popoverState, targetRef] = usePopover<HTMLButtonElement>();

    return (
      <div>
        <Button className="popper-open-btn" ref={targetRef}>
          This button opens the popover
        </Button>
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
          isIgnoreCloseOnClickOutsideEnabled={false}
        >
          This is a bunch of content inside the popover
        </Popover>
      </div>
    );
  };

NoCrashOnOutsideClickForElementWithEmptyIgnoreClass.storyName =
  "no crash on outside click for element with empty ignore class";

export const Interactive = (props: PopperProps): React.ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <Button ref={targetRef}>This button toggles the popover</Button>
      <Popover
        {...popoverState}
        targetRef={targetRef}
        triggers={["click"]}
        untriggers={["click"]}
        {...props}
      >
        This is a bunch of content inside the popper with a{" "}
        <Button onClick={() => setClicked(true)}>button</Button>.
        <span id="button-clicked">
          {clicked ? "Button clicked." : "Button not clicked."}
        </span>
      </Popover>
    </div>
  );
};

Interactive.args = {
  placement: "auto",
  interactive: true,
};

Interactive.storyName = "interactive";

export const DelayOpenAndClose = ({
  delay,
}: {
  delay: number;
}): React.ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();

  return (
    <div>
      <Button ref={targetRef}>This button opens the popover eventually</Button>
      <Popover
        {...popoverState}
        targetRef={targetRef}
        delay={delay}
        triggers={["click"]}
        untriggers={["blur"]}
      >
        This is a bunch of content inside the popover
      </Popover>
      <InvisibleButton />
    </div>
  );
};

DelayOpenAndClose.argTypes = {
  delay: {
    type: "number",
    label: "Delay",
  },
};

DelayOpenAndClose.args = {
  delay: 2000,
};

DelayOpenAndClose.storyName = "delay open and close";

export const DelayOnlyClose = ({
  delay,
}: {
  delay: number;
}): React.ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();

  return (
    <div>
      <Button ref={targetRef}>This button opens the popover eventually</Button>
      <Popover
        {...popoverState}
        targetRef={targetRef}
        delay={[null, delay]}
        triggers={["click"]}
        untriggers={["blur"]}
      >
        This is a bunch of content inside the popover
      </Popover>
      <InvisibleButton />
    </div>
  );
};

DelayOnlyClose.argTypes = {
  delay: {
    type: "number",
    label: "Delay",
  },
};

DelayOnlyClose.args = {
  delay: 2000,
};

DelayOnlyClose.storyName = "delay only close";

export const DelayOnlyOpen = ({
  delay,
}: {
  delay: number;
}): React.ReactElement => {
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();

  return (
    <div>
      <Button ref={targetRef}>This button opens the popover eventually</Button>
      <Popover
        {...popoverState}
        targetRef={targetRef}
        delay={[delay, null]}
        triggers={["click"]}
        untriggers={["blur"]}
      >
        This is a bunch of content inside the popover
      </Popover>
      <InvisibleButton />
    </div>
  );
};

DelayOnlyOpen.argTypes = {
  delay: {
    type: "number",
    label: "Delay",
  },
};

DelayOnlyOpen.args = {
  delay: 2000,
};

DelayOnlyOpen.storyName = "delay only open";

export const ClosingOnScroll = () => {
  const [tooltipState1, targetRef1] = usePopover<HTMLButtonElement>();
  const [tooltipState2, targetRef2] = usePopover<HTMLButtonElement>();

  return (
    <div>
      <div>
        <LoremIpsum paragraphs={5} />
      </div>
      <Button ref={targetRef1}>Hover to open</Button>
      <Popover
        targetRef={targetRef1}
        triggers={["mouseenter", "click"]}
        untriggers={["mouseleave", "scroll"]}
        {...tooltipState1}
      >
        Popover 1
      </Popover>
      <div
        style={{
          height: 300,
          width: "100vw",
          margin: 50,
          overflow: "auto",
        }}
        id="internal-scroll"
      >
        <div
          style={{
            height: 500,
            width: "100vw",
          }}
        >
          <Button ref={targetRef2}>Hover to open 2</Button>
          <Popover
            targetRef={targetRef2}
            triggers={["mouseenter", "click"]}
            untriggers={["mouseleave", "scroll"]}
            {...tooltipState2}
          >
            Popover 2
          </Popover>
        </div>
      </div>
      <div>
        <LoremIpsum paragraphs={5} />
      </div>
    </div>
  );
};

ClosingOnScroll.storyName = "closing on scroll";
