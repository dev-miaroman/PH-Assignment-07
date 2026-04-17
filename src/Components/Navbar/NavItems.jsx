"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({ item }) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        className={`px-5 py-2 text-md text-[#244d3f] text-lg font-medium rounded-md ${pathname == item.href && "bg-[#244d3f] text-white"} hover:bg-[#244d3f] hover:text-white hover:shadow hover:shadow-[#244d3f]`}
        href={item.href}
      >
        { item.icon}{item.title}
      </Link>
    </li>
  );
};

export default NavItems;
