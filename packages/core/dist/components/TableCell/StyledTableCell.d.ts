/// <reference types="react" />
import { StyledTableCellProps } from "./types";
export declare const StyledTableCell: import("styled-components").StyledComponent<"td", any, {
    className: string;
    hidden?: boolean | undefined;
    abbr?: string | undefined;
    dir?: string | undefined;
    slot?: string | undefined;
    style?: import("react").CSSProperties | undefined;
    title?: string | undefined;
    color?: string | undefined;
    height?: string | number | undefined;
    translate?: "yes" | "no" | undefined;
    width?: string | number | undefined;
    prefix?: string | undefined;
    children?: import("react").ReactNode;
    key?: import("react").Key | null | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    role?: import("react").AriaRole | undefined;
    tabIndex?: number | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: (boolean | "false" | "true") | undefined;
    'aria-autocomplete'?: "both" | "none" | "inline" | "list" | undefined;
    'aria-busy'?: (boolean | "false" | "true") | undefined;
    'aria-checked'?: boolean | "mixed" | "false" | "true" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "time" | "page" | "false" | "true" | "step" | "location" | "date" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: (boolean | "false" | "true") | undefined;
    'aria-dropeffect'?: "link" | "none" | "copy" | "move" | "execute" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: (boolean | "false" | "true") | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: (boolean | "false" | "true") | undefined;
    'aria-haspopup'?: boolean | "dialog" | "menu" | "listbox" | "grid" | "false" | "true" | "tree" | undefined;
    'aria-hidden'?: (boolean | "false" | "true") | undefined;
    'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: (boolean | "false" | "true") | undefined;
    'aria-multiline'?: (boolean | "false" | "true") | undefined;
    'aria-multiselectable'?: (boolean | "false" | "true") | undefined;
    'aria-orientation'?: "horizontal" | "vertical" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "mixed" | "false" | "true" | undefined;
    'aria-readonly'?: (boolean | "false" | "true") | undefined;
    'aria-relevant'?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    'aria-required'?: (boolean | "false" | "true") | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: (boolean | "false" | "true") | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "other" | "ascending" | "descending" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    onCopy?: import("react").ClipboardEventHandler<HTMLTableDataCellElement> | undefined;
    onCopyCapture?: import("react").ClipboardEventHandler<HTMLTableDataCellElement> | undefined;
    onCut?: import("react").ClipboardEventHandler<HTMLTableDataCellElement> | undefined;
    onCutCapture?: import("react").ClipboardEventHandler<HTMLTableDataCellElement> | undefined;
    onPaste?: import("react").ClipboardEventHandler<HTMLTableDataCellElement> | undefined;
    onPasteCapture?: import("react").ClipboardEventHandler<HTMLTableDataCellElement> | undefined;
    onCompositionEnd?: import("react").CompositionEventHandler<HTMLTableDataCellElement> | undefined;
    onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLTableDataCellElement> | undefined;
    onCompositionStart?: import("react").CompositionEventHandler<HTMLTableDataCellElement> | undefined;
    onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLTableDataCellElement> | undefined;
    onCompositionUpdate?: import("react").CompositionEventHandler<HTMLTableDataCellElement> | undefined;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLTableDataCellElement> | undefined;
    onFocus?: import("react").FocusEventHandler<HTMLTableDataCellElement> | undefined;
    onFocusCapture?: import("react").FocusEventHandler<HTMLTableDataCellElement> | undefined;
    onBlur?: import("react").FocusEventHandler<HTMLTableDataCellElement> | undefined;
    onBlurCapture?: import("react").FocusEventHandler<HTMLTableDataCellElement> | undefined;
    onChange?: import("react").FormEventHandler<HTMLTableDataCellElement> | undefined;
    onChangeCapture?: import("react").FormEventHandler<HTMLTableDataCellElement> | undefined;
    onBeforeInput?: import("react").FormEventHandler<HTMLTableDataCellElement> | undefined;
    onBeforeInputCapture?: import("react").FormEventHandler<HTMLTableDataCellElement> | undefined;
    onInput?: import("react").FormEventHandler<HTMLTableDataCellElement> | undefined;
    onInputCapture?: import("react").FormEventHandler<HTMLTableDataCellElement> | undefined;
    onReset?: import("react").FormEventHandler<HTMLTableDataCellElement> | undefined;
    onResetCapture?: import("react").FormEventHandler<HTMLTableDataCellElement> | undefined;
    onSubmit?: import("react").FormEventHandler<HTMLTableDataCellElement> | undefined;
    onSubmitCapture?: import("react").FormEventHandler<HTMLTableDataCellElement> | undefined;
    onInvalid?: import("react").FormEventHandler<HTMLTableDataCellElement> | undefined;
    onInvalidCapture?: import("react").FormEventHandler<HTMLTableDataCellElement> | undefined;
    onLoad?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onLoadCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onError?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onErrorCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onKeyDown?: import("react").KeyboardEventHandler<HTMLTableDataCellElement> | undefined;
    onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLTableDataCellElement> | undefined;
    onKeyPress?: import("react").KeyboardEventHandler<HTMLTableDataCellElement> | undefined;
    onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLTableDataCellElement> | undefined;
    onKeyUp?: import("react").KeyboardEventHandler<HTMLTableDataCellElement> | undefined;
    onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLTableDataCellElement> | undefined;
    onAbort?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onAbortCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onCanPlay?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onCanPlayCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onCanPlayThrough?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onDurationChange?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onDurationChangeCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onEmptied?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onEmptiedCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onEncrypted?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onEncryptedCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onEnded?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onEndedCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onLoadedData?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onLoadedDataCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onLoadedMetadata?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onLoadStart?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onLoadStartCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onPause?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onPauseCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onPlay?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onPlayCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onPlaying?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onPlayingCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onProgress?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onProgressCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onRateChange?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onRateChangeCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onSeeked?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onSeekedCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onSeeking?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onSeekingCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onStalled?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onStalledCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onSuspend?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onSuspendCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onTimeUpdate?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onVolumeChange?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onWaiting?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onWaitingCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onAuxClick?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onAuxClickCapture?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onClick?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onClickCapture?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onContextMenu?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onContextMenuCapture?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onDoubleClick?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onDoubleClickCapture?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onDrag?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onDragCapture?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onDragEnd?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onDragEndCapture?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onDragEnter?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onDragEnterCapture?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onDragExit?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onDragExitCapture?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onDragLeave?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onDragLeaveCapture?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onDragOver?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onDragOverCapture?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onDragStart?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onDragStartCapture?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onDrop?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onDropCapture?: import("react").DragEventHandler<HTMLTableDataCellElement> | undefined;
    onMouseDown?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onMouseDownCapture?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onMouseEnter?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onMouseLeave?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onMouseMove?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onMouseMoveCapture?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onMouseOut?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onMouseOutCapture?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onMouseOver?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onMouseOverCapture?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onMouseUp?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onMouseUpCapture?: import("react").MouseEventHandler<HTMLTableDataCellElement> | undefined;
    onSelect?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onSelectCapture?: import("react").ReactEventHandler<HTMLTableDataCellElement> | undefined;
    onTouchCancel?: import("react").TouchEventHandler<HTMLTableDataCellElement> | undefined;
    onTouchCancelCapture?: import("react").TouchEventHandler<HTMLTableDataCellElement> | undefined;
    onTouchEnd?: import("react").TouchEventHandler<HTMLTableDataCellElement> | undefined;
    onTouchEndCapture?: import("react").TouchEventHandler<HTMLTableDataCellElement> | undefined;
    onTouchMove?: import("react").TouchEventHandler<HTMLTableDataCellElement> | undefined;
    onTouchMoveCapture?: import("react").TouchEventHandler<HTMLTableDataCellElement> | undefined;
    onTouchStart?: import("react").TouchEventHandler<HTMLTableDataCellElement> | undefined;
    onTouchStartCapture?: import("react").TouchEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerDown?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerDownCapture?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerMove?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerMoveCapture?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerUp?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerUpCapture?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerCancel?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerCancelCapture?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerEnter?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerEnterCapture?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerLeave?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerLeaveCapture?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerOver?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerOverCapture?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerOut?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onPointerOutCapture?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onGotPointerCapture?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onLostPointerCapture?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLTableDataCellElement> | undefined;
    onScroll?: import("react").UIEventHandler<HTMLTableDataCellElement> | undefined;
    onScrollCapture?: import("react").UIEventHandler<HTMLTableDataCellElement> | undefined;
    onWheel?: import("react").WheelEventHandler<HTMLTableDataCellElement> | undefined;
    onWheelCapture?: import("react").WheelEventHandler<HTMLTableDataCellElement> | undefined;
    onAnimationStart?: import("react").AnimationEventHandler<HTMLTableDataCellElement> | undefined;
    onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLTableDataCellElement> | undefined;
    onAnimationEnd?: import("react").AnimationEventHandler<HTMLTableDataCellElement> | undefined;
    onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLTableDataCellElement> | undefined;
    onAnimationIteration?: import("react").AnimationEventHandler<HTMLTableDataCellElement> | undefined;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLTableDataCellElement> | undefined;
    onTransitionEnd?: import("react").TransitionEventHandler<HTMLTableDataCellElement> | undefined;
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLTableDataCellElement> | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    contentEditable?: "inherit" | (boolean | "false" | "true") | undefined;
    contextMenu?: string | undefined;
    draggable?: (boolean | "false" | "true") | undefined;
    placeholder?: string | undefined;
    spellCheck?: (boolean | "false" | "true") | undefined;
    radioGroup?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "search" | "numeric" | "none" | "text" | "decimal" | "tel" | "url" | "email" | undefined;
    is?: string | undefined;
    align?: "left" | "right" | "center" | "justify" | "char" | undefined;
    colSpan?: number | undefined;
    headers?: string | undefined;
    rowSpan?: number | undefined;
    scope?: string | undefined;
    valign?: "bottom" | "middle" | "top" | "baseline" | undefined;
    ref?: ((instance: HTMLTableDataCellElement | null) => void) | import("react").RefObject<HTMLTableDataCellElement> | null | undefined;
    theme: any;
} & StyledTableCellProps<HTMLTableCellElement, "td">, "hidden" | "abbr" | "dir" | "slot" | "style" | "title" | "color" | "height" | "translate" | "width" | "prefix" | "children" | "ref" | "key" | "className" | "id" | "lang" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "theme" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "draggable" | "placeholder" | "spellCheck" | "radioGroup" | "about" | "datatype" | "inlist" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "align" | "colSpan" | "headers" | "rowSpan" | "scope" | "valign">;
