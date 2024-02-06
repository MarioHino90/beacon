/**
 * @fileoverview a component that handles the heading UI for an alert modal
 */
import React, { useContext, ReactElement } from "react";
import { Box, Flex, ModalHeading } from "@braze/beacon-core";

import { IconCircle } from "../IconCircle";
import { AlertModalIntentContext } from "../AlertModalIntentContext";

import { AlertModalHeadingProps } from "./types";

export const AlertModalHeading = ({
  children,
  ...props
}: AlertModalHeadingProps): ReactElement => {
  const intent = useContext(AlertModalIntentContext);

  return (
    <ModalHeading {...props}>
      <Flex inline>
        <IconCircle intent={intent} />
        <Box boxMargin={{ left: "lg" }}>{children}</Box>
      </Flex>
    </ModalHeading>
  );
};

AlertModalHeading.displayName = "AlertModalHeading";
