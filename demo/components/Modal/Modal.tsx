import React from "react";
import { classNames, responsiveVariables } from "utilities/helpers";
import Text from "components/Text";
import Backdrop from "components/Backdrop";
import useElementId from "hooks/useElementId";
import type * as T from "./Modal.types";
import s from "./Modal.module.css";

const Context = React.createContext<T.Context>({
	id: "",
	titleMounted: false,
	setTitleMounted: () => {},
	subtitleMounted: false,
	setSubtitleMounted: () => {},
});
const useModal = () => React.useContext(Context);

const ModalTitle = (props: T.TitleProps) => {
	const { children } = props;
	const { id, setTitleMounted } = useModal();

	React.useEffect(() => {
		setTitleMounted(true);
		return () => setTitleMounted(false);
	}, [setTitleMounted]);

	return (
		<Text variant="title-3" attributes={{ id: `${id}-title` }}>
			{children}
		</Text>
	);
};

const ModalSubtitle = (props: T.SubtitleProps) => {
	const { children } = props;
	const { id, setSubtitleMounted } = useModal();

	React.useEffect(() => {
		setSubtitleMounted(true);
		return () => setSubtitleMounted(false);
	}, [setSubtitleMounted]);

	return (
		<Text variant="body-2" color="neutral-faded" attributes={{ id: `${id}-subtitle` }}>
			{children}
		</Text>
	);
};

const Modal = (props: T.Props) => {
	const {
		children,
		onClose,
		onOpen,
		active,
		size,
		padding,
		position = "center",
		className,
		attributes,
	} = props;
	const id = useElementId();
	const [titleMounted, setTitleMounted] = React.useState(false);
	const [subtitleMounted, setSubtitleMounted] = React.useState(false);

	const value = React.useMemo(
		() => ({
			titleMounted,
			setTitleMounted,
			subtitleMounted,
			setSubtitleMounted,
			id,
		}),
		[id, subtitleMounted, titleMounted]
	);

	return (
		<Backdrop onOpen={onOpen} onClose={onClose} active={active}>
			{({ active }) => {
				const rootClassNames = classNames(
					s.root,
					className,
					active && s["--active"],
					position && s[`--position-${position}`]
				);
				return (
					<Context.Provider value={value}>
						<div
							{...attributes}
							style={{ "--_s": size } as React.CSSProperties}
							aria-labelledby={titleMounted ? `${id}-title` : undefined}
							aria-describedby={subtitleMounted ? `${id}-subtitle` : undefined}
							className={rootClassNames}
							aria-modal="true"
							role="dialog"
						>
							<div className={s.inner} style={{ ...responsiveVariables("--_p", padding) }}>
								{children}
							</div>
						</div>
					</Context.Provider>
				);
			}}
		</Backdrop>
	);
};

Modal.Title = ModalTitle;
Modal.Subtitle = ModalSubtitle;
export default Modal;
