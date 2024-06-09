import UserRole from "@/interfaces/user/Role";

export type NavbarLayout = {
  role: UserRole;
  items: {
    id: number;
    title: string;
    icon?: string;
    link: string;
  }[];
};

const navbarItems: NavbarLayout[] = [
  {
    role: UserRole.ROLE_ADMIN,
    items: [
      {
        id: 1,
        title: "Users Management",
        link: "/admin/users",
      },
      {
        id: 3,
        title: "Transactions",
        link: "/admin/transactions",
      },
      {
        id: 4,
        title: "Statistics",
        link: "/admin/statistics",
      },
    ],
  },
  {
    role: UserRole.ROLE_SECRETARY,
    items: [
      {
        id: 5,
        title: "Resources Management",
        link: "/management/resources",
      },
      {
        id: 6,
        title: "Loans",
        link: "/management/loans",
      },
      {
        id: 7,
        title: "Transactions",
        link: "/management/transactions",
      },
    ],
  },
  {
    role: UserRole.ROLE_USER,
    items: [
      {
        id: 9,
        title: "All resources",
        link: "/dashboard/resources",
      },
      {
        id: 10,
        title: "My Loans",
        link: "/dashboard/loans",
      },
      {
        id: 11,
        title: "My Transactions",
        link: "/dashboard/transactions",
      },
      {
        id: 12,
        title: "Statistics",
        link: "/dashboard/statistics",
      },
    ],
  },
];

export default navbarItems;
