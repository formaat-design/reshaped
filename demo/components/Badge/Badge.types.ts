import type React from "react";
import type * as G from "types/global";

type BaseProps = {
	size?: "small";
	rounded?: boolean;
	hidden?: boolean;
	className?: string;
	attributes?: G.Attributes<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
};

type WithChildren = BaseProps & {
	children: React.ReactNode;
	color?: "critical" | "positive" | "primary";
	variant?: "faded" | "outline";
};

type WithEmpty = BaseProps & {
	color: "critical" | "positive" | "primary";
	children?: never;
	variant?: never;
};

export type Props = WithChildren | WithEmpty;

export type ContainerProps = {
	position?: "top-end" | "bottom-end";
	overlap?: boolean;
	children: React.ReactNode;
	className?: string;
	attributes?: G.Attributes<React.HTMLAttributes<HTMLElement>, keyof ContainerProps>;
};
