import React from "react";
declare type Menu = Array<{
    title: string;
    items?: Array<{
        title: string;
        description: string;
        image: React.ComponentType;
        badge?: string;
        href: string;
    }>;
    categories?: Array<{
        title: string;
        href: string;
    }>;
}>;
declare const header: Menu;
export default header;
