import type * as T from "./Modal.types";
declare const Modal: {
    (props: T.Props): JSX.Element;
    Title: (props: T.TitleProps) => JSX.Element;
    Subtitle: (props: T.SubtitleProps) => JSX.Element;
};
export default Modal;
