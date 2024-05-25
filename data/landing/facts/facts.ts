export interface Fact {
  id: number;
  name: string;
  icon: string;
  value: number;
}

export const facts: Fact[] = [
  {
    id: 0,
    name: "Active Users",
    icon: "users",
    value: 1000,
  },
  {
    id: 1,
    name: "Books",
    icon: "books",
    value: 120000,
  },
  {
    id: 2,
    name: "Daily Loans",
    icon: "books",
    value: 15000,
  },
];
