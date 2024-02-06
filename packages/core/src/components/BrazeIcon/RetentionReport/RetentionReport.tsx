import React from "react";
import classNames from "classnames";

import { RetentionReportProps } from "../types";

export const RetentionReport = ({
  className,
  ...props
}: RetentionReportProps): React.ReactElement => (
  <svg
    {...props}
    className={classNames(["bcl-retention-report", className])}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <rect
        x="0.799988"
        y="2"
        width="22.425"
        height="4"
        fill="white"
        stroke="black"
        strokeLinejoin="round"
      />
      <rect
        x="0.799988"
        y="10"
        width="15.6"
        height="4"
        fill="white"
        stroke="black"
        strokeLinejoin="round"
      />
      <rect
        x="0.799988"
        y="18"
        width="7.8"
        height="4"
        fill="white"
        stroke="black"
        strokeLinejoin="round"
      />
      <g style={{ mixBlendMode: "multiply" }}>
        <rect x="0.799988" y="2" width="3.9" height="4" fill="#B5EDFF" />
      </g>
      <g style={{ mixBlendMode: "multiply" }}>
        <rect x="0.799988" y="10" width="3.9" height="4" fill="#B5EDFF" />
      </g>
      <g style={{ mixBlendMode: "multiply" }}>
        <rect x="0.799988" y="18" width="3.9" height="4" fill="#B5EDFF" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

RetentionReport.displayName = "RetentionReport";
