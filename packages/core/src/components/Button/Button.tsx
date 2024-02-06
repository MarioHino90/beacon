import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import { ButtonLoadingState } from "@braze/beacon-hooks";
import { useI18nNamespace } from "@braze/beacon-translations";

import { ButtonProps } from "./types";
import { StyledButton } from "./StyledButton";
import { ButtonContent } from "./ButtonContent";

const useDefaultAriaLabel = (
  loadingState: ButtonLoadingState | undefined
): string | undefined => {
  const { t } = useI18nNamespace("beacon-button");

  if (!loadingState) {
    return undefined;
  }

  switch (loadingState) {
    case "success":
      return t("button-click-success-aria-label", "Button click success");
    case "error":
      return t("button-click-error-aria-label", "Button click error");
    case "idle":
    case "loading":
      return undefined;
  }
};

const InnerButton = React.forwardRef(
  (
    {
      children,
      className,
      disabled,
      getAriaLabel,
      intent = "info",
      loadingState,
      loadingMessage,
      size = "lg",
      variant = "primary",
      type = "button",
      ...props
    }: ButtonProps,
    ref: React.RefObject<HTMLButtonElement>
  ) => {
    const defaultAriaLabel = useDefaultAriaLabel(loadingState);

    return (
      <StyledButton
        {...props}
        ref={ref}
        data-is-loading={loadingState ? loadingState === "loading" : false}
        data-loading-state={loadingState ?? "idle"}
        aria-live={loadingState ? "polite" : undefined}
        aria-label={
          props["aria-label"] ??
          (getAriaLabel ? getAriaLabel(loadingState) : defaultAriaLabel)
        }
        disabled={
          disabled || (loadingState ? loadingState !== "idle" : undefined)
        }
        className={classNames([
          "bcl-button",
          `bcl-button-${variant}`,
          className,
        ])}
        intent={intent}
        size={size}
        type={type}
        variant={variant}
      >
        <ButtonContent
          intent={intent}
          loadingMessage={loadingMessage}
          loadingState={loadingState}
          variant={variant}
          size={size}
        >
          {children}
        </ButtonContent>
      </StyledButton>
    );
  }
);

InnerButton.displayName = "InnerButton";

const DisabledWrapper = styled.div`
  display: inline-flex;
`;

export const Button = React.forwardRef(
  (props: ButtonProps, ref: React.RefObject<HTMLButtonElement>) => {
    if (props.disabled) {
      const castedRef = ref as unknown as React.RefObject<HTMLDivElement>;

      // this allows tooltips to work without modification when the button is disabled
      return (
        <DisabledWrapper
          ref={castedRef}
          className="bcl-button__disabled-wrapper"
        >
          <InnerButton {...props} />
        </DisabledWrapper>
      );
    }

    return <InnerButton {...props} ref={ref} />;
  }
);

Button.displayName = "Button";
