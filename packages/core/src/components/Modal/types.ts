import React from "react";

import { ModalContextInterface } from "../ModalContext";

export type IconType = "warning";

export interface StyledModalBackdropProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** z-index value for the component */
  zIndex?: number;
}

export interface ModalBackdropProps extends StyledModalBackdropProps {}

export interface StyledModalContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Required<ModalContextInterface> {}

export interface ModalContentProps extends StyledModalContentProps {
  /** indicates whether component should be visible */
  isOpen?: boolean;
  /** toggle function that toggles the modal */
  toggle?: (event?: React.MouseEvent | React.KeyboardEvent) => void;
  /** when clicking outside, class name to ignore for toggle */
  outsideClickIgnoreClass?: string;
}

export interface StyledModalDialogProps
  extends React.HTMLAttributes<HTMLElement> {
  /** indicates whether component should be visible */
  isOpen?: boolean;
  /** z-index value for the component */
  zIndex: number;
}

export interface ModalDialogProps extends StyledModalDialogProps {}

export interface StyledModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** indicates whether component should be visible */
  isOpen?: boolean;
}

export interface ModalProps
  extends StyledModalProps,
    Omit<ModalContentProps, "ref" | "size">,
    Partial<Pick<ModalContentProps, "size">> {
  /** focuses on the modal wrapper when true */
  autoFocus?: boolean;
  /** indicates that keyboard commands should be listened to by the `Modal` */
  keyboard?: boolean;
  /** DOM node override to use portal into */
  node?: React.RefObject<HTMLDivElement>;
  /** z-index value for the component and its children */
  zIndex?: number;
}
