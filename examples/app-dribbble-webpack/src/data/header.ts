import React from "react";
import IllustrationNew from "illustrations/New";
import IllustrationPlayoffs from "illustrations/Playoffs";
import IllustrationBlog from "illustrations/Blog";
import IllustrationWarmup from "illustrations/Warmup";
import IllustrationExplore from "illustrations/Explore";

type Menu = Array<{
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

const header: Menu = [
  {
    title: "Inspiration",
    items: [
      {
        title: "Explore Design Work",
        description: "Trending designs to inspire you",
        image: IllustrationExplore,
        href: "#",
      },
      {
        title: "New & Noteworthy",
        description: "Up-and-coming designers",
        image: IllustrationNew,
        href: "#",
        badge: "New",
      },
      {
        title: "Playoffs",
        description: "Work designers are riffing on",
        image: IllustrationPlayoffs,
        href: "#",
      },
      {
        title: "Blog",
        description: "Interviews, tutorials and more",
        image: IllustrationBlog,
        href: "#",
      },
      {
        title: "Weekly warm-up",
        description: "Prompt to flex your design skills",
        image: IllustrationWarmup,
        href: "#",
      },
    ],
    categories: [
      {
        title: "Animation",
        href: "#",
      },
      {
        title: "Branding",
        href: "#",
      },
      {
        title: "Illustration",
        href: "#",
      },
      {
        title: "Mobile",
        href: "#",
      },
      {
        title: "Print",
        href: "#",
      },
      {
        title: "Product Design",
        href: "#",
      },
      {
        title: "Typography",
        href: "#",
      },
      {
        title: "Web Design",
        href: "#",
      },
    ],
  },
  {
    title: "Find Work",
  },
  {
    title: "Learn Design",
  },
  {
    title: "Go Pro",
  },
  {
    title: "Hire Designers",
  },
];

export default header;
