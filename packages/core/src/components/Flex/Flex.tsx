import React from "react";
import classNames from "classnames";

import { FlexProps } from "./types";
import { StyledFlex } from "./StyledFlex";

export const Flex = React.forwardRef(
  (
    { className, style, ...props }: FlexProps,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    React.useEffect(() => {
      if (!style) {
        return;
      }

      const isSpacingPresent = Object.keys(style).some((key) => {
        return key.includes("margin") || key.includes("padding");
      });

      if (isSpacingPresent && process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn(
          "WARNING: It looks like you supplied a 'margin' and/or 'padding' attribute to the 'Flex' component. To ensure that margins and padding are applied according to design guidelines, please use the 'FlexBox' component instead."
        );
      }
    }, [style]);

    return (
      <StyledFlex
        {...props}
        className={classNames(["bcl-flex", className])}
        ref={ref}
        style={style}
      />
    );
  }
);

Flex.displayName = "Flex";
