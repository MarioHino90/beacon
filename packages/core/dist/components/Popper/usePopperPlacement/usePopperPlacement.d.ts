import { PlacementType, PopperPlacement } from "../types";
export interface PopperPlacementState {
    left: number;
    top: number;
    activePlacement: PlacementType;
}
export interface UsePopperPlacementResult extends PopperPlacement {
    /** function to update popper placement */
    handlePlacementUpdate: () => void;
}
export declare const usePopperPlacement: (popperRef: React.RefObject<HTMLDivElement>) => UsePopperPlacementResult;
