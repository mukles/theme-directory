export type MenuItem = {
  title: string;
  href: string;
  external?: boolean;
};

export const siteMenu: MenuItem[] = [
  { title: "Themes", href: "/themes" },
  { title: "Components", href: "/components" },
  { title: "Blog", href: "/blog" },
  { title: "Tools", href: "/tools" },
  { title: "Services", href: "/services" },
  { title: "Contact Us", href: "/contact" },
];

export default siteMenu;
