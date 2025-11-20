export type MenuItem = {
  title: string;
  href: string;
  external?: boolean;
};

export const siteMenu: MenuItem[] = [
  { title: "Pricing", href: "/pricing" },
  { title: "About", href: "/about" },
  { title: "Careers", href: "/careers" },
  { title: "Blog", href: "/blog" },
];

export default siteMenu;
