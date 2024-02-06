import React, { useEffect, useRef } from "react";

import { LoadedWithIcon } from "../LoadedWithIcon";
import { LoadingIconWithGradient } from "../LoadingIconWithGradient";
import { ButtonContentProps } from "../types";

import { StyledButtonContent } from "./StyledButtonContent";

export const ButtonContent = ({
  children,
  loadingMessage,
  loadingState,
  intent,
  size,
  variant,
}: ButtonContentProps): React.ReactElement => {
  // keep track of whether it's the first render of the component
  // we use this to ensure that the opacity is set to 1 when the
  // component first appears onscreen
  const firstRender = useRef(true);

  // when the loading state is changed, then it's no longer the
  // first render so set it to false
  useEffect(() => {
    if (loadingState && loadingState !== "idle") {
      firstRender.current = false;
    }
  }, [loadingState]);

  // when it's loading, display loading icon
  if (loadingState === "loading") {
    return (
      <>
        <LoadingIconWithGradient
          intent={intent}
          variant={variant}
          size={size}
        />
        {loadingMessage}
      </>
    );
  }

  // when loading state is errored out, display the error icon
  if (loadingState === "error") {
    return <LoadedWithIcon name="times" />;
  }

  return (
    <>
      {loadingState === "success" && <LoadedWithIcon name="check" isAnimated />}
      <StyledButtonContent
        isAnimated={!firstRender.current && loadingState === "idle"}
        firstRender={firstRender.current}
      >
        {React.Children.map(children, (child) =>
          typeof child === "string" ? <span>{child}</span> : child
        )}
      </StyledButtonContent>
    </>
  );
};
