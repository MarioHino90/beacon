import React, { useCallback } from "react";
import classNames from "classnames";

import { InlineInputEditModeProps } from "../types";
import { Box } from "../../Box";
import { Button } from "../../Button";
import { Flex } from "../../Flex";
import { Icon } from "../../Icon";
import { Input } from "../../Input";
import { UncontrolledTooltip } from "../../UncontrolledTooltip";

import { StyledInlineInputEditMode } from "./StyledInlineInputEditMode";

export const InlineInputEditMode = ({
  cancelButtonRef,
  className,
  inputId,
  inputRef,
  invalid,
  onChange,
  onSaveClick,
  onCancelClick,
  onClearClick,
  saveButtonRef,
  value,
  vSize = "md",
  ...props
}: InlineInputEditModeProps): React.ReactElement | null => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event, "change");
    },
    [onChange]
  );

  return (
    <StyledInlineInputEditMode
      className={classNames(["bcl-inline-input-edit-mode", className])}
      vSize={vSize}
      isValueDefined={!!value}
    >
      <Flex inline>
        <Box boxMargin={{ right: "sm" }} className="inline-input-container">
          <Input
            {...props}
            id={inputId}
            value={value}
            vSize={vSize}
            ref={inputRef}
            invalid={invalid}
            onChange={handleChange}
          />
          <Icon
            className="inline-input-clear-icon"
            name="times-circle"
            size="1x"
            onClick={onClearClick}
          />
        </Box>

        <Flex className="inline-input-button-container">
          <Box inline boxMargin={{ right: "sm" }}>
            <UncontrolledTooltip label="Save" targetRef={saveButtonRef}>
              <Button
                className="inline-input-save-button"
                variant="primary"
                onClick={onSaveClick}
                disabled={invalid}
              >
                <Icon name="check" />
              </Button>
            </UncontrolledTooltip>
          </Box>

          <UncontrolledTooltip label="Cancel" targetRef={cancelButtonRef}>
            <Button
              className="inline-input-cancel-button"
              variant="secondary"
              onClick={onCancelClick}
              disabled={invalid}
            >
              <Icon name="times" />
            </Button>
          </UncontrolledTooltip>
        </Flex>
      </Flex>
    </StyledInlineInputEditMode>
  );
};

InlineInputEditMode.displayName = "InlineInputEditMode";
