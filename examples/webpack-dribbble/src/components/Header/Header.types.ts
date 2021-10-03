import React from "react";

export type NavItemProps = {
  title: string;
  description: string;
  href: string;
  image: React.ComponentType;
  badge?: string;
};

export type SearchProps = {
  expanded?: boolean;
};
