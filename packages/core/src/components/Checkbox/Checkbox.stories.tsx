import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import page from "./Checkbox.docs.mdx";
import { CheckboxProps } from "./types";

import { Checkbox } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Forms/Checkbox",
  component: Checkbox,
  parameters: {
    docs: { page },
    controls: { exclude: ["checked", "onChange"] },
  },
} as ComponentMeta<typeof Checkbox>;

export const BasicUse = (args: CheckboxProps): React.ReactElement => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);

    action("change")(event);
  };

  return (
    <>
      <Checkbox {...args} checked={checked} onChange={handleChange}>
        My checkbox
      </Checkbox>
      <pre>
        <code>checked: </code>
        <code className="checked-value">{JSON.stringify(checked)}</code>
      </pre>
    </>
  );
};

BasicUse.args = { id: "some-id" };

export const IndeterminateUse = (args: CheckboxProps): React.ReactElement => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);

    action("change")(event);
  };

  return (
    <Checkbox {...args} checked={checked} onChange={handleChange}>
      My other checkbox
    </Checkbox>
  );
};

IndeterminateUse.args = { id: "indeterminate-use", indeterminate: true };

export const DisabledUse = (args: CheckboxProps): React.ReactElement => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);

    action("change")(event);
  };

  return (
    <>
      <Checkbox {...args} checked={checked} onChange={handleChange}>
        My checkbox
      </Checkbox>
      <pre>
        <code>checked: </code>
        <code className="checked-value">{JSON.stringify(checked)}</code>
      </pre>
    </>
  );
};

DisabledUse.args = { id: "disabled-id", disabled: true };

export const FocusStyling = (): React.ReactElement => {
  return (
    <div>
      <div style={{ marginBottom: "0.5rem" }}>
        <Checkbox id="tab-check-1" onChange={action("change")}>
          Tab through...
        </Checkbox>
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <Checkbox id="tab-check-2" onChange={action("change")}>
          these checkboxes...
        </Checkbox>
      </div>
      <div>
        <Checkbox id="tab-check-3" onChange={action("change")}>
          to see styling.
        </Checkbox>
      </div>
    </div>
  );
};

export const InvalidState = (args: CheckboxProps): React.ReactElement => {
  return (
    <Checkbox {...args} onChange={action("change")}>
      An invalid checkbox
    </Checkbox>
  );
};

InvalidState.args = {
  id: "invalid-id",
  invalid: true,
  errorText: "This checkbox is invalid.",
};

export const InvalidStateNoMessage = (
  args: CheckboxProps
): React.ReactElement => {
  return (
    <Checkbox {...args} onChange={action("change")}>
      An invalid checkbox
    </Checkbox>
  );
};

InvalidStateNoMessage.args = {
  id: "invalid-id",
  invalid: true,
  invalidCheckboxOnly: true,
};

export const WithHelpText = (args: CheckboxProps): React.ReactElement => {
  return (
    <Checkbox {...args} onChange={action("change")}>
      checkbox with help text.
    </Checkbox>
  );
};

WithHelpText.args = { id: "helptext-id", helpText: "this is some helper text" };

export const NoId = (): React.ReactElement => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(!checked);

    action("change")(event);
  };

  return (
    <Checkbox checked={checked} onChange={handleChange}>
      This checkbox has no <code>id</code> passed in. Click me to toggle the
      checkbox.
    </Checkbox>
  );
};
