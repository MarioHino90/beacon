import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, number, text, select } from "@storybook/addon-knobs";

import { placementTypes } from "../Popper";

import docs from "./IconButton.docs.mdx";

import { IconButton, IconButtonProps } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Primitives/IconButton",
  component: IconButton,
  parameters: {
    docs: { page: docs },
  },
};

export const BasicUse = (): React.ReactElement => {
  const label = text("Tooltip label", "Label");
  const placement = select("Tooltip placement", placementTypes, "bottom");
  const [clicks, addClick] = React.useReducer(
    (clicks) => [...clicks, "click"],
    []
  );

  return (
    <div>
      <IconButton
        name={text("Icon", "cog") as IconButtonProps["name"]}
        onClick={addClick}
        muted={boolean("Muted", false)}
        size={select("Icon Size", ["lg", "sm"], undefined)}
        disabled={boolean("Disabled", false)}
        aria-label={label}
        placement={placement}
      >
        {label}
      </IconButton>
      <ul id="clicks">
        {clicks.map((click, i) => (
          <li key={i}>{click}</li>
        ))}
      </ul>
    </div>
  );
};

BasicUse.storyName = "basic use";

export const MutedUse = (): React.ReactElement => {
  const label = text("Tooltip label", "Label");

  return (
    <IconButton
      name={text("Icon", "cog") as IconButtonProps["name"]}
      onClick={action("Muted click")}
      muted
      aria-label={label}
    >
      {label}
    </IconButton>
  );
};

MutedUse.storyName = "muted use";

export const DisabledUse = (): React.ReactElement => {
  const label = text("Tooltip label", "Label");

  return (
    <IconButton
      name={text("Icon", "cog") as IconButtonProps["name"]}
      onClick={action("You should not see this")}
      disabled
      aria-label={label}
    >
      {label}
    </IconButton>
  );
};

DisabledUse.storyName = "disabled use";

export const WithDistance = (): React.ReactElement => {
  const label = text("Tooltip label", "Label");

  return (
    <IconButton
      name={text("Icon", "cog") as IconButtonProps["name"]}
      onClick={action("Click")}
      aria-label={label}
      distance={number("Distance", -5)}
    >
      {label}
    </IconButton>
  );
};

WithDistance.storyName = "with distance";

export const UsingAriaLabel = (): React.ReactElement => {
  return (
    <IconButton
      name={text("Icon", "cog") as IconButtonProps["name"]}
      onClick={action("Click")}
      aria-label="a helpful aria-label"
    >
      {text("Tooltip label", "Label")}
    </IconButton>
  );
};

UsingAriaLabel.storyName = "using aria label";

export const NoAriaLabel = (): React.ReactElement => {
  return (
    <IconButton
      name={text("Icon", "cog") as IconButtonProps["name"]}
      onClick={action("Click")}
    >
      {text("Tooltip label", "Label")}
    </IconButton>
  );
};

NoAriaLabel.storyName = "no aria label";

export const NoAriaLabelWithCompAsChild = (): React.ReactElement => {
  return (
    <IconButton
      name={text("Icon", "cog") as IconButtonProps["name"]}
      onClick={action("Click")}
    >
      <div className="inner-div">{text("Tooltip label", "Label")}</div>
    </IconButton>
  );
};

NoAriaLabelWithCompAsChild.storyName = "no aria label + component as child";
