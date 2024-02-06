import React from "react";

import { Button } from "../Button";

import page from "./UncontrolledTooltip.docs.mdx";

import { UncontrolledTooltip } from ".";

// this is used to allow cypress tests to focus away from the popper without using realPress("Tab")
// it's invisible because it doesn't affect the story at all from an enduser perspective
const InvisibleButton = (): React.ReactElement => {
  return <button style={{ color: "transparent" }}>invisible button</button>;
};

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Overlay/UncontrolledTooltip",
  component: UncontrolledTooltip,
  parameters: {
    docs: { page },
  },
};

export const BasicUse = (): React.ReactElement => {
  return (
    <>
      <UncontrolledTooltip placement="bottom" label="Tooltip">
        <Button className="focus-button">Focus/hover to open</Button>
      </UncontrolledTooltip>
      <InvisibleButton />
    </>
  );
};

BasicUse.storyName = "basic use";

export const TriggerOnlyOnClick = (): React.ReactElement => {
  return (
    <UncontrolledTooltip
      triggers={["click"]}
      untriggers={["click"]}
      placement="bottom"
      label="Tooltip"
    >
      <Button>Click to open/close</Button>
    </UncontrolledTooltip>
  );
};

TriggerOnlyOnClick.storyName = "trigger only on click";

export const TriggerOnlyOnFocus = (): React.ReactElement => {
  return (
    <UncontrolledTooltip
      triggers={["focus"]}
      untriggers={["blur"]}
      placement="bottom"
      label="Tooltip"
    >
      <Button>Click to focus</Button>
    </UncontrolledTooltip>
  );
};

TriggerOnlyOnFocus.storyName = "trigger only on focus";

export const TriggerOnlyOnHover = (): React.ReactElement => {
  return (
    <UncontrolledTooltip
      triggers={["mouseenter"]}
      placement="bottom"
      label="Tooltip"
    >
      <Button>Hover to open</Button>
    </UncontrolledTooltip>
  );
};

TriggerOnlyOnHover.storyName = "trigger only on hover";
