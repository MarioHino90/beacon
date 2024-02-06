import React, { useState } from "react";

import page from "./Switch.docs.mdx";
import { Switch } from "./Switch";
import { SwitchProps } from "./types";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Primitives/Switch",
  component: Switch,
  parameters: {
    docs: { page },
  },
  argTypes: {
    label: {
      type: "text",
    },
    disabled: {
      type: "boolean",
    },
  },
};

interface ArgsType extends Omit<SwitchProps, "data-testid"> {}

export const BasicUse = (props: ArgsType) => {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <Switch
        checked={checked}
        onChange={() => setChecked(!checked)}
        data-testid="a-switch-to-select-in-tests"
        {...props}
      />
      <pre>
        <code>checked: </code>
        <code className="checked-value">{JSON.stringify(checked)}</code>
      </pre>
    </>
  );
};

BasicUse.args = {
  label: "Two Factor Authentication",
  disabled: false,
};

BasicUse.storyName = "basic use";

export const DisabledUse = ({ disabled }) => {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <div>
        <Switch
          className="2fa-switch"
          checked={checked}
          disabled={disabled}
          onChange={() => setChecked(!checked)}
          label="Two Factor Authentication"
        />
        <Switch
          checked={!checked}
          disabled={disabled}
          onChange={() => setChecked(!checked)}
          label="SAML Authentication"
        />
      </div>
      <pre>
        <code>checked: </code>
        <code className="checked-value">{JSON.stringify(checked)}</code>
      </pre>
    </div>
  );
};

DisabledUse.args = {
  disabled: true,
};

DisabledUse.storyName = "disabled use";

export const UseWithChildren = (props: ArgsType) => {
  const [checked, setChecked] = useState(true);

  return (
    <Switch
      checked={checked}
      onChange={() => setChecked(!checked)}
      aria-label="Crunchy Toasts"
      {...props}
    >
      <span
        style={{
          padding: "4px",
          border: "1px dashed purple",
          color: "purple",
        }}
      >
        Crunchy Toasts
      </span>
    </Switch>
  );
};

UseWithChildren.args = {};

UseWithChildren.storyName = "use with children";

export const UseWithoutLabelOrChildren = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);

  return (
    <ul className="alt-aria-labels">
      <li>
        <Switch
          checked={checked1}
          onChange={() => setChecked1(!checked1)}
          aria-label="No Label Switch"
        />
      </li>
      <li>
        <Switch checked={checked2} onChange={() => setChecked2(!checked2)}>
          using children
        </Switch>
      </li>
    </ul>
  );
};

UseWithoutLabelOrChildren.args = {};

UseWithoutLabelOrChildren.storyName = "use with children";
