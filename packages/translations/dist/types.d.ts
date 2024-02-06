import { Resources } from "react-i18next";
export interface BeaconTranslations extends Resources {
    "beacon-button": {
        "button-click-error-aria-label": never;
        "button-click-success-aria-label": never;
    };
    "beacon-examples": {
        "hello-world": {
            place: string;
            num: number;
        };
        simple: never;
    };
    "beacon-field-label": {
        "optional-field-notice": never;
        "required-field-notice": never;
        "tab-to-enter-popover-close": never;
        "tab-to-enter-popover-open": never;
    };
    "beacon-table": {
        "sort-aria-label-asc": {
            columnName: string;
        };
        "sort-aria-label-desc": {
            columnName: string;
        };
        "sort-tooltip-asc": never;
        "sort-tooltip-desc": never;
        "sorted-aria-label-asc": {
            columnName: string;
            nextSortDirection: "desc" | "other";
        };
        "sorted-aria-label-desc": {
            columnName: string;
            nextSortDirection: "asc" | "other";
        };
        "sorted-tooltip-asc": never;
        "sorted-tooltip-desc": never;
    };
}
