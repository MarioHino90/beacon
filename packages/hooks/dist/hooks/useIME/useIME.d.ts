import { UseIMEProps, UseIMEReturn } from "./types";
/**
 * Handle both standard character input and IME character input transparently for any input element
 *
 * This can be used for both inputs and textareas.
 *
 * @example
 * const imeProps = useIME<HTMLInputElement>({ onChange: userSuppliedOnChange, value: userSuppliedValue, ref });
 * return (
 *   <input {...props} {...imeProps} />
 * )
 */
export declare function useIME<El extends HTMLInputElement | HTMLTextAreaElement>({ onChange: userOnChange, value, defaultValue, ref: userRef, }: UseIMEProps<El>): UseIMEReturn<El>;
