import React from "react";
import classNames from "classnames";

import { PreviewProps } from "../types";

export const Preview = ({
  className,
  ...props
}: PreviewProps): React.ReactElement => (
  <svg
    {...props}
    className={classNames(["bcl-preview-icon", className])}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 11.5862C19 12.069 16.8315 16.1724 12 16.1724C7.16849 16.1724 5 11.8276 5 11.5862C5 11.3448 7.16849 7 12 7C16.8315 7 19 11.1034 19 11.5862Z"
      stroke="#2E3C47"
    />
    <circle cx="12" cy="11.5862" r="2.65517" stroke="#2E3C47" />
  </svg>
);

Preview.displayName = "Preview";
