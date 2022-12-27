export type Shot = {
  title: string;
  id: string;
  imgUrl: string;
  likesCount: number;
  viewsCount: number;
  user: {
    name: string;
    location: string;
    logoUrl: string;
    accountType?: "Pro" | "Team";
  };
};

const shots: Shot[] = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "Interior design",
    id: "1",
    likesCount: 13,
    viewsCount: 5400,
    user: {
      logoUrl: "https://reshaped.so/favicon.svg",
      name: "Reshaped",
      accountType: "Team",
      location: "Amsterdam",
    },
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "New mockups",
    id: "2",
    likesCount: 93,
    viewsCount: 10400,
    user: {
      logoUrl: "https://reshaped.so/favicon.svg",
      name: "Reshaped",
      accountType: "Team",
      location: "Amsterdam",
    },
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "All in black",
    id: "3",
    likesCount: 726,
    viewsCount: 15220,
    user: {
      logoUrl: "https://reshaped.so/favicon.svg",
      name: "Reshaped",
      accountType: "Team",
      location: "Amsterdam",
    },
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "My new plant",
    id: "4",
    likesCount: 13,
    viewsCount: 10400,
    user: {
      logoUrl: "https://reshaped.so/favicon.svg",
      name: "Reshaped",
      accountType: "Team",
      location: "Amsterdam",
    },
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "Prototyping",
    id: "5",
    likesCount: 22,
    viewsCount: 12420,
    user: {
      logoUrl: "https://reshaped.so/favicon.svg",
      name: "Reshaped",
      accountType: "Team",
      location: "Amsterdam",
    },
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "Simply drawing",
    id: "6",
    likesCount: 27,
    viewsCount: 72240,
    user: {
      logoUrl: "https://reshaped.so/favicon.svg",
      name: "Reshaped",
      accountType: "Team",
      location: "Amsterdam",
    },
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "Living room",
    id: "7",
    likesCount: 37,
    viewsCount: 12200,
    user: {
      logoUrl: "https://reshaped.so/favicon.svg",
      name: "Reshaped",
      accountType: "Team",
      location: "Amsterdam",
    },
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "My workplace",
    id: "8",
    likesCount: 22,
    viewsCount: 12400,
    user: {
      logoUrl: "https://reshaped.so/favicon.svg",
      name: "Reshaped",
      accountType: "Team",
      location: "Amsterdam",
    },
  },
];

export default shots;
