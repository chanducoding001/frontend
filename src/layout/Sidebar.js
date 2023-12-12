import React, { useState } from 'react'
import { IoIosHome } from "react-icons/io";
import { NavLink } from 'react-router-dom';
// import { IoIosArrowDown } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import LinkComponent from './sidebarReusableComponents/LinkComponent';
import NestedLinkComponent from './sidebarReusableComponents/NestedLinkComponent';
import './sidebarReusableComponents/sidebarReusable.css';
const Sidebar = () => {
    const defaultNestedState = {
        auth:true,
        auth2:true,
        classNames:{openLinks:'open-links',closeLinks:'close-links'}
    }
    const [dynamicClasses,setDynamicClasses] = useState(defaultNestedState);
    const nestedLinksClick = (e)=>{
        const spanValue = e.target.innerHTML.replace(/\s/g, '').toLowerCase()
       if(spanValue === 'registerlinks'){
        setDynamicClasses({...dynamicClasses,auth2:!dynamicClasses.auth2})
       }else if(spanValue === 'authlinks'){
        setDynamicClasses({...dynamicClasses,auth:!dynamicClasses.auth})
       }
    }
  return (
    <>
    {/* <div className='sidebar-content'>
        <div className='logo'>
            <img/>
        </div>
        <div className='links-wrapper'>
            <LinkComponent path='/' content='Home' icon={<IoIosHome/>}/>
            <div className='nested-links-wrapper'>
                <NestedLinkComponent nestedLinksClick={nestedLinksClick} icon={<IoIosHome/>} content='Auth Links' angleDown = {<FaAngleDown/>}/>
                <div className={
                    `nested-links ${dynamicClasses.auth?dynamicClasses.classNames.openLinks
                    :dynamicClasses.classNames.closeLinks}`}>
                    <LinkComponent path='/register' content='Register' icon={<IoIosHome/>}/>
                    <LinkComponent path='/login' content='Login' icon={<IoIosHome/>}/>
                </div>
            </div>
            <div className='nested-links-wrapper'>
                <NestedLinkComponent nestedLinksClick={nestedLinksClick} icon={<IoIosHome/>} content='Register Links' angleDown = {<FaAngleDown/>}/>
                <div className={
                    `nested-links ${dynamicClasses.auth2?dynamicClasses.classNames.openLinks
                    :dynamicClasses.classNames.closeLinks}`}>
                    <LinkComponent path='/register' content='Register' icon={<IoIosHome/>}/>
                    <LinkComponent path='/login' content='Login' icon={<IoIosHome/>}/>
                </div>
            </div>
            <LinkComponent path='/' content='Home2' icon={<IoIosHome/>}/>
        </div>
    </div> */}
    
    </>
  )
}

export default Sidebar;