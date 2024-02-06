// note: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-onchange.md says this rule is invalid except for IE 10/11
/* eslint-disable jsx-a11y/no-onchange */
import React, { useState } from "react";

import { Button } from "../Button";
import { Modal } from "../Modal";
import { ModalHeading } from "../ModalHeading";
import { ModalBody } from "../ModalBody";
import { placementTypes, PlacementType } from "../Popper";
import { LoremIpsum } from "../LoremIpsum";

import page from "./Tooltip.docs.mdx";

import { Tooltip, useTooltip, TooltipProps } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Overlay/Tooltip",
  component: Tooltip,
  parameters: { docs: { page } },
};

const noop = () => {
  // do nothing
};

const defaultProps: TooltipProps<HTMLButtonElement> = {
  onOpen: noop,
  onClose: noop,
};

export const BasicUse = (args: TooltipProps<HTMLButtonElement>) => {
  const [tooltipState, targetRef] = useTooltip<HTMLButtonElement>();
  const [placement, setPlacement] = useState<PlacementType>("bottom");

  return (
    <>
      <select
        className="placement-select"
        value={placement}
        onChange={(e) => setPlacement(e.target.value as PlacementType)}
      >
        {placementTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "25vh",
        }}
      >
        <Button className="tooltip-focus" ref={targetRef}>
          Focus/hover to open
        </Button>
        <Tooltip
          {...args}
          {...tooltipState}
          targetRef={targetRef}
          placement={placement}
        >
          Tooltip
        </Tooltip>
      </div>
    </>
  );
};

BasicUse.storyName = "basic use";

const BasicUseArgs: TooltipProps<HTMLButtonElement> = {
  ...defaultProps,
  distance: 8,
  skidding: 0,
  interactive: false,
};

BasicUse.args = BasicUseArgs;

export const TriggerOnlyOnClick = () => {
  const [tooltipState, targetRef] = useTooltip<HTMLButtonElement>();

  return (
    <div>
      <Button ref={targetRef}>Click to open/close</Button>
      <Tooltip
        targetRef={targetRef}
        triggers={["click"]}
        untriggers={["click"]}
        placement="bottom"
        {...tooltipState}
      >
        Tooltip
      </Tooltip>
    </div>
  );
};

TriggerOnlyOnClick.storyName = "trigger only on click";

export const TriggerOnlyOnFocus = () => {
  const [tooltipState, targetRef] = useTooltip<HTMLButtonElement>();

  return (
    <div>
      <Button ref={targetRef}>Focus to open</Button>
      <Tooltip
        targetRef={targetRef}
        triggers={["focus"]}
        untriggers={["blur"]}
        placement="bottom"
        {...tooltipState}
      >
        Tooltip
      </Tooltip>
    </div>
  );
};

TriggerOnlyOnFocus.storyName = "trigger only on focus";

export const TriggerOnlyOnHover = () => {
  const [tooltipState, targetRef] = useTooltip<HTMLButtonElement>();

  return (
    <div>
      <Button ref={targetRef}>Hover to open</Button>
      <Tooltip
        targetRef={targetRef}
        triggers={["mouseenter"]}
        untriggers={["mouseleave"]}
        placement="bottom"
        {...tooltipState}
      >
        Tooltip
      </Tooltip>
    </div>
  );
};

TriggerOnlyOnHover.storyName = "trigger only on hover";

export const UseWithDomId = () => {
  const [tooltipState] = useTooltip();

  return (
    <div>
      <Button id="default-button">Focus/hover to open</Button>
      <Tooltip {...tooltipState} target="default-button" placement="bottom">
        Tooltip
      </Tooltip>
    </div>
  );
};

UseWithDomId.storyName = "use with DOM id";

export const ModalUse = () => {
  const [tooltipState, targetRef] = useTooltip<HTMLButtonElement>();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Click to Open</Button>
      <Modal zIndex={3200} isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeading>See a Tooltip!</ModalHeading>
        <ModalBody>
          <Button ref={targetRef}>Hover to open</Button>
          <Tooltip
            targetRef={targetRef}
            triggers={["mouseenter"]}
            untriggers={["mouseleave"]}
            placement="right"
            {...tooltipState}
          >
            Tooltip
          </Tooltip>
        </ModalBody>
      </Modal>
    </div>
  );
};

ModalUse.storyName = "modal use";

export const ClosingOnScroll = () => {
  const [tooltipState1, targetRef1] = useTooltip<HTMLButtonElement>();
  const [tooltipState2, targetRef2] = useTooltip<HTMLButtonElement>();

  return (
    <div>
      <LoremIpsum paragraphs={5} />
      <Button ref={targetRef1}>Hover to open</Button>
      <Tooltip targetRef={targetRef1} {...tooltipState1}>
        Tooltip 1
      </Tooltip>
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
          <Tooltip targetRef={targetRef2} {...tooltipState2}>
            Tooltip 2
          </Tooltip>
        </div>
      </div>
      <LoremIpsum paragraphs={5} />
    </div>
  );
};

ClosingOnScroll.storyName = "closing on scroll";
