import React from "react";

import { Button } from "../Button";

import { Annotation } from "./Annotation";
import docs from "./Annotation.docs.mdx";
import { AnnotationProps } from "./types";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Overlay/Annotation",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const BasicUse = ({
  label,
  variant,
}: AnnotationProps): React.ReactElement => {
  return (
    <div>
      <Annotation label={label} variant={variant}>
        <Button>This button is annotated</Button>
      </Annotation>
    </div>
  );
};

BasicUse.argTypes = {
  label: {
    control: { type: "text" },
  },
  variant: {
    options: ["info", "warning", "error"],
    control: { type: "select" },
  },
};

BasicUse.args = {
  label: "...with a tooltip",
  variant: "info",
};

BasicUse.storyName = "basic use";

export const DisabledUse = ({
  disabled,
  label,
  variant,
}: AnnotationProps): React.ReactElement => {
  return (
    <div>
      <Annotation disabled={disabled} label={label} variant={variant}>
        <Button>This button is NOT annotated by default</Button>
      </Annotation>
    </div>
  );
};

DisabledUse.argTypes = {
  label: {
    control: { type: "text" },
    label: "Label",
  },
  variant: {
    options: ["info", "warning", "error"],
    control: { type: "select" },
  },
  disabled: {
    control: { type: "boolean" },
    label: "Disabled",
  },
};

DisabledUse.args = {
  label: "...with a tooltip",
  variant: "info",
  disabled: true,
};

DisabledUse.storyName = "disabled use";
