import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

import { Button } from "../Button";

import page from "./RadioButton.docs.mdx";

import { RadioButton, RadioButtonProps } from ".";

interface ConnectedRadioButtonProps extends RadioButtonProps {
  defaultChecked?: boolean;
  disabled: boolean;
  invalid: boolean;
}

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Forms/RadioButton",
  component: RadioButton,
  parameters: {
    docs: { page },
  },
};

const ConnectedRadioButton = ({
  defaultChecked = false,
  disabled,
  invalid,
  ...props
}: ConnectedRadioButtonProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (event) => {
    setChecked(!checked);

    action("change")(event);
  };

  return (
    <RadioButton
      {...props}
      disabled={disabled}
      invalid={!checked && invalid}
      checked={checked}
      onChange={handleChange}
    />
  );
};

export const BasicUse = (args: ConnectedRadioButtonProps) => {
  return <ConnectedRadioButton defaultChecked name="hi" {...args} />;
};

BasicUse.storyName = "basic use";

BasicUse.args = {
  disabled: false,
  label: "Send as soon as campaign is launched",
  invalid: false,
  value: "hi",
};

export const WithChildren = ({ label, ...args }: ConnectedRadioButtonProps) => {
  return (
    <ConnectedRadioButton defaultChecked name="whatsup" {...args}>
      {label}
    </ConnectedRadioButton>
  );
};

WithChildren.storyName = "with children";

WithChildren.args = {
  disabled: false,
  label: "Send as soon as campaign is launched",
  invalid: false,
  value: "whatsup",
};

export const WithHelpText = (args: ConnectedRadioButtonProps) => {
  return <ConnectedRadioButton name="hello" {...args} />;
};

WithHelpText.storyName = "with help text";

WithHelpText.args = {
  disabled: false,
  label: "Send at a designated time",
  helpText: "Choose an optimal time for users to receive this message",
  invalid: false,
  value: "hello",
};

export const InvalidEntry = (args: ConnectedRadioButtonProps) => {
  return <ConnectedRadioButton {...args} name="bye" invalid />;
};

InvalidEntry.storyName = "invalid entry";

InvalidEntry.args = {
  disabled: false,
  label: "Send at a designated time",
  helpText: "Choose an optimal time for users to receive this message",
  errorText: "This must be selected",
  invalid: false,
  value: "bye",
};

export const UpdateProgrammaticallyLater = (args: RadioButtonProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <RadioButton
        {...args}
        checked={checked}
        name="programmatic"
        onChange={(e) => setChecked(!!(e.target as any).value)}
      />
      <Button
        variant="primary"
        onClick={() => setChecked((checked) => !checked)}
      >
        Toggle radio button
      </Button>
      <div>{checked ? "should be checked" : "should not be checked"}</div>
    </div>
  );
};

UpdateProgrammaticallyLater.storyName = "update programmatically later";

UpdateProgrammaticallyLater.args = {
  label: "Send as soon as campaign is launched",
  value: "programmatic",
};
