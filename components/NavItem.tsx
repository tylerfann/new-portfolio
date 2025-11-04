import Link from "next/link";
import type { NavItemType } from "@/types/NavItemType";
import { JSX } from "react";

const NavItem = ({ name, href }: NavItemType): JSX.Element => (
  <Link href={href}>{name}</Link>
);

export default NavItem;
