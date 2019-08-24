import React from 'react'

const Sidebar = ({children}) => {
    return (
        <div className="Sidebar">
            <div className="Sidebar-container">
                {children}
            </div>
        </div>
    );
};

export default Sidebar;