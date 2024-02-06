import React from "react";
import classNames from "classnames";

import { CampaignComparisonProps } from "../types";

export const CampaignComparison = ({
  className,
  ...props
}: CampaignComparisonProps): React.ReactElement => (
  <svg
    {...props}
    className={classNames(["bcl-campaign-comparison", className])}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="8.99976"
      width="14"
      height="14"
      fill="white"
      stroke="black"
      strokeLinejoin="round"
    />
    <rect
      x="7"
      y="1"
      width="16"
      height="16"
      rx="8"
      fill="white"
      stroke="black"
      strokeLinejoin="round"
    />
    <path
      d="M7 8.99976H15V16.9998V16.9998C10.5817 16.9998 7 13.418 7 8.99976V8.99976Z"
      fill="#B5EDFF"
      stroke="black"
      strokeLinejoin="round"
    />
  </svg>
);

CampaignComparison.displayName = "CampaignComparison";
