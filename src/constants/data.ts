export const accordionData = [
  {
    _id: 1,
    title: "Data title 1",
    content: "Accordion content number 1",
  },
  {
    _id: 2,
    title: "Data title 2",
    content: "Accordion content number 2",
  },
  {
    _id: 3,
    title: "Data title 3",
    content: "Accordion content number 3",
  },
  {
    _id: 4,
    title: "Data title 4",
    content: "Accordion content number 4",
  },
];

export const menuData = [
  { label: "Home", to: "/" },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [{ label: "Location", to: "location" }],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      { label: "Account", to: "account" },
      {
        label: "Security",
        to: "security",
        children: [
          { label: "Login", to: "login" },
          { label: "Register", to: "register" },
        ],
      },
    ],
  },
];
