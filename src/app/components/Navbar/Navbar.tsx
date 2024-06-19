"use client"
import React, {useState} from 'react';
import Link from "next/link";
import {NavLink} from "@/app/components/NavLink";
import {Bars3Icon,XMarkIcon} from "@heroicons/react/24/solid";
import {MenuOverlay} from "@/app/components/MenuOverlay";
import {TNavLink} from "@/app/components/NavLink/TNavLink";
import Image from "next/image";

const navLinks: TNavLink[] = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    },
]


export const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href={"/"} className="text-2xl md:text-4xl text-white font-semibold">
                    <Image src={"/images/su_attempt_3.svg"} height={25} width={25} alt={"Logo"}/>
                </Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                            <button
                                onClick={()=>setNavbarOpen(true)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <Bars3Icon className="h-5 w-5"/>
                            </button>
                        ): (
                            <button
                                onClick={()=>setNavbarOpen(false)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <XMarkIcon className="h-5 w-5"/>
                            </button>
                        )
                    }
                </div>
                <div id="navbar" className="menu hidden md:block md:w-auto">
                    <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
                        {navLinks.map((item:TNavLink, index:number)=>(
                            <li key={index}>
                                <NavLink href={item.path} title={item.title}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/*This is the mobile menu*/}
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null }
        </nav>
    );
};
