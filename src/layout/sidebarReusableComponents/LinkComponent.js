import React from 'react'
import { IoIosHome } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import './sidebarReusable.css';
const LinkComponent = (props) => {
    const {path,content,icon} = props;
  return (
    <>
    <NavLink to={path} >
        <div className='each-link-div'>
            {icon}
            <span className='invisible-content'>{content}</span>
        </div>
    </NavLink>
    </>
  )
}

export default LinkComponent;