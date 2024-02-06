/**
 * Hook that returns a 'mouseleave' event listener function for Popper
 * @param handleClose the function that should be invoked when all conditions to close popper have been satisfied
 * @param popperRef ref to the Popper DOM element
 */
export declare const useMouseLeave: (handleClose: (event: any) => void, popperRef: React.RefObject<HTMLDivElement>) => (event: any) => void;
