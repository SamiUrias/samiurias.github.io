import React from 'react';
import {NavLink} from "@/app/components/NavLink";
import {TNavLink} from "@/app/components/NavLink/TNavLink";

interface IMenuOverlayProps {
    links:TNavLink[]
}
export const MenuOverlay = ({links}:IMenuOverlayProps) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link,index)=>
                (<li key={index}>
                    <NavLink href={link.path} title={link.title}/>
                </li>)
            )}
        </ul>
    );
};
