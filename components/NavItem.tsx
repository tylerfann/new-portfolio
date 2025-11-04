import Link from "next/link";
import type { NavItemType } from "@/types/NavItemType";
import { JSX } from "react";

const NavItem = ({ name, href }: NavItemType): JSX.Element => (
  <Link href={href} className="mr-10"><span className="text-lg">{name}</span></Link>
);

export default NavItem;
