import React, { useContext } from "react";
import classNames from "classnames";

import { Button } from "../Button";
import { IntentContext } from "../BannerAlert/IntentContext";

import { BannerAlertActionProps } from "./types";

export const BannerAlertAction = ({
  intent: intentOverride,
  className,
  ...props
}: BannerAlertActionProps): React.ReactElement => {
  const intent = useContext(IntentContext);

  return (
    <Button
      className={classNames("bcl-banner-alert-action", className)}
      variant="primary"
      size="sm"
      intent={intentOverride || intent}
      {...props}
    />
  );
};

BannerAlertAction.displayName = "BannerAlertAction";
