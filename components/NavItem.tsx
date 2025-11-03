import Link from "next/link";
import { NavItem as NavItemType } from "@/types/navItem";
import { JSX } from "react";

const NavItem = ({ name, href }: NavItemType): JSX.Element => (
  <Link href={href}>{name}</Link>
);

export default NavItem;
