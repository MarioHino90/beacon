import React, { forwardRef } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconProp, IconPack } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { StyledIcon } from "./StyledIcon";
import { brazeIcons } from "./braze-icons";
import { IconProps } from "./types";

// TODO: parcel out these icons to specific components if the need arises
// This `as` chain is just so we can force library.add to accept our custom components
library.add(fas, far, fab, brazeIcons as unknown as IconPack);

export const Icon = forwardRef(
  (
    { className, name, size = "lg", color, ...props }: IconProps,
    ref: React.RefObject<HTMLSpanElement>
  ) => (
    <StyledIcon
      {...props}
      getColor={color}
      ref={ref}
      className={classNames(["bcl-Icon", "bcl-icon", className])}
    >
      <FontAwesomeIcon icon={name as IconProp} size={size} />
    </StyledIcon>
  )
);

Icon.displayName = "Icon";
