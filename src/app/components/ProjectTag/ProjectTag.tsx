import React from "react";

interface IProjectTagProps {
    name: string,
    onClick: (name:string) => void
    isActive: boolean
}

const ProjectTag = ({name, onClick, isActive}: IProjectTagProps) => {
    const buttonStyles = isActive ? 'text-white bg-purple-500' : 'text-[#ADB7BE] border-slate-600 hover:border-white'
    return (<button
            onClick={() => onClick(name)}
            className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}>
            {name}
        </button>
    )
}

export {ProjectTag}
