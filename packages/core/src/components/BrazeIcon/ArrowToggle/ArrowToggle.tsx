import React from "react";
import classNames from "classnames";

import { ArrowToggleProps } from "../types";

export const ArrowToggle = ({
  className,
  ...props
}: ArrowToggleProps): React.ReactElement => (
  <svg
    {...props}
    className={classNames(["bcl-arrow-toggle-icon", className])}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0Z"
        fill="#E9EBED"
      />
      <path
        d="M5.53851 12C5.54674 12.21 5.63319 12.4526 5.77718 12.6058L11.064 18.1862C11.3727 18.552 11.9665 18.5447 12.3136 18.2152C12.6606 17.8855 12.6891 17.3018 12.3397 16.9747L8.4664 12.8812H17.5806C18.0672 12.8812 18.4618 12.4866 18.4618 12C18.4618 11.5133 18.0672 11.1188 17.5806 11.1188H8.4664L12.3397 7.02522C12.6891 6.69807 12.6605 6.11193 12.3132 5.78236C11.9662 5.45279 11.3639 5.45135 11.0638 5.81367L5.777 11.3942C5.61619 11.5651 5.54068 11.7644 5.53833 12H5.53851Z"
        fill="#8F9BA2"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

ArrowToggle.displayName = "ArrowToggle";
