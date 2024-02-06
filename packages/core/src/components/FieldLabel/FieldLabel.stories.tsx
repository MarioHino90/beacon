import React, { useRef } from "react";

import { Input } from "../Input";
import { BodyText } from "../BodyText";
import { RadioButton } from "../RadioButton";

import page from "./FieldLabel.docs.mdx";
import {
  infoIconPopoverTextContent,
  infoIconPopoverReactContent,
} from "./storybookHelpers";

import { FieldLabel, FieldLabelProps } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Forms/FieldLabel",
  component: FieldLabel,
  parameters: {
    docs: { page },
  },
};

const InvisibleButton = () => (
  <button style={{ color: "transparent" }}>invisible button</button>
);

export const BasicUse = ({
  tooltipDisplay,
  ...args
}: FieldLabelProps & {
  tooltipDisplay: "text" | "react" | undefined;
}): React.ReactElement => {
  const infoIconText =
    tooltipDisplay === "text" ? (
      "Can be used across push, email, and in-app messages to send a rendered copy of the message."
    ) : tooltipDisplay === "react" ? (
      <BodyText size="sm">
        <p>
          Create Content Test Groups{" "}
          <a
            href="http://example.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            here
          </a>
          . Groups must have Content Test property enabled in order to send test
          messages.
        </p>

        <p>
          <a
            href="http://example.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Learn more about Content Test Groups
          </a>
        </p>
      </BodyText>
    ) : null;

  return (
    <div style={{ display: "flex", placeContent: "center", padding: 300 }}>
      <FieldLabel
        htmlFor="basic-use-text-field"
        {...args}
        infoIconPopoverContent={infoIconText}
      >
        <Input id="basic-use-text-field" />
      </FieldLabel>
    </div>
  );
};

BasicUse.args = {
  label: "Name",
};

BasicUse.parameters = {
  controls: { exclude: ["infoIconText"] },
};

BasicUse.argTypes = {
  enforce: {
    options: ["none", "optional", "required"],
    mapping: {
      optional: "optional",
      required: "required",
      none: undefined,
    },
    control: {
      type: "select",
      labels: {
        optional: "optional",
        required: "required",
        none: "none",
      },
    },
  },
  status: {
    options: ["none", "success", "danger"],
    mapping: {
      success: "success",
      danger: "danger",
      none: undefined,
    },
    control: {
      type: "select",
      labels: {
        success: "success",
        danger: "danger",
        none: "none",
      },
    },
  },
  tooltipDisplay: {
    options: ["text", "react"],
    mapping: {
      text: "text",
      react: "react",
    },
    control: {
      type: "select",
      labels: {
        text: "text content",
        react: "React content",
      },
    },
  },
};

BasicUse.storyName = "basic use";

export const Accessibility = (): React.ReactElement => {
  return (
    <FieldLabel htmlFor="body-text-example" label="Form Control">
      <BodyText id="body-text-example">
        {"<"}Your-component-here using id: &quot;hello world&quot; {"/>"}
      </BodyText>
    </FieldLabel>
  );
};

Accessibility.storyName = "accessibility";

export const HelperText = (args: FieldLabelProps): React.ReactElement => {
  const [value, setValue] = React.useState("000000000000-0000-0000-00000000");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <FieldLabel {...args} htmlFor="help-text-example-text-field">
      <Input
        id="help-text-example-text-field"
        value={value}
        onChange={handleChange}
      />
    </FieldLabel>
  );
};

HelperText.args = {
  label: "GUID",
  helpText: "Remember, `GUID` does not rhyme with `squid`",
};

HelperText.storyName = "helper text";

export const SuccessText = (args: FieldLabelProps): React.ReactElement => {
  return (
    <FieldLabel
      {...args}
      helpText="this should not appear"
      htmlFor="success-text-field-example"
      status="success"
    >
      <Input id="success-text-field-example" value="yes, I am!" />
    </FieldLabel>
  );
};

SuccessText.args = {
  label: "Are you doing a great job?",
  statusText: "You did it, great job!",
};

SuccessText.storyName = "success text";

export const ErrorText = (args: FieldLabelProps): React.ReactElement => {
  return (
    <FieldLabel {...args} helpText="this should not appear" status="danger">
      <Input
        id="error-text-field-example"
        value="email address [at] domain dot com"
        invalid
      />
    </FieldLabel>
  );
};

