/**
 * Ensure rounding errors don't cause infinite loops
 *
 * This function was created to address https://jira.braze.com/browse/DASHI-1642
 * where just hovering over the clear indicator for a beacon select would trigger
 * an infinite loop. The issue only manifested in Firefox. Upon inspection of the
 * values, it turned out the popperWidth was oscillating between 2 values:
 * - 131.95001220703125
 * - 131.9499969482422
 *
 * In Chrome, on the other hand, it only used a popperWidth of 131.95, resulting in just 2 renders,
 * the initial, and the render to place the tooltip.
 *
 * This function brings the 2 browsers into parity, as fractional values of a pixel don't have any
 * functional meaning in the DOM. To be safe, in case 8k monitors change things in the future, this
 * preserves up to 1/100th of a pixel.
 */
export declare const normalizeDimension: (value: number) => number;
