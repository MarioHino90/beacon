import React, { useRef } from "react";

import { FieldLabel, FieldLabelProps } from "../FieldLabel";
import { Input } from "../Input";
import { FlexBox } from "../FlexBox";

import page from "./CopyField.docs.mdx";

import { CopyField, CopyFieldProps } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Forms/CopyField",
  component: CopyField,
  parameters: {
    docs: { page },
  },
};

interface Args
  extends CopyFieldProps,
    Pick<FieldLabelProps, "helpText" | "label"> {}

export const BasicUse = (args: Args): React.ReactElement => {
  const { label, helpText, ...props } = args;

  return (
    <React.Fragment>
      <FieldLabel label={label} helpText={helpText}>
        <CopyField {...props} />
      </FieldLabel>
      <FieldLabel label="Paste your copied snippet below!">
        <Input className="paste-field" />
      </FieldLabel>
    </React.Fragment>
  );
};

BasicUse.storyName = "basic use";

BasicUse.args = {
  label: "Label",
  helpText: "Some help text",
  showTextInButton: true,
  vSize: "md",
  zIndex: 1051,
  value: "4ba9f231-d578-4663-ae43-4cffa08d9a9d",
};

export const WithNoTextInButton = (
  args: CopyFieldProps
): React.ReactElement => {
  return (
    <FieldLabel label="Label">
      <CopyField {...args} />
    </FieldLabel>
  );
};

WithNoTextInButton.args = {
  showTextInButton: false,
  vSize: "md",
  zIndex: 1051,
  value: "4ba9f231-d578-4663-ae43-4cffa08d9a9d",
};

WithNoTextInButton.storyName = "with no text in button";

export const WithDifferentSizes = (): React.ReactElement => {
  return (
    <React.Fragment>
      <FieldLabel label="Medium">
        <CopyField
          value="4ba9f231-d578-4663-ae43-4cffa08d9a9d"
          showTextInButton={false}
          vSize="md"
        />
      </FieldLabel>
      <FieldLabel label="Small">
        <CopyField
          value="4ba9f231-d578-4663-ae43-4cffa08d9a9d"
          showTextInButton={false}
          vSize="sm"
          zIndex={1051}
        />
      </FieldLabel>
    </React.Fragment>
  );
};

WithDifferentSizes.storyName = "with different sizes";

export const WithDifferentCopyText = (): React.ReactElement => {
  return (
    <FieldLabel label="Medium">
      <CopyField
        value="4ba9f231-d578-4663-ae43-4cffa08d9a9d"
        showTextInButton={false}
        copyTooltipText="Copy API identifier"
        zIndex={1051}
      />
    </FieldLabel>
  );
};

WithDifferentCopyText.storyName = "with different copy text";

export const WithCopyToClipboardOptions = (): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const HTML_MIME_TYPE = "text/html";

  return (
    <FieldLabel label="Medium">
      <FieldLabel label={`Copy ${HTML_MIME_TYPE}`}>
        <CopyField
          value="4ba9f231-d578-4663-ae43-4cffa08deeee"
          showTextInButton={false}
          copyTooltipText="Copy API identifier"
          copyOptions={{
            debug: true,
            format: HTML_MIME_TYPE,
            onCopy: (e: DataTransfer) => {
              if (ref.current) {
                ref.current.innerText = e.items[0].type;
              }
            },
          }}
          zIndex={1051}
        />
      </FieldLabel>

      <FieldLabel label="Content Mime Type">
        <FlexBox
          ref={ref}
          className="bcl-copy-field-stories--copied-mime-type"
          style={{ minHeight: "50px", minWidth: "50px", border: "solid 1px" }}
        />
      </FieldLabel>
    </FieldLabel>
  );
};

WithCopyToClipboardOptions.storyName = "with copy to clipboard options";
