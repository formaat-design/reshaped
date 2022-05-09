import React from "react";
import type * as G from "types/global";

export type Context = {
	id: string;
	titleMounted: boolean;
	setTitleMounted: (b: boolean) => void;
	subtitleMounted: boolean;
	setSubtitleMounted: (b: boolean) => void;
};

export type TitleProps = {
	children: React.ReactNode;
};

export type SubtitleProps = {
	children: React.ReactNode;
};

export type Props = {
	children?: React.ReactNode;
	position?: "center" | "end" | "bottom" | "start";
	size?: string;
	padding?: G.Responsive<number>;
	active?: boolean;
	onOpen?: () => void;
	onClose?: () => void;
	className?: string;
	attributes?: G.Attributes<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
};
