import Link from "next/link";

const NavItem = ({ name, href }) => <Link href={href}>{name}</Link>;

export default NavItem;