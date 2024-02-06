import React, { useCallback, useRef, useState, useEffect } from "react";
import classNames from "classnames";
import { css } from "styled-components";
import copyToClipboard from "copy-to-clipboard";
import { useI18nNamespace } from "@braze/beacon-translations";

import { Button, ButtonProps } from "../Button";
import { Icon } from "../Icon";
import { Input } from "../Input";
import { VerticalInputSize } from "../InputGroupContext";
import { Tooltip, useTooltip } from "../Tooltip";

import { CopyFieldProps } from "./types";
import { StyledCopyField } from "./StyledCopyField";

/**
 * Map vertical size of input to button size
 * @param vSize vertical size prop for input field
 * @returns `size` prop to be passed to `Button`
 */
const mapVSizeToButtonSize = (
  vSize: VerticalInputSize | undefined
): ButtonProps["size"] | undefined => {
  switch (vSize) {
    case "sm":
      return "sm";
    case "md":
    default:
      return "lg";
  }
};

const mapVSizeToIconSize = (
  vSize: VerticalInputSize | undefined
): string | undefined => {
  switch (vSize) {
    case "sm":
      return "14px";
    case "md":
    default:
      return "16px";
  }
};

const pulseCss = css`
  animation: pulse 600ms ease-in-out;
`;

export const CopyField = ({
  containerClassName,
  copyTooltipText: userSuppliedTooltipText,
  onCopyClick,
  onInputClick,
  showTextInButton = true,
  zIndex,
  value,
  vSize,
  copyOptions,
  ...props
}: CopyFieldProps): React.ReactElement | null => {
  const { t } = useI18nNamespace("beacon-copy-field");
  const inputRef = useRef<HTMLInputElement>(null);
  const [tooltipState, buttonRef] = useTooltip<HTMLButtonElement>();
  const [copied, setCopied] = useState(false);
  const copyTooltipText = userSuppliedTooltipText || t("copy-tooltip", "Copy");

  /**
   * Helper function to make text selection reusable
   */
  const handleSelect = useCallback(() => {
    // select contents of the input field
    inputRef.current?.select();

    // For mobile devices
    inputRef.current?.setSelectionRange(0, 99999);
  }, []);

  /**
   * Function to handle click on the input element
   * by selecting all the text when user clicks in it
   * @param event mouse event on the input element
   */
  const handleInputClick = useCallback(
    (event: React.MouseEvent<HTMLInputElement>) => {
      // first, select contents of the input field
      handleSelect();

      // fire input click event, if defined
      onInputClick?.(event);
    },
    [handleSelect, onInputClick]
  );

  /**
   * Function to handle click on the copy button by
   * copying the text in the input (i.e. 'value' prop)
   * to clipboard
   * @param event mouse event on the button element
   */
  const handleCopyClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      // first, select contents of the input field
      handleSelect();

      // now copy the selection
      copyToClipboard(inputRef.current?.value as string, copyOptions);

      // next, focus back on the button rather than selecting text
      event.currentTarget.focus();

      // finally, set copied state to true
      setCopied(true);

      // fire button click event, if defined
      onCopyClick?.(event);
    },
    [handleSelect, onCopyClick, copyOptions]
  );

  /**
   * automatically reset copied state to false
   * after timeout
   */
  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = setTimeout(() => {
      setCopied(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [copied, setCopied]);

  return (
    <StyledCopyField
      className={classNames(["bcl-copy-field", containerClassName])}
      showTextInButton={showTextInButton}
      zIndex={zIndex}
    >
      <Input
        {...props}
        ref={inputRef}
        onClick={handleInputClick}
        value={value}
        vSize={vSize}
      />
      <Button
        onClick={handleCopyClick}
        ref={buttonRef}
        size={mapVSizeToButtonSize(vSize)}
      >
        {copied ? (
          <Icon name="check" />
        ) : (
          <>
            <Icon
              style={{ fontSize: mapVSizeToIconSize(vSize) }}
              name={["far", "clone"]}
            />
            {showTextInButton && <span>Copy</span>}
          </>
        )}
      </Button>
      <Tooltip
        {...tooltipState}
        popperStyledCss={css`
          z-index: ${zIndex ? zIndex + 1 : "auto"};
          ${copied ? pulseCss : undefined}
        `}
        targetRef={buttonRef}
        placement="bottom"
        closeOnClickOutside={false}
      >
        {copied
          ? t("copied-to-clipboard", "Copied to Clipboard")
          : copyTooltipText}
      </Tooltip>
    </StyledCopyField>
  );
};

CopyField.displayName = "CopyField";
