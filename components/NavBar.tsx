import NavItem from "./NavItem";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Me",
    href: "/about",
  },
];

const NavBar = () => (
  <nav>
    {navItems.map((item) => (
      <NavItem {...item} key={item.name} />
    ))}
  </nav>
);

export default NavBar;
