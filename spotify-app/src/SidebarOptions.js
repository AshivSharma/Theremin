import React from 'react'
import "./SidebarOption.css";

function SidebarOptions({ option, Icon }) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption_icon" />}
           {Icon ? <h4> {option} </h4> : <p> {option} </p>}
            
        </div>
    )
}

export default SidebarOptions
