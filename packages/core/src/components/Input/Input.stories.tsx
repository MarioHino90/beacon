import React, { useState } from "react";

import { FieldLabel, FieldLabelProps } from "../FieldLabel";

import docs from "./Input.docs.mdx";

import { Input, InputProps } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Forms/Input",
  component: Input,
  parameters: {
    docs: {
      page: docs,
    },
  },
  argTypes: {
    defaultValue: {
      control: { type: "text" },
    },
  },
};

export const BasicUse = ({
  defaultValue,
  placeholder,
}: InputProps): React.ReactElement => {
  const [value, setState] = React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        defaultValue={defaultValue}
      />
      <div id="basic-value">{value}</div>
    </div>
  );
};

BasicUse.args = {
  defaultValue: "",
  placeholder: "Enter text in me!",
};

BasicUse.storyName = "basic use";

export const WithDefaultValue = ({
  defaultValue,
}: InputProps): React.ReactElement => {
  return <Input placeholder="Enter text in me!" defaultValue={defaultValue} />;
};

WithDefaultValue.args = {
  defaultValue: "",
};

WithDefaultValue.storyName = "with default value";

/**
 * This story is used to verify that when the user uncontrollably re-renders the component
 * by passing in a new ref or a new onChange every render, it still preserves the
 * typing state
 */
export const UncontrolledRerendering = ({
  defaultValue,
}: InputProps): React.ReactElement => {
  const [value, setValue] = useState("");

  const handleChange = () => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
  };

  return (
    <div>
      <Input
        placeholder="Enter text in me!"
        defaultValue={defaultValue}
        ref={React.createRef()}
        onChange={handleChange()}
      />
      <div id="rerender-value">{value}</div>
    </div>
  );
};

UncontrolledRerendering.args = {
  defaultValue: "",
};

UncontrolledRerendering.storyName =
  "uncontrolled rendering (re-render should preserve typing)";

export const Disabled = (): React.ReactElement => (
  <Input placeholder="Enter text in me!" disabled />
);

Disabled.storyName = "disabled";

export const Invalid = ({
  statusText,
  label,
}: FieldLabelProps): React.ReactElement => {
  return (
    <FieldLabel
      label={label}
      htmlFor="textInput"
      status="danger"
      statusText={statusText}
    >
      <Input placeholder="Enter text in me!" invalid />
    </FieldLabel>
  );
};

Invalid.storyName = "invalid";

Invalid.args = {
  label: "Texty Input",
  statusText: "Please enter a valid value in this field",
};

export const FullWidth = (): React.ReactElement => {
  return <Input placeholder="Enter text in me!" fullWidth />;
};

FullWidth.storyName = "full width";

export const VerticalSize = (): React.ReactElement => {
  return (
    <div>
      <Input placeholder="Enter text in me! (md)" vSize="md" />
      <br />
      <br />
      <Input placeholder="Enter text in me! (sm)" vSize="sm" />
    </div>
  );
};

VerticalSize.storyName = "vertical size";

export const Label = (): React.ReactElement => {
  return (
    <FieldLabel label="Texty Input" htmlFor="textInput">
      <Input id="textInput" placeholder="Enter text in me!" />
    </FieldLabel>
  );
};

Label.storyName = "label";

export const TypeNumber = (): React.ReactElement => {
  return <div>See &apos;NumberInput&apos; component</div>;
};

TypeNumber.storyName = "type: number";

export const TypeDate = (args: InputProps): React.ReactElement => {
  return <Input {...args} />;
};

TypeDate.storyName = "type: date";

TypeDate.args = {
  step: 2,
  min: "1999-12-31",
  max: "2019-12-18",
  type: "date",
  placeholder: "Enter a date in me!",
};