ErrorText.args = {
  label: "Email",
  statusText: "Valid email addresses include the @ sign",
};

ErrorText.storyName = "error text";

export const Optional = (): React.ReactElement => {
  return (
    <FieldLabel htmlFor="basic-use-text-field" label="Name" enforce="optional">
      <Input id="basic-use-text-field" />
    </FieldLabel>
  );
};

Optional.storyName = "optional";

export const Required = (): React.ReactElement => {
  return (
    <FieldLabel htmlFor="basic-use-text-field" label="Name" enforce="required">
      <Input id="basic-use-text-field" />
    </FieldLabel>
  );
};

Required.storyName = "required";

export const StackedFields = (args: FieldLabelProps): React.ReactElement => {
  return (
    <div>
      <FieldLabel {...args} htmlFor="stacked-text-field-1" label="Name">
        <Input id="stacked-text-field-1" invalid />
      </FieldLabel>
      <FieldLabel htmlFor="stacked-text-field-2" label="Hat size">
        <Input id="stacked-text-field-2" value="59 1/2" />
      </FieldLabel>
      <FieldLabel
        label="Coordinates"
        helpText="Degrees, minutes, seconds (DMS)"
        htmlFor="stacked-text-field-3"
      >
        <Input id="stacked-text-field-3" value={`40°45'10.5"N 73°59'43.0"W`} />
      </FieldLabel>
    </div>
  );
};

StackedFields.args = {
  status: "danger",
  statusText: "You must include your name",
};

StackedFields.storyName = "stacked fields";

export const Formatlabel = (): React.ReactElement => {
  return (
    <FieldLabel
      htmlFor="basic-use-text-field"
      formatLabel={({ label }) => {
        return (
          <>
            <i>{label}</i>{" "}
            <span style={{ color: "red" }}>specially formatted!</span>
          </>
        );
      }}
      label="Name"
    >
      <Input id="basic-use-text-field" />
    </FieldLabel>
  );
};

Formatlabel.storyName = "formatLabel";

export const InfoIconPopover = (): React.ReactElement => {
  return (
    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: 300,
        flexDirection: "column",
      }}
    >
      <FieldLabel
        label="text-based info popover"
        htmlFor="info-icon-text-text-field"
        infoIconPopoverContent={infoIconPopoverTextContent}
      >
        <Input id="info-icon-text-text-field" placeholder="simple help text" />
      </FieldLabel>
      <FieldLabel
        infoIconVariant="muted"
        label="react-based info popover (click to trigger)"
        htmlFor="info-icon-react-text-field"
        infoIconPopoverContent={infoIconPopoverReactContent}
        infoIconTriggerVariant="click"
      >
        <Input
          id="info-icon-react-text-field"
          placeholder="react field label help text"
        />
      </FieldLabel>
    </div>
  );
};

InfoIconPopover.storyName = "info icon popover";

export const InfoIconPopoverWithAmbiguousChildren = (): React.ReactElement => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div
      style={{
        display: "flex",
        placeContent: "center",
        padding: 200,
        flexDirection: "column",
      }}
    >
      <InvisibleButton />
      <FieldLabel
        label="using ref"
        infoIconPopoverContent={infoIconPopoverReactContent}
        controlRef={ref}
      >
        <span>
          This has ambiguous children and must have a ref to the control passed
          in
        </span>
        <RadioButton name="first" value="1" ref={ref}>
          Item 1
        </RadioButton>
        <RadioButton name="first" value="2">
          Item 2
        </RadioButton>
        <RadioButton name="first" value="3">
          Item 2
        </RadioButton>
      </FieldLabel>
      <FieldLabel
        label="using htmlFor"
        htmlFor="info-icon-react-text-field-2"
        infoIconPopoverContent={infoIconPopoverReactContent}
      >
        <span>This has ambiguous children and no ref but can use htmlFor</span>
        <Input id="info-icon-react-text-field-2" placeholder="using htmlFor" />
      </FieldLabel>
      <FieldLabel
        label="broken example"
        infoIconPopoverContent={infoIconPopoverReactContent}
      >
        <span>
          This has ambiguous children and no ref and no htmlFor - keyboard
          accessibility is broken!
        </span>
        <Input placeholder="broken!" />
      </FieldLabel>
    </div>
  );
};

InfoIconPopoverWithAmbiguousChildren.storyName =
  "info icon popover with ambiguous children";
