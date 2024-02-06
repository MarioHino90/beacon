import React from "react";

import { Icon } from "../Icon";

import { StyledFieldLabelInfoIconButton } from "./StyledFieldLabelInfoIconButton";
import { StyledFieldLabelInfoIconButtonProps } from "./types";

export const FieldLabelInfoIconButton = React.forwardRef(
  (
    props: StyledFieldLabelInfoIconButtonProps,
    ref: React.RefObject<HTMLButtonElement>
  ): React.ReactElement => {
    return (
      <StyledFieldLabelInfoIconButton
        {...props}
        type="button"
        ref={ref}
        style={{ zIndex: 1 }}
        className="bcl-field-label-info-icon-button"
      >
        <Icon name="info-circle" />
      </StyledFieldLabelInfoIconButton>
    );
  }
);

FieldLabelInfoIconButton.displayName = "FieldLabelInfoIconButton";
