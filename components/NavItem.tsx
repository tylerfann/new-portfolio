"use client";
import Link from "next/link";
import type { NavItemType } from "@/types/NavItemType";
import { JSX } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavItem = ({ name, href }: NavItemType): JSX.Element => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} className="mr-10"><span className={clsx("text-lg", isActive && "text-lime-500")}>{name}</span></Link>
  );
};

export default NavItem;
