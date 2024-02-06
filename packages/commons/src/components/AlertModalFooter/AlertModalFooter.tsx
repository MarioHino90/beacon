import React from "react";
import { ModalFooter } from "@braze/beacon-core";

import { AlertModalFooterProps } from "./types";

export const AlertModalFooter = (
  props: AlertModalFooterProps
): React.ReactElement => <ModalFooter {...props} />;

AlertModalFooter.displayName = "AlertModalFooter";
