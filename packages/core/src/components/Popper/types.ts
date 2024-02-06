import {
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";

export type AllowedTriggers = "click" | "focus" | "mouseenter";

export type AllowedUnTriggers = "blur" | "click" | "mouseleave" | "scroll";

export type PlacementType =
  | "auto"
  | "top-start"
  | "top"
  | "top-end"
  | "right-start"
  | "right"
  | "right-end"
  | "bottom-end"
  | "bottom"
  | "bottom-start"
  | "left-end"
  | "left"
  | "left-start";

export type TipVariantType = "light" | "dark";

export type DelayArray = [number | null, number | null];

export type DelayType = DelayArray | number;

export type PopperEventType<E> =
  | React.MouseEvent<E>
  | React.FocusEvent<E>
  | Event;

export interface BaseStyledPopperProps<E = HTMLElement>
  extends React.HTMLAttributes<E> {
  /** indicates that the popper can be hovered/clicked/focused/etc. into */
  interactive?: boolean;
  /** left offset of the Popper */
  left: number;
  /** desired placement of Popper relative to target */
  placement?: PlacementType;
  /** selects the appearance of the tip to fit different use cases */
  tipVariant: TipVariantType;
  /** top offset of the Popper */
  top: number;
  /** z-index for the component and its subcomponents */
  zIndex?: number;
  /** indicates that the arrow pointing to the target should not be rendered */
  noArrow?: boolean;
  /** the dimensions of the target, once calculated. This is used to place the arrow pointing at the target */
  targetDimensions?: DOMRect;
  /** the dimensions of the popper, once calculated. This is used to place the arrow pointing at the target */
  popperDimensions?: DOMRect;
}

export interface PopperContextInterface<E = HTMLElement, P = HTMLDivElement> {
  /** indicates that the popper should be closed when a user clicks outside the target or the popper (if interactive) */
  closeOnClickOutside?: boolean;
  /** the className that should cause an element containing it to be ignored when determining whether to close popper */
  ignoreCloseOnClickOutsideClassName?: string;
  /** indicates that the ignore close on outside click behavior using specific classNames is enabled */
  isIgnoreCloseOnClickOutsideEnabled?: boolean;
  /** determines if the children inside the `Popper` should be rendered */
  isOpen?: boolean;
  /** indicates the amount of time, if any, to delay opening and/or closing the popper by */
  delay?: DelayType;
  /** indicates the distance that the popper should have from its target */
  distance?: number;
  /** indicates how far offset the popper should be along the main axis of its target */
  skidding?: number;
  /** function to call when the tooltip should be opened */
  onOpen: (e?: PopperEventType<E>) => void;
  /** function to call when the tooltip should be closed */
  onClose: (e?: PopperEventType<E>) => void;
  /** ref of Portal inside which Popper will be rendered */
  portalRef?: React.RefObject<P>;
  /** desired target component's DOM id */
  target?: string;
  /** desired target component's ref object; takes precedence over 'target' */
  targetRef?: React.RefObject<E>;
  /** array containing desired trigger(s) for popper on behavior */
  triggers?: AllowedTriggers[];
  /** array containing desired trigger(s) for popper off behavior */
  untriggers?: AllowedUnTriggers[];
  /** z-index for the component and its subcomponents */
  zIndex?: number;
  /** indicates that the popper can be hovered/clicked/focused/etc. into */
  interactive?: boolean;
  /** desired placement of Popper relative to target */
  placement?: PlacementType;
  /** selects the appearance of the tip to fit different use cases */
  tipVariant?: TipVariantType;
  /** indicates that the arrow pointing to the target should not be rendered */
  noArrow?: boolean;
  /** if placement is undefined, the default placement to use when the popover can render without truncating on a viewport boundary */
  defaultPlacement?: PlacementType;
}

export interface PopperContextProviderProps<E = HTMLElement>
  extends PopperContextInterface<E> {
  /** child elements to be rendered inside the component tree */
  children?: React.ReactNode | React.ReactNode[];
}

export interface PopperRendererProps
  extends Omit<StyledPopperProps, "tipVariant" | "top" | "left"> {
  /** children props, including the render props option */
  children?:
    | React.ReactNode
    | React.ReactNode[]
    | ((renderProps) => React.ReactNode | React.ReactNode[]);
  /** style object override to be passed to the parent popper component */
  popperStyle?: React.CSSProperties;
}

export interface PopperManagerRenderProps {
  activePlacement: PlacementType;
}

export interface PopperManagerProps extends PopperRendererProps {}

export interface StyledPopperProps<
  E = HTMLElement,
  // eslint-disable-next-line @typescript-eslint/ban-types
  T extends Record<string, unknown> = {}
> extends BaseStyledPopperProps<E> {
  /** prop to interpolate the returned value of a `css` call within styled-components */
  popperStyledCss?:
    | FlattenSimpleInterpolation
    // eslint-disable-next-line @typescript-eslint/ban-types
    | FlattenInterpolation<ThemedStyledProps<{}, T>>
    | FlattenInterpolation<ThemedStyledProps<BaseStyledPopperProps<E>, T>>;
}

export interface PopperProps<E = HTMLElement>
  extends Omit<PopperContextProviderProps<E>, "children">,
    PopperManagerProps {
  /** name of the component to be used for the target/targetRef error message */
  componentName?: string;
}

export interface PopperStateObject {
  /** indicates whether the popper is currently open */
  isOpen: boolean;
  /** callback handler to open the popper */
  onOpen(): void;
  /** callback handler to close the popper */
  onClose(): void;
}

export interface TargetCoordinates {
  /** top coordinate for the target parentRect */
  top: number;
  /** right coordinate for the target parentRect */
  right: number;
  /** bottom coordinate for the target parentRect */
  bottom: number;
  /** left coordinate for the target parentRect */
  left: number;
}

export interface PopperPlacement {
  /** active placement after taking auto-placement into account, if needed */
  activePlacement: PlacementType;
  /** left offset of the Popper */
  left: number;
  /** top offset of the Popper */
  top: number;
}
