import React from "react";
import classNames from "classnames";

import { InlineInputViewModeProps } from "../types";
import { BodyText } from "../../BodyText";
import { Icon } from "../../Icon";

import { StyledInlineInputViewMode } from "./StyledInlineInputViewMode";

export const InlineInputViewMode = ({
  children,
  className,
  placeholder,
  value,
  ...props
}: InlineInputViewModeProps): React.ReactElement => {
  return (
    <StyledInlineInputViewMode
      {...props}
      className={classNames(["bcl-inline-input-view-mode", className])}
      tabIndex={0}
    >
      {children || (
        <BodyText
          className="inline-input_view-mode_value"
          variant={placeholder && !value ? "hint" : undefined}
        >
          {value || placeholder}
        </BodyText>
      )}
      <Icon
        className="inline-input_view-mode_icon"
        size="1x"
        name="pencil-alt"
      />
    </StyledInlineInputViewMode>
  );
};

InlineInputViewMode.displayName = "InlineInputViewMode";
