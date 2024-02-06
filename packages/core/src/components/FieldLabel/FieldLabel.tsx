import React, { useRef, useEffect } from "react";
import classNames from "classnames";

import { Flex } from "../Flex";
import { HelpText } from "../HelpText";
import { StatusText } from "../StatusText";

import { FieldLabelInfoIconAndPopover } from "./FieldLabelInfoIconAndPopover";
import { StyledFieldLabel, CustomBox } from "./StyledFieldLabel";
import { FieldLabelProps } from "./types";
import { FieldLabelEnforceText } from "./FieldLabelEnforceText";

export const FieldLabel = ({
  children,
  className,
  enforce,
  formatLabel,
  helpText,
  label,
  status,
  statusText,
  boxProps,
  infoIconVariant = "primary",
  infoIconPopoverContent,
  infoIconTriggerVariant = "hover",
  controlRef,
  ...props
}: FieldLabelProps): React.ReactElement => {
  const controlRefIfNoRef: React.MutableRefObject<HTMLElement | null> =
    useRef<HTMLElement>(null);

  useEffect(() => {
    const el = document.getElementById(props.htmlFor || "");

    if (el) {
      controlRefIfNoRef.current = el;
    }
  }, [props.htmlFor]);

  return (
    <CustomBox
      boxMargin={{ bottom: "lg" }}
      {...boxProps}
      className={classNames(["bcl-field-label-container", boxProps?.className])}
    >
      {label && (
        <StyledFieldLabel
          {...props}
          className={classNames([
            "bcl-FieldLabel",
            "bcl-field-label",
            className,
          ])}
        >
          {formatLabel ? formatLabel({ label }) : label}
          <FieldLabelEnforceText enforce={enforce} />
          <FieldLabelInfoIconAndPopover
            helpIconPopoverContent={infoIconPopoverContent}
            infoIconVariant={infoIconVariant}
            infoIconTriggerVariant={infoIconTriggerVariant}
            controlRef={controlRef || controlRefIfNoRef}
          />
        </StyledFieldLabel>
      )}
      <Flex direction="column">
        {children}
        {!status && helpText && <HelpText>{helpText}</HelpText>}
        {status && statusText && (
          <StatusText status={status}>{statusText}</StatusText>
        )}
      </Flex>
    </CustomBox>
  );
};
