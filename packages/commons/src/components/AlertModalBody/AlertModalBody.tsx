import React from "react";
import { ModalBody } from "@braze/beacon-core";

import { AlertModalBodyProps } from "./types";

export const AlertModalBody = (
  props: AlertModalBodyProps
): React.ReactElement => <ModalBody {...props} />;

AlertModalBody.displayName = "AlertModalBody";
