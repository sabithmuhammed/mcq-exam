"use client";
import {
    AlignJustify,
    ChartNoAxesColumn,
    LayoutDashboard,
    Mail,
    Search,
    Settings,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { SidebarItemProps } from "@/types/propTypes";

const Sidebar: React.FC = () => {
    const [navOpen, setNavOpen] = useState(false);

    const navItems: SidebarItemProps[] = [
        {
            text: "Dashboard",
            href: "/",
            icon: <LayoutDashboard strokeWidth={1.7} fill="#fff" />,
        },
        { text: "Find", href: "/find", icon: <Search size={20} /> },
        { text: "Inbox", href: "/inbox", icon: <Mail size={20} /> },
        {
            text: "Analytics",
            href: "/Anaytics",
            icon: <ChartNoAxesColumn size={20} />,
        },
        { text: "Settings", href: "/settings", icon: <Settings size={20} /> },
    ];

    return (
        <div className="bg-white w-full md:max-w-[240px] p-3 md:h-screen relative border-r-[1px]">
            <div className="flex px-2 justify-between">
                <div className=" flex gap-2">
                    <div className="flex items-center">
                        <Image
                            src={"/Logo.png"}
                            alt="Logo"
                            width={20}
                            height={20}
                        />
                    </div>
                    <h2 className="text-2xl font-bold">ELT Global</h2>
                </div>
                <div className="flex items-center text-gray-500">
                    <AlignJustify onClick={() => setNavOpen(!navOpen)} />
                </div>
            </div>
            <div className="md:mt-6">
                <h3 className="px-3 text-sm font-medium tracking-wider text-gray-500 py-5 max-md:hidden">
                    GENERAL
                </h3>
                <nav
                    className={`${
                        navOpen ? "" : "max-md:hidden"
                    } max-md:absolute bg-white max-md:right-0 max-md:top-15 max-md:h-screen   max-md:pt-10 max-md:px-2`}
                >
                    <ul className="space-y-2">
                        {navItems.length !== 0 &&
                            navItems.map((item) => (
                                <li key={item.text}>
                                    <SidebarItem {...item} />
                                </li>
                            ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
