import React from "react";
import classNames from "classnames";

import { FunnelReportProps } from "../types";

export const FunnelReport = ({
  className,
  ...props
}: FunnelReportProps): React.ReactElement => (
  <svg
    {...props}
    className={classNames(["bcl-funnel-report", className])}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <rect
        x="0.599976"
        y="2.49976"
        width="22.8"
        height="19"
        fill="white"
        stroke="black"
        strokeLinejoin="round"
      />
      <rect
        x="0.599976"
        y="2.49976"
        width="7.6"
        height="6.65"
        fill="#B5EDFF"
        stroke="black"
        strokeLinejoin="round"
      />
      <rect
        x="0.599976"
        y="9.1499"
        width="7.6"
        height="5.7"
        fill="#B5EDFF"
        stroke="black"
        strokeLinejoin="round"
      />
      <rect
        x="0.599976"
        y="14.8501"
        width="7.6"
        height="6.65"
        fill="#B5EDFF"
        stroke="black"
        strokeLinejoin="round"
      />
      <rect
        x="8.20001"
        y="2.49976"
        width="7.6"
        height="6.65"
        fill="#B5EDFF"
        stroke="black"
        strokeLinejoin="round"
      />
      <rect
        x="8.20001"
        y="9.1499"
        width="7.6"
        height="5.7"
        fill="white"
        stroke="black"
        strokeLinejoin="round"
      />
      <rect
        x="8.20001"
        y="14.8501"
        width="7.6"
        height="6.65"
        fill="white"
        stroke="black"
        strokeLinejoin="round"
      />
      <rect
        x="15.8"
        y="2.49976"
        width="7.6"
        height="6.65"
        fill="#B5EDFF"
        stroke="black"
        strokeLinejoin="round"
      />
      <rect
        x="15.8"
        y="9.1499"
        width="7.6"
        height="5.7"
        fill="white"
        stroke="black"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

FunnelReport.displayName = "FunnelReport";
