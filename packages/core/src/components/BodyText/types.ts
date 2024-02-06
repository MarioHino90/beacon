import { HTMLAttributes, ElementType } from "react";
import { FontFamilyType, FontWeightType } from "@braze/beacon-theme";

export type BodyTextSizes = "sm" | "md" | "label";

export type BodyTextVariants =
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "hint";

export type BodyTextDecorations = "underline" | "line-through";

export interface BodyTextProps extends Partial<StyledBodyTextProps> {
  /**
   * DOM id of the **target** input element; is used to focus on the input when the label is clicked (only used when `as="label"` prop is passed) */
  htmlFor?: string;
}

export interface StyledBodyTextProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * what the component should be set as */
  as?: ElementType;
  /**
   * font-family that should be used when rendering text */
  fontFamily?: FontFamilyType;
  /**
   * font-weight that should be used when rendering text */
  fontWeight?: FontWeightType;
  /**
   * size of the body text */
  size: BodyTextSizes;
  /**
   * color variant of body text */
  variant?: BodyTextVariants;
  /**
   * indicates that the text should be italicized */
  italic?: boolean;
  /**
   * indicates that specific decoration should be applied to text-decoration */
  decoration?: BodyTextDecorations;
}
