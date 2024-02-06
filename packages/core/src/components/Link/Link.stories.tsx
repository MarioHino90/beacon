import React from "react";
import { getIntentColor } from "@braze/beacon-styling";

import { Icon } from "../Icon";
import { Popover, usePopover } from "../Popover";
import { PopoverBody } from "../PopoverBody";

import page from "./Link.docs.mdx";

import { Link, LinkProps } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Primitives/Link",
  component: Link,
  argTypes: {
    variant: {
      mapping: {
        "No variant": undefined,
        table: "table",
        inline: "inline",
      },
      control: {
        type: "select",
        options: ["No variant", "table", "inline"],
      },
    },
    disabled: {
      type: "boolean",
    },
    target: {
      control: { type: "text" },
    },
    rel: {
      control: { type: "text" },
    },
  },
  parameters: {
    docs: { page },
  },
};

export const BasicUse = (args: LinkProps): React.ReactElement => {
  return (
    <Link {...args} href="https://www.google.com">
      Click here
    </Link>
  );
};

BasicUse.args = {
  disabled: false,
  target: "",
  rel: "",
};

BasicUse.storyName = "basic use";

export const TableVariant = (args: LinkProps): React.ReactElement => {
  return (
    <Link variant="table" {...args}>
      Click here
    </Link>
  );
};

TableVariant.args = {
  variant: "table",
  disabled: false,
  target: "",
  rel: "",
};

TableVariant.storyName = "table variant";

export const InlineVariant = (): React.ReactElement => {
  const [popoverState, targetRef] = usePopover();

  return (
    <React.Fragment>
      <Icon
        id="info-icon"
        name="info-circle"
        size="1x"
        color={getIntentColor("primary", 500)}
        ref={targetRef}
      />
      <Popover
        interactive
        {...popoverState}
        targetRef={targetRef}
        triggers={["click", "mouseenter"]}
        untriggers={["mouseleave"]}
      >
        <PopoverBody>
          Create Content Test Groups <Link variant="inline">here</Link>. Groups
          must have Content Test property enabled in order to send test
          messages.{" "}
          <Link
            variant="inline"
            target="_blank"
            showExternalLinkIcon={true}
            isCTA
          >
            Learn More
          </Link>
        </PopoverBody>
      </Popover>
    </React.Fragment>
  );
};

InlineVariant.storyName = "inline variant";

export const DisabledUse = (): React.ReactElement => {
  return <Link disabled>Click here</Link>;
};

DisabledUse.storyName = "disabled use";

export const ExternalLink = (args: LinkProps): React.ReactElement => {
  return (
    <Link {...args} href="https://www.google.com">
      External link
    </Link>
  );
};

ExternalLink.args = {
  disabled: false,
  target: "_blank",
  rel: "",
  showExternalLinkIcon: true,
};

ExternalLink.storyName = "external link";
