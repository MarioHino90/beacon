import React from "react";
import { useI18nNamespace } from "@braze/beacon-translations";

import { EnforceOptionalOrRequired } from "./StyledFieldLabel";
import { FieldLabelProps } from "./types";

export const FieldLabelEnforceText = ({
  enforce,
}: Pick<FieldLabelProps, "enforce">): React.ReactElement | null => {
  const { t } = useI18nNamespace("beacon-field-label");

  if (enforce === "optional") {
    return (
      <EnforceOptionalOrRequired data-testid="optional-field">
        {" "}
        {t("optional-field-notice", "(Optional)")}
      </EnforceOptionalOrRequired>
    );
  }

  if (enforce === "required") {
    return (
      <EnforceOptionalOrRequired data-testid="required-field">
        {" "}
        {t("required-field-notice", "(Required)")}
      </EnforceOptionalOrRequired>
    );
  }

  return null;
};
