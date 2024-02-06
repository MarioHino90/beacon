import React from "react";
import { SpacingType } from "@braze/beacon-theme";

import { FieldLabel } from "../FieldLabel";
import { Input } from "../Input";
import { PanelBody, insetSizes } from "../PanelBody";
import { PanelHeader } from "../PanelHeader";

import page from "./Panel.docs.mdx";

import { Panel, PanelProps } from ".";

const textAlignOptions = ["center", "left", "right"];
const textAlignMap = {
  center: "center",
  left: "left",
  right: "right",
};

const insetSizeMap = insetSizes.reduce(
  (
    all: { [size: string]: SpacingType },
    size
  ): { [size: string]: SpacingType } => {
    all[size] = size;

    return all;
  },
  {}
);

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Content Display/Panel",
  component: Panel,
  parameters: {
    docs: { page },
  },
  argTypes: {
    inset: {
      mapping: insetSizeMap,
      control: {
        type: "select",
        options: insetSizes,
        labels: insetSizeMap,
      },
    },
    textAlign: {
      mapping: textAlignMap,
      control: {
        type: "select",
        options: textAlignOptions,
        labels: textAlignMap,
      },
    },
  },
};

export const BasicUse = (args: PanelProps): React.ReactElement => {
  return (
    <Panel>
      <PanelHeader>This is a panel</PanelHeader>
      <PanelBody {...args}>Hello world!</PanelBody>
    </Panel>
  );
};

BasicUse.args = {
  inset: "xl",
};

BasicUse.storyName = "basic use";

export const NoHeader = (): React.ReactElement => {
  return (
    <Panel>
      <PanelBody>Hello world!</PanelBody>
    </Panel>
  );
};

NoHeader.storyName = "no header";

export const Stacking = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Panel>
        <PanelHeader>This is a panel</PanelHeader>
        <PanelBody>Hello world!</PanelBody>
      </Panel>
      <Panel>
        <PanelHeader>This is another panel</PanelHeader>
        <PanelBody>Hello world!</PanelBody>
      </Panel>
      <Panel>
        <PanelHeader>Yet another panel!</PanelHeader>
        <PanelBody>Hello world again!</PanelBody>
      </Panel>
    </React.Fragment>
  );
};

Stacking.storyName = "stacking";

export const TextAlignment = (args: PanelProps): React.ReactElement => {
  return (
    <Panel>
      <PanelHeader>This is a panel</PanelHeader>
      <PanelBody {...args}>Hello world!</PanelBody>
    </Panel>
  );
};

TextAlignment.args = {
  textAlign: "left",
};

TextAlignment.storyName = "text alignment";

export const LightBackground = (): React.ReactElement => {
  return (
    <Panel background="light">
      <PanelHeader>This is a panel</PanelHeader>
      <PanelBody>Hello world!</PanelBody>
    </Panel>
  );
};

LightBackground.storyName = "light background";

export const LightBackgroundWithFormElements = (): React.ReactElement => {
  return (
    <Panel background="light">
      <PanelHeader>This is a panel</PanelHeader>
      <PanelBody>
        <FieldLabel htmlFor="input-1" label="Input 1">
          <Input id="input-1" />
        </FieldLabel>
        <FieldLabel htmlFor="input-2" label="Input 2">
          <Input id="input-2" />
        </FieldLabel>
        <FieldLabel htmlFor="input-3" label="Input 3">
          <Input id="input-3" />
        </FieldLabel>
      </PanelBody>
    </Panel>
  );
};

LightBackgroundWithFormElements.storyName =
  "light background with form elements";
