import React, { useContext, ReactElement } from "react";
import { Button } from "@braze/beacon-core";

import { AlertModalIntentContext } from "../AlertModalIntentContext";

import { AlertModalButtonProps } from "./types";

export const AlertModalButton = (
  props: AlertModalButtonProps
): ReactElement => {
  const intent = useContext(AlertModalIntentContext);

  return <Button intent={intent} {...props} />;
};

AlertModalButton.displayName = "AlertModalButton";
