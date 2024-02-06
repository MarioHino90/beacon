import { PopperProps } from "../../Popper";
import { ActiveDescendantId } from "../types";
export declare const useMenuA11y: (menuRef: React.RefObject<HTMLUListElement>, { isOpen, onClose, onOpen, target, targetRef, }: Pick<PopperProps, "isOpen" | "onClose" | "onOpen" | "target" | "targetRef">) => ActiveDescendantId;
