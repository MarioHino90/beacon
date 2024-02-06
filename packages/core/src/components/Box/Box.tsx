import React, { useEffect } from "react";
import classNames from "classnames";

import { BoxProps } from "./types";
import { StyledBox } from "./StyledBox";

export const Box = React.forwardRef(
  (
    { className, style, ...props }: BoxProps,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    useEffect(() => {
      if (!style) {
        return;
      }

      if (
        (style.display === "flex" || style.display === "inline-flex") &&
        process.env.NODE_ENV !== "production"
      ) {
        // eslint-disable-next-line no-console
        console.warn(
          `WARNING: It looks like you supplied a 'display: ${style.display};' attribute to the 'Box' component. To ensure that vendor prefixing is applied correctly, please use the 'FlexBox' component instead.`
        );
      }
    }, [style]);

    return (
      <StyledBox
        {...props}
        className={classNames(["bcl-box", className])}
        ref={ref}
        style={style}
      />
    );
  }
);

Box.displayName = "Box";
