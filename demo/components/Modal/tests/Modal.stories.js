var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import Modal from "./..";
import Stack from "../../Stack";
import Button from "../../Button";
import Dismissible from "../../Dismissible";
import DropdownMenu from "../../DropdownMenu";
import Switch from "../../Switch";
import TextField from "../../TextField";
import useToggle from "../../../hooks/useToggle";
export default { title: "Components/Modal" };
const Example = (props) => {
    const { active: activeProp, title, subtitle } = props, modalProps = __rest(props, ["active", "title", "subtitle"]);
    const { active, activate, deactivate } = useToggle(activeProp);
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { onClick: activate }, "Open dialog"),
        React.createElement(Modal, Object.assign({}, modalProps, { active: active, onClose: deactivate }),
            React.createElement(Stack, { gap: 3 },
                (title || subtitle) && (React.createElement(Dismissible, { onClose: deactivate, closeAriaLabel: "Close modal" },
                    title && React.createElement(Modal.Title, null, title),
                    subtitle && React.createElement(Modal.Subtitle, null, subtitle))),
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
                React.createElement(Switch, { name: "hey" }),
                React.createElement(TextField, { name: "hey2" }),
                React.createElement(Button, { onClick: deactivate }, "Hey")))));
};
export const sizes = () => (React.createElement(React.Fragment, null,
    React.createElement(Stack, { direction: "row" },
        React.createElement(Example, null),
        React.createElement(Example, { size: "600px" })),
    React.createElement("div", { style: { height: 2000 } })));
export const customPadding = () => (React.createElement(React.Fragment, null,
    React.createElement(Stack, { direction: "row" },
        React.createElement(Example, { padding: 0 }),
        React.createElement(Example, { padding: 6 })),
    React.createElement("div", { style: { height: 2000 } })));
export const positions = () => (React.createElement(React.Fragment, null,
    React.createElement(Stack, { direction: "row" },
        React.createElement(Example, { position: "bottom" }),
        React.createElement(Example, { position: "start" }),
        React.createElement(Example, { position: "end" })),
    React.createElement("div", { style: { height: 2000 } })));
export const composition = () => React.createElement(Example, { title: "Modal title", subtitle: "Modal subtitle", active: true });
export const testNestedTrap = () => {
    const { active, activate, deactivate } = useToggle();
    return (React.createElement(React.Fragment, null,
        React.createElement(DropdownMenu, null,
            React.createElement(DropdownMenu.Trigger, null, (attributes) => React.createElement(Button, { attributes: attributes }, "Open menu")),
            React.createElement(DropdownMenu.Content, null,
                React.createElement(DropdownMenu.Item, { onClick: activate }, "Open dialog"),
                React.createElement(DropdownMenu.Item, null, "Item 2"))),
        React.createElement(Modal, { active: active, onClose: deactivate },
            React.createElement(Stack, { gap: 3 },
                React.createElement(DropdownMenu, null,
                    React.createElement(DropdownMenu.Trigger, null, (attributes) => React.createElement(Button, { attributes: attributes }, "Open menu")),
                    React.createElement(DropdownMenu.Content, null,
                        React.createElement(DropdownMenu.Item, null, "Item 1"),
                        React.createElement(DropdownMenu.Item, null, "Item 2"))),
                React.createElement(Button, { onClick: deactivate }, "Close")))));
};
