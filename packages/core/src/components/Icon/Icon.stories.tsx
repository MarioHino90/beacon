import React from "react";
import { ComponentMeta } from "@storybook/react";
import { getIntentColor } from "@braze/beacon-styling";

import { Button } from "../Button";
import { UncontrolledTooltip } from "../UncontrolledTooltip";

import page from "./Icon.docs.mdx";
import { brazeIcons } from "./braze-icons";

import { Icon, IconProps } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Primitives/Icon",
  component: Icon,
  parameters: {
    docs: { page },
    controls: { exclude: ["color", "getColor"] },
  },
} as ComponentMeta<typeof Icon>;

export const BasicUse = (args: IconProps): React.ReactElement => {
  return <Icon {...args} />;
};

BasicUse.args = { name: "cog" };

export const WithColor = (): React.ReactElement => {
  return (
    <div>
      <Icon name="home" size="sm" />
      <span> is where the </span>
      <Icon name="heart" color={getIntentColor("danger", 500)} size="lg" /> is
    </div>
  );
};

export const ButtonWithIcons = (): React.ReactElement => {
  return (
    <UncontrolledTooltip label="previous">
      <Button>
        <Icon name="arrow-circle-left" />
        <span>Click Me!</span>
      </Button>
    </UncontrolledTooltip>
  );
};

export const UsingIconPacks = (): React.ReactElement => {
  return (
    <ul>
      <li>
        Icon with object declaration:{" "}
        <Icon name={{ prefix: "fas", iconName: "braille" }} />
      </li>
      <li>
        Icon that is a brand icon: <Icon name={["fab", "github"]} />
      </li>
    </ul>
  );
};

interface BrazeIconArgs extends IconProps {
  filter: string;
}

export const BrazeIconList = (args: BrazeIconArgs): React.ReactElement => {
  return (
    <div>
      {Object.keys(brazeIcons)
        .filter((key) => key.indexOf(args.filter) > -1)
        .map((key) => (
          <li key={key}>
            <code>{brazeIcons[key].iconName}</code>:{" "}
            <Icon name={brazeIcons[key].iconName} />
          </li>
        ))}
    </div>
  );
};

BrazeIconList.args = { filter: "" };
