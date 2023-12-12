import React from 'react'
import {NavLink} from 'react-router-dom';
import './sidebar2.css';
const SingleLink = (props) => {
    const {icon,content,path} = props;
  return (
    <>
    <div className='one-link'>
    <NavLink to={path}>
        <span className='icon'>{icon}</span>
        <span className='content'>{content}</span>
    </NavLink>
    </div>
    </>
  )
}

export default SingleLink;