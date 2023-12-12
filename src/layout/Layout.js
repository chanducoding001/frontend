import React, { useState } from 'react'
import Sidebar from './Sidebar';
import { IoChevronForwardSharp } from "react-icons/io5";
import Header from './Header';
import {Outlet} from 'react-router-dom';
import './layout.css';
import Sidebar2 from '../components/practiceSidebar/Sidebar2';
const Layout = () => {
  const defaultToggleSidebar = {
    toggle:true,
    classNames:{show:'show',hide:'hide'},
    iconClassNames:{show:'forward',hide:'backward'}
  }
  const [toggleSidebar,setToggleSidebar] = useState(defaultToggleSidebar);

  return (
    <>
    <div className='layout-wrapper'>
        <div className={`sidebar-wrapper ${toggleSidebar.toggle?toggleSidebar.classNames.show:toggleSidebar.classNames.hide}`}>
            <div className={`sidebar-content`}>
              {/* <Sidebar/> */}
              <Sidebar2/>
            </div>
            <div className={`forward-icon ${toggleSidebar.toggle?toggleSidebar.iconClassNames.show:toggleSidebar.iconClassNames.hide}`} onClick={()=>{
              setToggleSidebar({...toggleSidebar,toggle:!toggleSidebar.toggle})
            }}>
              <IoChevronForwardSharp/></div>
        </div>
        <div className={`header-main-wrapper ${toggleSidebar.toggle?'increaseMargin':'decreaseMargin'}`}>
        <div className='header-wrapper'><Header/></div>
        <div className='content-wrapper'><Outlet/></div>
        </div>
    </div>
    </>
  )
}

export default Layout;