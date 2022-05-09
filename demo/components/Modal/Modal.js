import React from "react";
import { classNames, responsiveVariables } from "../../utilities/helpers";
import Text from "../Text";
import Backdrop from "../Backdrop";
import useElementId from "../../hooks/useElementId";
import s from "./Modal.module.css";
const Context = React.createContext({
    id: "",
    titleMounted: false,
    setTitleMounted: () => { },
    subtitleMounted: false,
    setSubtitleMounted: () => { },
});
const useModal = () => React.useContext(Context);
const ModalTitle = (props) => {
    const { children } = props;
    const { id, setTitleMounted } = useModal();
    React.useEffect(() => {
        setTitleMounted(true);
        return () => setTitleMounted(false);
    }, [setTitleMounted]);
    return (React.createElement(Text, { variant: "title-3", attributes: { id: `${id}-title` } }, children));
};
const ModalSubtitle = (props) => {
    const { children } = props;
    const { id, setSubtitleMounted } = useModal();
    React.useEffect(() => {
        setSubtitleMounted(true);
        return () => setSubtitleMounted(false);
    }, [setSubtitleMounted]);
    return (React.createElement(Text, { variant: "body-2", color: "neutral-faded", attributes: { id: `${id}-subtitle` } }, children));
};
const Modal = (props) => {
    const { children, onClose, onOpen, active, size, padding, position = "center", className, attributes, } = props;
    const id = useElementId();
    const [titleMounted, setTitleMounted] = React.useState(false);
    const [subtitleMounted, setSubtitleMounted] = React.useState(false);
    const value = React.useMemo(() => ({
        titleMounted,
        setTitleMounted,
        subtitleMounted,
        setSubtitleMounted,
        id,
    }), [id, subtitleMounted, titleMounted]);
    return (React.createElement(Backdrop, { onOpen: onOpen, onClose: onClose, active: active }, ({ active }) => {
        const rootClassNames = classNames(s.root, className, active && s["--active"], position && s[`--position-${position}`]);
        return (React.createElement(Context.Provider, { value: value },
            React.createElement("div", Object.assign({}, attributes, { style: { "--_s": size }, "aria-labelledby": titleMounted ? `${id}-title` : undefined, "aria-describedby": subtitleMounted ? `${id}-subtitle` : undefined, className: rootClassNames, "aria-modal": "true", role: "dialog" }),
                React.createElement("div", { className: s.inner, style: Object.assign({}, responsiveVariables("--_p", padding)) }, children))));
    }));
};
Modal.Title = ModalTitle;
Modal.Subtitle = ModalSubtitle;
export default Modal;
