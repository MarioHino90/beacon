/// <reference types="react" />
export declare type UseIMEProps<El extends HTMLInputElement | HTMLTextAreaElement> = El extends HTMLInputElement ? React.InputHTMLAttributes<HTMLInputElement> & {
    ref?: React.RefObject<HTMLInputElement>;
} : React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    ref?: React.RefObject<HTMLTextAreaElement>;
};
export interface UseIMEReturn<El extends HTMLInputElement | HTMLTextAreaElement> {
    value: UseIMEProps<El>["value"];
    defaultValue: UseIMEProps<El>["defaultValue"];
    ref: React.RefObject<El> | React.MutableRefObject<El>;
    onCompositionStart: (e: React.CompositionEvent<El>) => void;
    onCompositionEnd: (e: React.CompositionEvent<El>) => void;
    onChange: (e: React.ChangeEvent<El>) => void;
}
