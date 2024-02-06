export interface ModalContextInterface {
  /** size of the `Modal` to be displayed */
  size?: "sm" | "md" | "lg" | "xl";
}

export interface ModalContextProviderProps extends ModalContextInterface {
  children: React.ReactNode;
}
