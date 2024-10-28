"use client";
import { SidebarItemProps } from "@/types/propTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const SidebarItem: React.FC<SidebarItemProps> = ({ text, icon, href }) => {
    const pathname = usePathname();
    const isActive = href == pathname;
    return (
        <Link
            href={href}
            className={`flex gap-3 mx-1 px-3 py-2 rounded-lg  ${
                isActive
                    ? `bg-orange-500 text-white`
                    : `text-gray-700 hover:bg-gray-100`
            } `}
        >
            <div className={isActive ? `text-white` : "text-orange-500"}>
                {icon}
            </div>
            <div className="max-md:hidden">{text}</div>
        </Link>
    );
};

export default SidebarItem;
