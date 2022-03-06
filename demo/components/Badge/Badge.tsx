import React from "react";
import { classNames } from "utilities/helpers";
import type * as T from "./Badge.types";
import BadgeContainer from "./BadgeContainer";
import s from "./Badge.module.css";

const Badge = (props: T.Props) => {
	const { children, color, rounded, size, variant, hidden, className, attributes } = props;
	const rootClassName = classNames(
		s.root,
		className,
		rounded && s["--rounded"],
		hidden && s["--hidden"],
		size && s[`--size-${size}`],
		color && s[`--color-${color}`],
		variant && s[`--variant-${variant}`]
	);

	return (
		<span {...attributes} className={rootClassName} aria-hidden={hidden ? "true" : undefined}>
			{children}
		</span>
	);
};

Badge.Container = BadgeContainer;
export default Badge;
