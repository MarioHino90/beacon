import { PlacementType } from "../../../Popper";
export declare const getAutoPlacement: (element: HTMLElement, { popperHeight, popperWidth, }: {
    popperHeight: number;
    popperWidth: number;
}, defaultPlacement?: PlacementType) => PlacementType;
