var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./..";
const fixtures = {
    content: "Content",
    title: "Title",
    subtitle: "Subtitle",
    className: "test-className",
    id: "test-id",
};
describe("Components/Modal", () => {
    test("doesn't render children", () => {
        render(React.createElement(Modal, null, fixtures.content));
        expect(screen.queryByText(fixtures.content)).not.toBeInTheDocument();
    });
    test("renders correctly when active", () => {
        render(React.createElement(Modal, { active: true },
            React.createElement(Modal.Title, null, fixtures.title),
            React.createElement(Modal.Subtitle, null, fixtures.subtitle),
            fixtures.content));
        const elModal = screen.getByRole("dialog");
        const elTitle = screen.getByText(fixtures.title);
        const elSubtitle = screen.getByText(fixtures.subtitle);
        const titleId = elTitle.getAttribute("id");
        const subtitleId = elSubtitle.getAttribute("id");
        expect(elModal).toBeInTheDocument();
        expect(elTitle).toBeInTheDocument();
        expect(elSubtitle).toBeInTheDocument();
        expect(titleId).toMatchSnapshot();
        expect(subtitleId).toMatchSnapshot();
        expect(elModal).toHaveAttribute("aria-modal", "true");
        expect(elModal).toHaveAttribute("aria-labelledby", titleId);
        expect(elModal).toHaveAttribute("aria-describedby", subtitleId);
    });
    test("works with className and attributes", () => {
        render(React.createElement(Modal, { active: true, className: fixtures.className, attributes: { id: fixtures.id } }, fixtures.content));
        const elModal = screen.getByRole("dialog");
        expect(elModal).toHaveClass(fixtures.className);
        expect(elModal).toHaveAttribute("id", fixtures.id);
    });
    test("works as controlled", () => __awaiter(void 0, void 0, void 0, function* () {
        const handleCloseMock = jest.fn();
        const handleOpenMock = jest.fn();
        const Component = () => {
            const [active, setActive] = React.useState(true);
            const handleOpen = () => {
                setActive(true);
                handleOpenMock();
            };
            const handleClose = () => {
                setActive(false);
                handleCloseMock();
            };
            return (React.createElement(React.Fragment, null,
                React.createElement("button", { type: "button", onClick: handleOpen }, "Open"),
                React.createElement(Modal, { active: active, onClose: handleClose }, fixtures.content)));
        };
        render(React.createElement(Component, null));
        expect(screen.queryByText(fixtures.content)).toBeInTheDocument();
        expect(handleOpenMock).not.toBeCalled();
        yield userEvent.keyboard("{Escape}");
        fireEvent.transitionEnd(screen.getByText(fixtures.content));
        yield waitFor(() => {
            expect(handleCloseMock).toBeCalledTimes(1);
            expect(screen.queryByText(fixtures.content)).not.toBeInTheDocument();
        });
        const elButton = screen.getByText("Open");
        yield userEvent.click(elButton);
        expect(handleOpenMock).toBeCalledTimes(1);
        expect(screen.getByText(fixtures.content)).toBeInTheDocument();
    }));
});
