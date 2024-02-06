import React from "react";
import classNames from "classnames";

import { AddDocumentProps } from "../types";

export const AddDocument = ({
  className,
  ...props
}: AddDocumentProps): React.ReactElement => (
  <svg
    {...props}
    className={classNames(["bcl-add-document bcl-empty-table-icon", className])}
    width="73"
    height="55"
    viewBox="0 0 73 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="path-1-inside-1" fill="white">
      <rect x="0.5" y="0.125" width="64.4661" height="46.6852" rx="1" />
    </mask>
    <rect
      x="0.5"
      y="0.125"
      width="64.4661"
      height="46.6852"
      rx="1"
      fill="white"
      stroke="#101B24"
      strokeWidth="4"
      mask="url(#path-1-inside-1)"
    />
    <path d="M6.87939 23.0833H58.5866" stroke="#101B24" strokeWidth="2" />
    <path d="M6.87939 28.9031H58.5866" stroke="#101B24" strokeWidth="2" />
    <path d="M6.87939 34.499H58.5866" stroke="#101B24" strokeWidth="2" />
    <path d="M6.87939 39.7593H58.5866" stroke="#101B24" strokeWidth="2" />
    <rect
      x="6.82349"
      y="6.35156"
      width="19.2503"
      height="5.37217"
      fill="#75DBE7"
    />
    <rect
      x="6.87939"
      y="14.2417"
      width="38.3886"
      height="3.58145"
      fill="#C4F0F5"
    />
    <circle
      cx="63.2873"
      cy="45.2082"
      r="8.2128"
      fill="#75DBE7"
      stroke="#101B24"
      strokeWidth="2"
    />
    <path d="M63.4221 40.3308V49.8146" stroke="#101B24" strokeWidth="2" />
    <path
      d="M68.1643 45.0725L58.6805 45.0725"
      stroke="#101B24"
      strokeWidth="2"
    />
  </svg>
);

AddDocument.displayName = "AddDocument";
