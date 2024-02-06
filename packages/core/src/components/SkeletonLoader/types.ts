import { HTMLAttributes, ReactNode } from "react";

export type SkeletonLoaderVariant =
  | "text"
  | "checkbox"
  | "image"
  | "image-round";

export interface SkeletonLoaderProps extends HTMLAttributes<HTMLElement> {
  /** child elements to be rendered inside the component tree */
  children?: ReactNode | ReactNode[];
  /** optional variants for easy use */
  variant?: SkeletonLoaderVariant;
}
