import React from "react";
import type * as G from "../../types/global";
export declare type Context = {
    id: string;
    titleMounted: boolean;
    setTitleMounted: (b: boolean) => void;
    subtitleMounted: boolean;
    setSubtitleMounted: (b: boolean) => void;
};
export declare type TitleProps = {
    children: React.ReactNode;
};
export declare type SubtitleProps = {
    children: React.ReactNode;
};
export declare type Props = {
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
