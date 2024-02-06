import React from "react";
import classNames from "classnames";

import { AddImageOrDocumentProps } from "../types";

export const AddImageOrDocument = ({
  className,
  ...props
}: AddImageOrDocumentProps): React.ReactElement => (
  <svg
    {...props}
    className={classNames(["bcl-add-image-or-document", className])}
    width="75"
    height="77"
    viewBox="0 0 75 77"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="36.4476" width="38.1579" height="38.1579" rx="4" fill="white" />
    <rect
      x="41.7107"
      y="6.5791"
      width="26.3158"
      height="26.3158"
      rx="2"
      fill="#75DBE7"
    />
    <path d="M46.9739 26.3159H62.7634" stroke="#101B24" strokeWidth="2" />
    <rect
      x="36.1318"
      y="1"
      width="37.4737"
      height="37.4737"
      rx="3"
      stroke="#101B24"
      strokeWidth="2"
    />
    <rect
      x="4.86865"
      y="22.3687"
      width="48.6842"
      height="48.6842"
      rx="4"
      fill="white"
    />
    <path
      d="M24.6055 36.8423L52.625 69.737H10.3628C6.26812 69.737 3.90946 65.0844 6.32979 61.7816L24.6055 36.8423Z"
      fill="#C4F0F5"
    />
    <rect
      x="5.86865"
      y="23.3687"
      width="46.6842"
      height="46.6842"
      rx="3"
      stroke="#101B24"
      strokeWidth="2"
    />
    <circle cx="40.395" cy="34.2104" r="5.26316" fill="#75DBE7" />
    <circle
      cx="51.5791"
      cy="65.1315"
      r="10.1842"
      fill="#75DBE7"
      stroke="#101B24"
      strokeWidth="2"
    />
    <path d="M51.7434 59.2104V70.7236" stroke="#101B24" strokeWidth="2" />
    <path d="M57.5 64.9668L45.9868 64.9668" stroke="#101B24" strokeWidth="2" />
    <path
      d="M6.18445 60.3131L25.1903 36.8423L43.0266 58.5528"
      stroke="#101B24"
      strokeWidth="2"
    />
    <path d="M46.9739 13.1577H62.7634" stroke="#101B24" strokeWidth="2" />
    <path d="M46.9739 19.7368H62.7634" stroke="#101B24" strokeWidth="2" />
  </svg>
);

AddImageOrDocument.displayName = "AddImageOrDocument";
