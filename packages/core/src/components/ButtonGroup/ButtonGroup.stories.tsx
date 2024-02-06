import React from "react";
import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Annotation } from "../Annotation";
import { Button } from "../Button";

import page from "./ButtonGroup.docs.mdx";

import { ButtonGroup } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Primitives/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    docs: { page },
    controls: { include: ["primaryContent", "secondaryContent"] },
  },
} as ComponentMeta<typeof ButtonGroup>;

interface Args {
  primaryContent: string;
  secondaryContent: string;
}

const defaultArgs: Args = {
  primaryContent: "Primary",
  secondaryContent: "Secondary",
};

export const LeftAligned2Buttons = ({
  primaryContent,
  secondaryContent,
}: Args): React.ReactElement => {
  return (
    <ButtonGroup>
      <Button
        variant="primary"
        intent="info"
        size="lg"
        onClick={action("primary click")}
      >
        {primaryContent}
      </Button>
      <Button
        variant="secondary"
        intent="info"
        size="lg"
        onClick={action("secondary click")}
      >
        {secondaryContent}
      </Button>
    </ButtonGroup>
  );
};

LeftAligned2Buttons.storyName = "Left aligned (2 buttons)";

LeftAligned2Buttons.args = defaultArgs;

export const LeftAligned3Buttons = (): React.ReactElement => {
  return (
    <ButtonGroup>
      <Button
        variant="primary"
        intent="info"
        size="lg"
        onClick={action("primary click")}
      >
        Create Segment
      </Button>
      <Button
        variant="secondary"
        intent="info"
        size="lg"
        onClick={action("secondary click")}
      >
        Create Campaign
      </Button>
      <Button
        variant="quaternary"
        intent="info"
        size="lg"
        onClick={action("quaternary click")}
      >
        More...
      </Button>
    </ButtonGroup>
  );
};

LeftAligned3Buttons.storyName = "Left aligned (3 buttons)";

export const RightAligned3Buttons = ({
  primaryContent,
  secondaryContent,
}: Args): React.ReactElement => {
  return (
    <ButtonGroup>
      <ButtonGroup aligner side="left">
        <Button
          variant="quaternary"
          intent="info"
          size="lg"
          onClick={action("quaternary click")}
        >
          Don&apos;t Save
        </Button>
      </ButtonGroup>
      <ButtonGroup aligner side="right">
        <Button
          variant="secondary"
          intent="info"
          size="lg"
          onClick={action("secondary click")}
        >
          {secondaryContent}
        </Button>
        <Button
          variant="primary"
          intent="info"
          size="lg"
          onClick={action("primary click")}
        >
          {primaryContent}
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
};

RightAligned3Buttons.storyName = "Right aligned (3 buttons)";

RightAligned3Buttons.args = {
  primaryContent: "Confirm",
  secondaryContent: "Keep Editing",
};

export const VerticalAligned2Buttons = ({
  primaryContent,
  secondaryContent,
}: Args): React.ReactElement => {
  return (
    <ButtonGroup direction="column">
      <Button
        variant="secondary"
        intent="info"
        size="lg"
        onClick={action("secondary click")}
      >
        {secondaryContent}
      </Button>
      <Button
        variant="primary"
        intent="info"
        size="lg"
        onClick={action("primary click")}
      >
        {primaryContent}
      </Button>
    </ButtonGroup>
  );
};

VerticalAligned2Buttons.storyName = "Vertical aligned (2 buttons)";

VerticalAligned2Buttons.args = defaultArgs;

export const VerticalAligned3Buttons = ({
  primaryContent,
  secondaryContent,
}: Args): React.ReactElement => {
  return (
    <ButtonGroup direction="column">
      <Button
        variant="quaternary"
        intent="info"
        size="lg"
        onClick={action("quaternary click")}
      >
        Don&apos;t Save
      </Button>
      <Button
        variant="secondary"
        intent="info"
        size="lg"
        onClick={action("secondary click")}
      >
        {secondaryContent}
      </Button>
      <Button
        variant="primary"
        intent="info"
        size="lg"
        onClick={action("primary click")}
      >
        {primaryContent}
      </Button>
    </ButtonGroup>
  );
};

VerticalAligned3Buttons.storyName = "Vertical aligned (3 buttons)";

VerticalAligned3Buttons.args = defaultArgs;

export const WithAnnotation = ({
  primaryContent,
  secondaryContent,
}: Args): React.ReactElement => {
  return (
    <ButtonGroup>
      <ButtonGroup aligner side="left">
        <Button
          variant="quaternary"
          intent="info"
          size="lg"
          onClick={action("quaternary click")}
        >
          Don&apos;t Save
        </Button>
      </ButtonGroup>
      <ButtonGroup aligner side="right">
        <Button
          variant="secondary"
          intent="info"
          size="lg"
          onClick={action("secondary click")}
        >
          {secondaryContent}
        </Button>
        <Annotation label="some annotation" placement="bottom" variant="error">
          <Button
            variant="primary"
            intent="info"
            size="lg"
            onClick={action("primary click")}
          >
            {primaryContent}
          </Button>
        </Annotation>
      </ButtonGroup>
    </ButtonGroup>
  );
};

WithAnnotation.storyName = "With annotation";

WithAnnotation.args = {
  primaryContent: "Confirm",
  secondaryContent: "Keep Editing",
};
