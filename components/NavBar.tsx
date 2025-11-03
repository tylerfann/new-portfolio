import { JSX } from "react";
import NavItem from "./NavItem";
import { NAV_ITEMS } from "@/utils/navItems";

const NavBar = (): JSX.Element => (
  <nav>
    {NAV_ITEMS.map((item) => (
      <NavItem {...item} key={item.name} />
    ))}
  </nav>
);

export default NavBar;
