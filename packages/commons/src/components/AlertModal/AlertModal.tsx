import React, { ReactElement } from "react";
import classNames from "classnames";
import { Modal } from "@braze/beacon-core";

import { AlertModalIntentContext } from "../AlertModalIntentContext";

import { AlertModalProps } from "./types";

export const AlertModal = ({
  children,
  className,
  intent,
  size = "md",
  ...props
}: AlertModalProps): ReactElement => (
  <Modal
    {...props}
    className={classNames(["bcl-alert-modal", className])}
    size={size}
  >
    <AlertModalIntentContext.Provider value={intent}>
      {children}
    </AlertModalIntentContext.Provider>
  </Modal>
);

AlertModal.displayName = "AlertModal";
